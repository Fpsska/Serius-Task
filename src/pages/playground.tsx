import React, { useState } from 'react';

import styled from '@emotion/styled';

import { useAppSelector } from '../../store/hooks';

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

    &:hover {
        cursor: pointer;
    }

    &:nth-of-type(1),
    &:last-of-type {
        align-self: center;
        margin-top: 5rem;
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

    // /. hooks

    return (
        <Section>
            <Wrapper>
                <InteractiveItemsList>
                    {currentBackgroundCollection.interactiveItems.map(
                        (template: Iinteractive) => {
                            return (
                                <InteractiveItemTemplateWrapper
                                    key={template.id}
                                >
                                    <InteractiveItemTemplate {...template} />
                                </InteractiveItemTemplateWrapper>
                            );
                        }
                    )}
                </InteractiveItemsList>

                <Prompt role={gameSettings.mode} />

                <Bar />
            </Wrapper>
        </Section>
    );
};

export default PlaygroundPage;
