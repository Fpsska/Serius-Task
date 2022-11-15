import React, { useState } from 'react';

import styled from '@emotion/styled';

import { IbuttonMode } from '../types/buttonModTypes';

// /.imports

const StyledMode = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 95px;
`;

const ModeButton = styled.input`
    position: absolute;
    overflow: hidden;
    height: 1px;
    width: 1px;
    clip: rect(0 0 0 0);
    transition: all 0.3s ease-in-out;
    &:disabled {
        opacity: 0.5;
    }
`;

const ModeButtonLabel = styled.label<ButtonModeProps>`
    background-color: var(--yellow-color);
    padding: 5px 20px;
    color: var(--dark-color);
    border-radius: 20px;
    font-weight: 700;
    font-size: 22px;
    opacity: ${props => (props.isSelected ? 1 : 0.5)};
    transition: all 0.3s ease-in-out;
    :not(:last-child) {
        margin-right: 36px;
    }
    &:hover {
        cursor: pointer;
        opacity: ${props => !props.isSelected && 0.8};
    }
`;

// /. styled components

type ButtonModeProps = {
    isSelected: boolean;
};

// /. types

interface propTypes {
    setModeValue: (arg: string) => void;
}

// /. interfaces

const Mode = (props: propTypes) => {
    const { setModeValue } = props;

    const [buttonModeTemplates, setButtonModeTemplates] = useState<
        IbuttonMode[]
    >([
        {
            id: 1,
            value: 'ascending',
            name: 'mode',
            forAttr: 'mode-asc',
            label: 'По возврастанию',
            isSelected: true
        },
        {
            id: 2,
            value: 'descending',
            name: 'mode',
            forAttr: 'mode-dec',
            label: 'По убыванию',
            isSelected: false
        }
    ]);

    // /. hooks

    const onButtonChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: number
    ): void => {
        setModeValue(e.target.value);
        //
        const newArr = [...buttonModeTemplates];
        newArr.map((item: any) =>
            item.id === id
                ? (item.isSelected = true)
                : (item.isSelected = false)
        );
        setButtonModeTemplates(newArr);
    };

    // /. functions

    return (
        <StyledMode>
            {buttonModeTemplates.map(button => {
                return (
                    <ModeButtonLabel
                        key={button.id}
                        htmlFor={button.forAttr}
                        isSelected={button.isSelected}
                    >
                        {button.label}
                        <ModeButton
                            id={button.forAttr}
                            type="radio"
                            name={button.name}
                            value={button.value}
                            checked={button.isSelected}
                            onChange={e => onButtonChange(e, button.id)}
                        />
                    </ModeButtonLabel>
                );
            })}
        </StyledMode>
    );
};

export default Mode;
