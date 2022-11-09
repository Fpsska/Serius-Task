import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';

// /. imports

const StyledPrompt = styled.div<PromptStyledPromptProps>`
    display: flex;
    align-items: center;
    margin: 58px 0 20px 0;
    justify-content: ${prop => prop.role === 'descending' && 'flex-end'};
`;

const PromptText = styled.span`
    color: var(--white-color);
    font-size: 26px;
    z-index: 2;
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
`;

const PromptSVG = styled.svg<PromptSVGProps>`
    position: relative;
    z-index: 1;
    margin-left: ${prop => prop.role === 'ascending' && '-16rem'};
    transform: ${prop =>
        prop.role === 'ascending' && 'translate(-0.7rem, 0.25rem) scale(0.7)'};
    order: ${prop => prop.role === 'descending' && -1};
    margin-right: ${prop => prop.role === 'descending' && '-17rem'};
    transform: ${prop =>
        prop.role === 'descending' &&
        'translate(-0.7rem, 0.1rem) scale(0.7) rotate(180deg)'};
`;

// /. styled components

type PromptStyledPromptProps = {
    role: string;
};

type PromptSVGProps = {
    role: string;
};

// /. types

interface propTypes {
    role: string;
}

// /. interfaces

const Prompt = (props: propTypes) => {
    const { role = 'ascending' } = props;

    const [promptText, setPromptText] = useState<string>('По возврастанию');

    useEffect(() => {
        switch (role) {
            case 'ascending':
                setPromptText('По возврастанию');
                break;
            case 'descending':
                setPromptText('По убыванию');
                break;
            default:
                setPromptText('По возврастанию');
        }
    }, [role]);

    return (
        <StyledPrompt role={role}>
            <PromptText>{promptText}</PromptText>
            <PromptSVG
                width="358"
                height="69"
                viewBox="0 0 358 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role={role}
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
        </StyledPrompt>
    );
};

export default Prompt;
