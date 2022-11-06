import React, { useState } from 'react';

import { useRouter } from 'next/router';

import styled from '@emotion/styled';

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

const Mode = styled.div`
    display: flex;
    margin-bottom: 95px;
`;

const ButtonMode = styled.button`
    background-color: var(--yellow-color);
    color: var(--dark-color);
    border-radius: 20px;
    font-weight: 700;
    font-size: 22px;
    padding: 5px 20px;
    :not(:last-child) {
        margin-right: 36px;
    }
    &:disabled {
        opacity: 0.5;
    }
`;

const ButtonPlay = styled(ButtonMode)`
    box-shadow: 0px 14px 8px -5px rgba(34, 60, 80, 0.1);
    background-color: var(--green-color);
    color: var(--white-color);
    padding: 12px 74px;
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
    flex: 1;
    flex-direction: column;
    width: 100%;
`;

const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
`;

const ListTemplate = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    :not(:last-child) {
        margin-right: 10px;
    }
`;

const Legend = styled.legend`
    color: var(--dark-color);
    font-weight: 700;
    font-size: 28px;
    text-align: center;
    margin-bottom: 16px;
`;

const Label = styled.label`
    color: #4f4b61;
    font-weight: 700;
    font-size: 18px;
    transition: all 0.3s ease-in-out;
    order: -1;
`;

const InputCount = styled.input`
    margin: 0;
    &:hover ~ label {
        color: var(--yellow-color);
    }
`;

// /. styled components

interface IquantityItem {
    id: number;
    value: number;
    name: string;
    isSelected: boolean;
}

interface IvalueItem {
    id: number;
    value: string | number;
    name: string;
    isSelected: boolean;
}

// /. interfaces

const StartPage = () => {
    const [quantityItemData, setQuantityItemData] = useState<IquantityItem[]>([
        {
            id: 1,
            value: 2,
            name: 'item-quantity',
            isSelected: true
        },
        {
            id: 2,
            value: 3,
            name: 'item-quantity',
            isSelected: false
        },
        {
            id: 3,
            value: 4,
            name: 'item-quantity',
            isSelected: false
        },
        {
            id: 4,
            value: 5,
            name: 'item-quantity',
            isSelected: false
        }
    ]);
    const [valueItemData, setValueItemData] = useState<IvalueItem[]>([
        {
            id: 1,
            value: 'A',
            name: 'item-value',
            isSelected: true
        },
        {
            id: 2,
            value: 9,
            name: 'item-value',
            isSelected: false
        },
        {
            id: 3,
            value: 19,
            name: 'item-value',
            isSelected: false
        },
        {
            id: 4,
            value: 50,
            name: 'item-value',
            isSelected: false
        },
        {
            id: 5,
            value: 99,
            name: 'item-value',
            isSelected: false
        },
        {
            id: 6,
            value: 999,
            name: 'item-value',
            isSelected: false
        }
    ]);

    const router = useRouter();

    return (
        <Section>
            <Wrapper>
                <Form onSubmit={e => e.preventDefault()}>
                    <Fieldset>
                        <Legend>Кол-во предметов</Legend>
                        <List>
                            {quantityItemData.map((input: IquantityItem) => (
                                <ListTemplate key={input.id}>
                                    <InputCount
                                        key={input.id}
                                        id={`${input.name}-${input.id}`}
                                        type="radio"
                                        name={input.name}
                                        defaultChecked={input.isSelected}
                                    />
                                    <Label
                                        htmlFor={`${input.name}-${input.id}`}
                                    >
                                        {input.value}
                                    </Label>
                                </ListTemplate>
                            ))}
                        </List>
                    </Fieldset>
                    <Fieldset>
                        <Legend>Значения</Legend>
                        <List>
                            {valueItemData.map((input: IvalueItem) => (
                                <ListTemplate key={input.id}>
                                    <InputCount
                                        key={input.id}
                                        id={`${input.name}-${input.id}`}
                                        type="radio"
                                        name={input.name}
                                        defaultChecked={input.isSelected}
                                    />
                                    <Label
                                        htmlFor={`${input.name}-${input.id}`}
                                    >
                                        {input.value}
                                    </Label>
                                </ListTemplate>
                            ))}
                        </List>
                    </Fieldset>
                    <Mode>
                        <ButtonMode type="button">По возврастанию</ButtonMode>
                        <ButtonMode
                            type="button"
                            disabled
                        >
                            По убыванию
                        </ButtonMode>
                    </Mode>
                    <ButtonPlay
                        type="submit"
                        onClick={() => router.push('/playground')}
                    >
                        Играть
                    </ButtonPlay>
                </Form>
            </Wrapper>
        </Section>
    );
};

export default StartPage;
