import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';

import { useAppSelector } from '../../store/hooks';

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
    // height: ${props => (props.isSelected ? 'auto' : '130px')};
    // max-width: ${props => (props.isSelected ? 'auto' : '130px')};
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
    }
`;

// /. styled components

type BarListTemplateProps = {
    isSelected?: boolean;
};

// /. types

const Bar = () => {
    const [backgroundIMG, setBackgroundIMG] = useState<string>('');

    const { currentBackgroundCollection } = useAppSelector(
        state => state.mainSlice
    );

    // /. hooks

    useEffect(() => {
        setBackgroundIMG(currentBackgroundCollection.barImage);
    }, [currentBackgroundCollection]);

    // /. effects

    return (
        <StyledBar style={{ backgroundImage: `url(${backgroundIMG})` }}>
            <BarList>
                <BarListTemplate isSelected>
                    <InteractiveItemTemplate
                        count={
                            currentBackgroundCollection.interactiveItems[0]
                                .count
                        }
                        image={'/'}
                    />
                </BarListTemplate>
                <BarListTemplate></BarListTemplate>
                <BarListTemplate isSelected>
                    <InteractiveItemTemplate
                        count={
                            currentBackgroundCollection.interactiveItems[2]
                                .count
                        }
                        image={
                            currentBackgroundCollection.interactiveItems[2]
                                .image
                        }
                    />
                </BarListTemplate>
                <BarListTemplate isSelected>
                    <InteractiveItemTemplate
                        count={
                            currentBackgroundCollection.interactiveItems[3]
                                .count
                        }
                        image={
                            currentBackgroundCollection.interactiveItems[3]
                                .image
                        }
                    />
                </BarListTemplate>
                <BarListTemplate isSelected>
                    <InteractiveItemTemplate
                        count={
                            currentBackgroundCollection.interactiveItems[4]
                                .count
                        }
                        image={
                            currentBackgroundCollection.interactiveItems[4]
                                .image
                        }
                    />
                </BarListTemplate>
            </BarList>
        </StyledBar>
    );
};

export default Bar;
