import React from 'react';

import styled from '@emotion/styled';

import { useAppSelector } from '../../store/hooks';

import Bar from '../components/Bar';
import Prompt from '../components/Prompt';

// /.imports

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 30px 0;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ItemsList = styled.ul`
    flex: 1;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(5, 1fr);
`;

const ItemsListTemplate = styled.li`
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);

    &:nth-of-type(2n) {
        background: red;
    }
`;

// /. styled components

const PlaygroundPage = () => {
    const { gameSettings } = useAppSelector(state => state.mainSlice);

    // /. hooks

    return (
        <Section>
            <Wrapper>
                <ItemsList>
                    <ItemsListTemplate></ItemsListTemplate>
                    <ItemsListTemplate></ItemsListTemplate>
                    <ItemsListTemplate></ItemsListTemplate>
                    <ItemsListTemplate></ItemsListTemplate>
                    <ItemsListTemplate></ItemsListTemplate>
                </ItemsList>

                <Prompt role={gameSettings.mode} />

                <Bar />
            </Wrapper>
        </Section>
    );
};

export default PlaygroundPage;
