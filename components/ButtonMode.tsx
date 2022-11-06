import React from 'react';

import styled from '@emotion/styled';

// /.imports

const Button = styled.input`
    // position: absolute;
    // overflow: hidden;
    // height: 1px;
    // width: 1px;
    // clip: rect(0 0 0 0);
    &:disabled {
        opacity: 0.5;
    }
`;

const ButtonLabel = styled.label<ButtonModeProps>`
    background-color: var(--yellow-color);
    padding: 5px 20px;
    color: var(--dark-color);
    border-radius: 20px;
    font-weight: 700;
    font-size: 22px;
    opacity: ${props => (props.isSelected ? 1 : 0.5)};
    :not(:last-child) {
        margin-right: 36px;
    }
    &:hover {
        cursor: pointer;
    }
`;

// /. styled components

type ButtonModeProps = {
    isSelected: boolean;
};

// /. types

interface propTypes {
    id: number;
    name: string;
    value: string;
    forAttr: string;
    label: string;
    isSelected: boolean;
    setModeValue: (arg: string) => void;
    setButtonModeTemplates: (arg: any[]) => void;
    buttonModeTemplates: any[];
}

// /. interfaces

const ButtonMode = (props: propTypes) => {
    const {
        id,
        name,
        value,
        forAttr,
        label,
        isSelected,
        setModeValue,
        setButtonModeTemplates,
        buttonModeTemplates
    } = props;

    const onButtonChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

    return (
        <ButtonLabel
            htmlFor={forAttr}
            isSelected={isSelected}
        >
            {label}
            <Button
                id={forAttr}
                type="radio"
                name={name}
                value={value}
                checked={isSelected}
                onChange={e => onButtonChange(e)}
            />
        </ButtonLabel>
    );
};

export default ButtonMode;
