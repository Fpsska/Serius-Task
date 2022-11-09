import React from 'react';

import Image from 'next/image';

import styled from '@emotion/styled';

import { useAppSelector } from '../../store/hooks';

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
        top: 72%;
        left: 50%;
        transform: translate(-50%, -72%);
        z-index: 1;

        font-size: 56px;
        color: var(--white-color);
        font-weight: 400;

        text-shadow: 1px 1px #000, -1px 1px #000, 1px -1px #000, -1px -1px #000,
            1px 1px 5px #000;
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
                    <ItemsListTemplate>
                        <ImageWrapper data-count="42">
                            <Image
                                src="/svg/toy-item_1.svg"
                                alt="toy"
                                width={158}
                                height={168}
                                quality={100}
                                objectFit="contain"
                            />
                        </ImageWrapper>
                    </ItemsListTemplate>
                    <ItemsListTemplate>
                        <ImageWrapper data-count="46">
                            <Image
                                src="/svg/toy-item_2.svg"
                                alt="toy"
                                width={158}
                                height={168}
                                quality={100}
                                objectFit="contain"
                            />
                        </ImageWrapper>
                    </ItemsListTemplate>
                    <ItemsListTemplate>
                        <ImageWrapper data-count="112">
                            <Image
                                src="/svg/toy-item_3.svg"
                                alt="toy"
                                width={158}
                                height={162}
                                quality={100}
                                objectFit="contain"
                            />
                        </ImageWrapper>
                    </ItemsListTemplate>
                    <ItemsListTemplate>
                        <ImageWrapper data-count="74">
                            <Image
                                src="/svg/toy-item_4.svg"
                                alt="toy"
                                width={158}
                                height={170}
                                quality={100}
                                objectFit="contain"
                            />
                        </ImageWrapper>
                    </ItemsListTemplate>
                    <ItemsListTemplate>
                        <ImageWrapper data-count="56">
                            <Image
                                src="/svg/toy-item_3.svg"
                                alt="toy"
                                width={158}
                                height={162}
                                quality={100}
                                objectFit="contain"
                            />
                        </ImageWrapper>
                    </ItemsListTemplate>
                </ItemsList>

                <Prompt role={gameSettings.mode} />

                <Bar />
            </Wrapper>
        </Section>
    );
};

export default PlaygroundPage;
