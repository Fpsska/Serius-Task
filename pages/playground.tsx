import React from 'react';

import styled from '@emotion/styled';

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

const Bar = styled.div`
    background-color: #444;
    border-radius: 20px;
    padding: 20px;
    min-height: 70px;
`;

const BarList = styled.ul`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(6, 1fr);
`;

const BarListTemplate = styled.li`
    height: 130px;
    background-color: yellow;
    border-radius: 100%;

    background: rgba(0, 0, 0, 0.06);
    box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
`;

const ItemsList = styled(BarList)`
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

const Prompt = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
`;

const PromptText = styled.span`
    color: var(--white-color);
    font-size: 26px;
    text-shadow: 1px 1px #000, -1px 1px #000, 1px -1px #000, -1px -1px #000,
        1px 1px 5px #000;
    z-index: 2;
`;

const PromptSVG = styled.svg`
    position: relative;
    margin-left: -16rem;
    transform: translate(-0.7rem, 0.25rem) scale(0.7);
    z-index: 1;
`;

// /. styled components

const PlaygroundPage = () => {
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

                <Prompt>
                    <PromptText>По возврастанию</PromptText>
                    <PromptSVG
                        width="358"
                        height="69"
                        viewBox="0 0 358 69"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M294.278 0L357.5 34.3222L294.278 68.6443V50.3945H0V18.2499H294.278V0Z"
                            fill="url(#paint0_linear_1_169)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_1_169"
                                x1="311.5"
                                y1="68.636"
                                x2="103"
                                y2="13.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FEFFDE" />
                                <stop
                                    offset="0.625112"
                                    stopColor="white"
                                    stopOpacity="0"
                                />
                            </linearGradient>
                        </defs>
                    </PromptSVG>
                </Prompt>

                <Bar>
                    <BarList>
                        <BarListTemplate></BarListTemplate>
                        <BarListTemplate></BarListTemplate>
                        <BarListTemplate></BarListTemplate>
                        <BarListTemplate></BarListTemplate>
                        <BarListTemplate></BarListTemplate>
                        <BarListTemplate></BarListTemplate>
                    </BarList>
                </Bar>
            </Wrapper>
        </Section>
    );
};

export default PlaygroundPage;
