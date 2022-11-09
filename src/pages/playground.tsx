import React from 'react';

import Image from 'next/image';

import styled from '@emotion/styled';

import { useAppSelector } from '../../store/hooks';

import { Iinteractive } from '../types/backgroundCollectionTypes';

import Bar from '../components/Bar';
import Prompt from '../components/Prompt';

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

const ItemsList = styled.ul`
    flex: 1;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(5, 1fr);
`;

const ItemsListTemplate = styled.li`
    display: flex;
    justify-content: center;

    // background: rgba(0, 0, 0, 0.5);

    &:nth-of-type(1),
    &:last-of-type {
        align-self: center;
        margin-top: 5rem;
    }

    &:nth-of-type(3n) {
        align-self: end;
    }

    // &:nth-of-type(2n) {
    //     background: red;
    // }
`;

const ImageWrapper = styled.div`
    position: relative;
    height: min-content;
    flex-shrink: 0;

    &::before {
        content: attr(data-count);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: 1;
        font-size: 56px;
        color: var(--white-color);
        font-weight: 400;

        text-shadow: rgb(36, 37, 70) 3px 0px 0px,
            rgb(36, 37, 70) 2.83487px 0.981584px 0px,
            rgb(36, 37, 70) 2.35766px 1.85511px 0px,
            rgb(36, 37, 70) 1.62091px 2.52441px 0px,
            rgb(36, 37, 70) 0.705713px 2.91581px 0px,
            rgb(36, 37, 70) -0.287171px 2.98622px 0px,
            rgb(36, 37, 70) -1.24844px 2.72789px 0px,
            rgb(36, 37, 70) -2.07227px 2.16926px 0px,
            rgb(36, 37, 70) -2.66798px 1.37182px 0px,
            rgb(36, 37, 70) -2.96998px 0.42336px 0px,
            rgb(36, 37, 70) -2.94502px -0.571704px 0px,
            rgb(36, 37, 70) -2.59586px -1.50383px 0px,
            rgb(36, 37, 70) -1.96093px -2.27041px 0px,
            rgb(36, 37, 70) -1.11013px -2.78704px 0px,
            rgb(36, 37, 70) -0.137119px -2.99686px 0px,
            rgb(36, 37, 70) 0.850987px -2.87677px 0px,
            rgb(36, 37, 70) 1.74541px -2.43999px 0px,
            rgb(36, 37, 70) 2.44769px -1.73459px 0px,
            rgb(36, 37, 70) 2.88051px -0.838247px 0px;
    }

    img {
        object-fit: contain;
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
                <ItemsList>
                    {currentBackgroundCollection.interactiveItems.map(
                        (template: Iinteractive) => {
                            return (
                                <ItemsListTemplate key={template.id}>
                                    <ImageWrapper data-count={template.count}>
                                        <Image
                                            src={template.image}
                                            alt="toy"
                                            width={158}
                                            height={168}
                                            quality={100}
                                        />
                                    </ImageWrapper>
                                </ItemsListTemplate>
                            );
                        }
                    )}
                </ItemsList>

                <Prompt role={gameSettings.mode} />

                <Bar />
            </Wrapper>
        </Section>
    );
};

export default PlaygroundPage;
