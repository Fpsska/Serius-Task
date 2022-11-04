import React from 'react';

import styled from '@emotion/styled';

// /. imports

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    padding: 90px 140px;
    background-color: #a2d3da;
    background-image: url(/images/background-template_settings.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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

const Mode = styled.div`
    display: flex;
    margin-bottom: 95px;
`;

const Label = styled.label`
    color: var(--dark-color);
    font-weight: 700;
    font-size: 28px;
`;

const ButtonMode = styled.button`
    background-color: var(--yellow-color);
    color: var(--dark-color);
    border-radius: 20px;
    font-weight: 700;
    font-size: 28px;
    padding: 2px 20px;
    :not(:last-child) {
        margin-right: 36px;
    }
`;

const ButtonPlay = styled(ButtonMode)`
    background-color: var(--green-color);
    color: var(--white-color);
    padding: 12px 74px;
`;

const StartPage: React.FC = () => {
    return (
        <Section>
            <Wrapper>
                <Form>
                    <Label htmlFor="items-count">Кол-во предметов</Label>
                    <Label htmlFor="items-value">Значения</Label>
                    <Mode>
                        <ButtonMode type="button">По возврастанию</ButtonMode>
                        <ButtonMode type="button">По убыванию</ButtonMode>
                    </Mode>
                    <ButtonPlay type="submit">Играть</ButtonPlay>
                </Form>
            </Wrapper>
        </Section>
    );
};

export default StartPage;
