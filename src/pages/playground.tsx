import React from 'react';

import styled from '@emotion/styled';

import { useAppSelector, useAppDispatch } from '../../store/hooks';

import { addCurrentItemFromPlayground } from '../../store/mainSlice';

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

    &:nth-of-type(1),
    &:last-of-type {
        align-self: center;
        // margin-top: 5rem;
    }

    &:nth-of-type(3n) {
        align-self: end;
    }
`;

// /. styled components

const PlaygroundPage = () => {
    const { gameSettings, currentBackgroundCollection } = useAppSelector(
        state => state.mainSlice
    );

    const dispatch = useAppDispatch();

    // /. hooks

    const onDragStartHandler = (e: any, id: number): void => {
        console.log('Drag has started!');
        e.dataTransfer.setData('itemID', id);
    };

    const onDragOverHandler = (e: any): void => {
        e.preventDefault();
        console.log('draggin over in PLAYGROUND!');
    };

    const onDropHandler = (e: any, id: number): void => {
        e.preventDefault();
        console.log('dropped in PLAYGROUND!');
        //
        const targetItemID = +e.dataTransfer.getData('itemID');
        dispatch(
            addCurrentItemFromPlayground({
                playgroundID: id,
                itemID: targetItemID
            })
        );
    };

    // /. functions

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
