import React, { useState, useEffect, DragEvent } from 'react';

import styled from '@emotion/styled';

import { useAppSelector, useAppDispatch } from '../../store/hooks';

import { setOrderedData } from '../../store/mainSlice';

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
    grid-template-columns: repeat(5, 1fr);
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
        // overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        &::before {
            font-size: 32px;
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
    isSelected?: boolean;
};

// /. types

const Bar = () => {
    const [backgroundIMG, setBackgroundIMG] = useState<string>('');

    const { currentBackgroundCollection, orderedData } = useAppSelector(
        state => state.mainSlice
    );

    const dispatch = useAppDispatch();

    // /. hooks

    const onDragOverHandler = (e: any): void => {
        e.preventDefault();
        console.log('Draggin over now!');
        //
        e.target.style.boxShadow = 'inset 0px 4px 25px rgba(0, 0, 0, 0.55)';
    };

    const onDropHandler = (e: any, id: number): void => {
        e.preventDefault();
        console.log('You have dropped! ');
        //
        const targetItemID = +e.dataTransfer.getData('itemID');
        dispatch(setOrderedData({ barID: id, itemID: targetItemID }));
        //
        e.target.style.boxShadow = 'none';
    };

    const onDragLeaveHandler = (e: any): void => {
        e.target.style.boxShadow = 'inset 0px 4px 25px rgba(0, 0, 0, 0.25)';
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
                            onDrop={e => onDropHandler(e, template.id)}
                            onDragLeave={e => onDragLeaveHandler(e)}
                        >
                            {template.isSelected && (
                                <InteractiveItemTemplate
                                    count={template.count}
                                    image={template.image}
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
