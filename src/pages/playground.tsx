import React, { useEffect } from 'react';

import styled from '@emotion/styled';

import { useAppSelector, useAppDispatch } from '../../store/hooks';

import {
    addCurrentItemToPlayground,
    switchModalVisibleStatus,
    setReferenceOrderedData
} from '../../store/mainSlice';

import { compareObjByKey } from '../helpers/compareObjByKey';

import { Iinteractive } from '../types/backgroundCollectionTypes';

import Bar from '../components/Bar';
import Prompt from '../components/Prompt';
import InteractiveItemTemplate from '../components/InteractiveItemTemplate';

// /.imports

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 116px 0 30px 0;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const InteractiveItemsList = styled.ul`
    flex: 1;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(5, 1fr);
`;

const InteractiveItemTemplateWrapper = styled.li`
    display: flex;
    justify-content: center;
    border: 1px dashed red;
    height: 100%;

    &:hover {
        cursor: pointer;
    }

    :nth-of-type(1),
    :last-child {
        div {
            align-self: center;
            margin-top: 5rem;
        }
    }

    :nth-of-type(3n) {
        div {
            margin: auto 0 0 0;
        }
    }
`;

// /. styled components

const PlaygroundPage = () => {
    const {
        gameSettings,
        currentBackgroundCollection,
        orderedData,
        refOrderedData
    } = useAppSelector(state => state.mainSlice);

    const dispatch = useAppDispatch();

    // /. hooks

    const onDragStartHandler = (e: any, id: number): void => {
        // console.log('Drag has started!');
        e.dataTransfer.setData('itemID', id);
    };

    const onDragOverHandler = (e: any): void => {
        e.preventDefault();
        // console.log('draggin over in PLAYGROUND!');
    };

    const onDropHandler = (e: any, id: number): void => {
        e.preventDefault();
        // console.log('dropped in PLAYGROUND!');
        //
        const targetItemID = +e.dataTransfer.getData('itemID');
        dispatch(
            addCurrentItemToPlayground({
                playgroundID: id,
                itemID: targetItemID
            })
        );
    };

    // /. functions

    useEffect(() => {
        dispatch(setReferenceOrderedData({ mode: gameSettings.mode }));
    }, [gameSettings]); // or gameSettings.mode

    useEffect(() => {
        const outPutOrderedData = orderedData.filter(
            item => !item.isInitialValue
        );
        const isItemsSelected = orderedData.every(item => item.isSelected);
        const isArraysEqual = compareObjByKey(
            refOrderedData,
            outPutOrderedData,
            'count'
        );
        if (isItemsSelected && isArraysEqual) {
            dispatch(switchModalVisibleStatus(true));
        }
    }, [orderedData, refOrderedData]);

    // /. effects

    return (
        <Section>
            <Wrapper>
                <InteractiveItemsList>
                    {currentBackgroundCollection.interactiveItems.map(
                        (template: Iinteractive) => {
                            return (
                                <InteractiveItemTemplateWrapper
                                    key={template.id}
                                    onDragOver={e => onDragOverHandler(e)}
                                    onDrop={e => onDropHandler(e, template.id)}
                                >
                                    {template.isSelected && (
                                        <InteractiveItemTemplate
                                            onDragStartHandler={
                                                onDragStartHandler
                                            }
                                            {...template}
                                        />
                                    )}
                                </InteractiveItemTemplateWrapper>
                            );
                        }
                    )}
                </InteractiveItemsList>

                <Prompt role={gameSettings.mode} />

                <Bar onDragStartHandler={onDragStartHandler} />
            </Wrapper>
        </Section>
    );
};

export default PlaygroundPage;
