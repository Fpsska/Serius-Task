import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';

import { useAppSelector, useAppDispatch } from '../../store/hooks';

import { addCurrentItemToOrderedData } from '../../store/mainSlice';

import { Iordered } from '../types/backgroundCollectionTypes';

import InteractiveItemTemplate from './InteractiveItemTemplate';

// /.imports

const StyledBar = styled.div`
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    background-color: transparent;
    border-radius: 20px;
    padding: 46px 30px;
    min-height: 222px;
`;

const BarList = styled.ul`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(6, 1fr);
`;

const BarListTemplate = styled.li<BarListTemplateProps>`
    height: 130px;
    max-width: 130px;
    border-radius: 100%;
    background: ${props => (props.isSelected ? 'none' : 'rgba(0, 0, 0, 0.06)')};
    box-shadow: ${props =>
        props.isSelected ? 'none' : 'inset 0px 4px 25px rgba(0, 0, 0, 0.25)'};

    &:hover {
        cursor: pointer;
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;

        &::before {
            font-size: 32px;
            background: transparent;
        }
    }

    img {
        width: 130px;
        height: 130px;
        pointer-events: none;
    }
`;

// /. styled components

type BarListTemplateProps = {
    isSelected: boolean;
};

// /. types

interface propTypes {
    onDragStartHandler: (
        arg1: React.DragEvent<HTMLDivElement>,
        arg2: number
    ) => void;
}

// /. interfaces

const Bar = (props: propTypes) => {
    const { onDragStartHandler } = props;

    const [backgroundIMG, setBackgroundIMG] = useState<string>('');

    const { currentBackgroundCollection, orderedData } = useAppSelector(
        state => state.mainSlice
    );

    const dispatch = useAppDispatch();

    // /. hooks

    const onDragOverHandler = (e: any): void => {
        e.preventDefault();
        // console.log('Draggin over now!');
        //
        if (!e.target.childElementCount) {
            // forbid to add styles when item is already selected
            e.target.style.boxShadow = 'inset 0px 4px 25px rgba(0, 0, 0, 0.55)';
        }
    };

    const onDropHandler = (e: any, id: number): void => {
        e.preventDefault();
        // console.log('You have dropped!');
        //
        const targetItemID = +e.dataTransfer.getData('itemID');
        dispatch(
            addCurrentItemToOrderedData({ itemID: targetItemID, barID: id })
        );
        //
        e.target.style.boxShadow = 'none';
    };

    const onDragLeaveHandler = (e: any): void => {
        // console.log('You leave out of area');
        if (!e.target.childElementCount) {
            // forbid to add styles when item is already selected
            e.target.style.boxShadow = 'inset 0px 4px 25px rgba(0, 0, 0, 0.25)';
        }
    };

    // /. functions

    useEffect(() => {
        setBackgroundIMG(currentBackgroundCollection.barImage);
    }, [currentBackgroundCollection]);

    // /. effects

    return (
        <StyledBar style={{ backgroundImage: `url(${backgroundIMG})` }}>
            <BarList>
                {orderedData.map((template: Iordered) => {
                    return (
                        <BarListTemplate
                            isSelected={template.isSelected}
                            key={template.id}
                            onDragOver={e => onDragOverHandler(e)}
                            onDragLeave={e => onDragLeaveHandler(e)}
                            onDrop={e => onDropHandler(e, template.id)}
                        >
                            {template.isSelected && (
                                <InteractiveItemTemplate
                                    {...template}
                                    onDragStartHandler={onDragStartHandler}
                                />
                            )}
                        </BarListTemplate>
                    );
                })}
            </BarList>
        </StyledBar>
    );
};

export default Bar;
