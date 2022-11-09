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
    text-shadow: 2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000,
        2px 2px 5px #000;
    z-index: 2;
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
