import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import styled from '@emotion/styled';

import { useAppSelector, useAppDispatch } from '../../store/hooks';

import {
    switchQuantityItemSelectedStatus,
    switchValueItemSelectedStatus,
    switchGameStartedStatus,
    saveGameSettingsData,
    setCurrentBackCollection,
    setInitialItemOfOrderedData
} from '../../store/mainSlice';

import { getRandomArrElement } from '../helpers/getRandomArrElement';

import { IvalueItem } from '../types/valueItemTypes';
import { IquantityItem } from '../types/quantityItemTypes';

import Mode from '../components/Mode';

// /. imports

const Section = styled.section`
    position: relative;
    padding: 75px 95px;
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-color: var(--blue-color);
    background-image: linear-gradient(to left bottom, #7f75f0, #101f32);
    color: var(--dark-color);
    border-radius: 5%;
    padding: 20px;
`;

const ButtonPlay = styled.button`
    border-radius: 20px;
    font-weight: 700;
    font-size: 22px;
    box-shadow: 0px 14px 8px -5px rgba(34, 60, 80, 0.1);
    background-color: var(--green-color);
    color: var(--white-color);
    padding: 12px 74px;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: var(--dark-color);
    }
    &:disabled {
        opacity: 0.5;
    }
`;

const Form = styled.form`
    padding: 35px 20px 25px 20px;
    height: 100%;
    background-color: var(--white-color);
    border-radius: 4%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FieldsetGrowed = styled(Fieldset)`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`;

const List = styled.ul`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    width: min-content;
    border-radius: 10px;
    margin: 0 auto;
    &::before {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 0;
        background-color: var(--yellow-color);
        width: 100%;
        height: 16px;
        border-radius: 10px;
    }
`;

const ListTemplate = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    :not(:last-child) {
        margin-right: 68px;
    }
`;

const Legend = styled.legend`
    color: var(--dark-color);
    font-weight: 700;
    font-size: 28px;
    text-align: center;
    margin-bottom: 16px;
    visibility: ${props => props.hidden && 'hidden'};
`;

const Label = styled.label`
    color: #4f4b61;
    font-weight: 700;
    font-size: 18px;
    transition: all 0.3s ease-in-out;
    order: -1;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputCount = styled.input`
    margin: 0;
    position: absolute;
    overflow: hidden;
    height: 1px;
    width: 1px;
    clip: rect(0 0 0 0);
    &:hover + span {
        background-color: var(--blue-color);
        opacity: 0.5;
    }
    &:hover&:checked + span {
        opacity: 1;
    }
    &:hover&:disabled + span {
        cursor: default;
    }
    &:hover&:disabled&:checked + span {
        cursor: not-allowed;
    }
    &:disabled + span {
        background-color: transparent;
        cursor: default;
    }
    &:disabled&:checked + span {
        cursor: not-allowed;
        opacity: 0.6;
    }
    &:checked + span {
        background-color: var(--blue-color);
    }
`;

const FakeInput = styled.span`
    display: block;
    background-color: transparent;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;
    z-index: 1;
`;

// /. styled components

const StartPage = () => {
    const [itemQuantityValue, setItemQuantityValue] = useState<string>('');
    const [itemValue, setItemValue] = useState<string>('');
    const [modeValue, setModeValue] = useState<string>('');

    const router = useRouter();
    const dispatch = useAppDispatch();

    const {
        quantityItemData,
        valueItemData,
        gameSettings,
        backgroundsCollection,
        orderedData,
        isGameStarted
    } = useAppSelector(state => state.mainSlice);

    // /. hooks

    const onInputQuantityChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: number
    ): void => {
        setItemQuantityValue(e.target.value);
        dispatch(switchQuantityItemSelectedStatus({ id }));
    };

    const onInputTotalValueChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: number
    ): void => {
        setItemValue(e.target.value);
        dispatch(switchValueItemSelectedStatus({ id }));
    };

    const onButtonPlayClick = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        //
        dispatch(
            saveGameSettingsData({
                quantity: itemQuantityValue || quantityItemData[0]?.value,
                totalValue: itemValue || valueItemData[0]?.value,
                mode: modeValue || 'ascending'
            })
        );
        dispatch(switchGameStartedStatus(true));
        //
        router.push('/playground');
    };

    // /. functions

    useEffect(() => {
        dispatch(
            setCurrentBackCollection(getRandomArrElement(backgroundsCollection))
        );
    }, [backgroundsCollection]);

    useEffect(() => {
        if (isGameStarted) {
            dispatch(setInitialItemOfOrderedData({ mode: gameSettings.mode }));
        }
    }, [gameSettings, isGameStarted]); // gameSettings.mode

    // /. effects

    return (
        <Section>
            <Wrapper>
                <Form onSubmit={e => e.preventDefault()}>
                    <FieldsetGrowed>
                        <Legend>Кол-во предметов</Legend>
                        <List>
                            {quantityItemData.map((input: IquantityItem) => (
                                <ListTemplate key={input.id}>
                                    <Label
                                        htmlFor={`${input.name}-${input.id}`}
                                    >
                                        {input.value}
                                        <InputCount
                                            key={input.id}
                                            id={`${input.name}-${input.id}`}
                                            type="radio"
                                            name={input.name}
                                            value={input.value}
                                            checked={input.isSelected}
                                            onChange={e =>
                                                onInputQuantityChange(
                                                    e,
                                                    input.id
                                                )
                                            }
                                        />
                                        <FakeInput />
                                    </Label>
                                </ListTemplate>
                            ))}
                        </List>
                    </FieldsetGrowed>
                    <FieldsetGrowed>
                        <Legend>Значения</Legend>
                        <List>
                            {valueItemData.map((input: IvalueItem) => (
                                <ListTemplate key={input.id}>
                                    <Label
                                        htmlFor={`${input.name}-${input.id}`}
                                    >
                                        {input.value}
                                        <InputCount
                                            key={input.id}
                                            id={`${input.name}-${input.id}`}
                                            type="radio"
                                            name={input.name}
                                            value={input.value}
                                            checked={input.isSelected}
                                            onChange={e =>
                                                onInputTotalValueChange(
                                                    e,
                                                    input.id
                                                )
                                            }
                                        />
                                        <FakeInput />
                                    </Label>
                                </ListTemplate>
                            ))}
                        </List>
                    </FieldsetGrowed>
                    <Fieldset>
                        <Legend hidden>Режим</Legend>
                        <Mode setModeValue={setModeValue} />
                    </Fieldset>

                    <ButtonPlay
                        type="submit"
                        onClick={e => onButtonPlayClick(e)}
                    >
                        Играть
                    </ButtonPlay>
                </Form>
            </Wrapper>
        </Section>
    );
};

export default StartPage;
