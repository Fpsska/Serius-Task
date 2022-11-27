import React from 'react';

import { useRouter } from 'next/router';

import styled from '@emotion/styled';

import { useAppDispatch } from '../../store/hooks';

import {
    switchModalVisibleStatus,
    switchGameStartedStatus,
    saveGameSettingsData,
    resetOrderedData,
    removeInitialStatusOfOrderedDataItem
} from '../../store/mainSlice';

// /. imports

const StyledModal = styled.div`
    position: relative;
    padding: 10px;
    border-radius: 20px;
    background: linear-gradient(
        0deg,
        rgba(141, 103, 223, 0) 0%,
        rgba(103, 223, 137, 1) 100%
    );
`;

const Wrapper = styled.div`
    max-width: 380px;
    min-width: 350px;
    width: 100%;
    min-height: 200px;
    height: 300px;
    overflow: scroll;

    &::-webkit-scrollbar {
        width: 0px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 0px;
        border: 0px none transparent;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(170, 146, 210, 1) 100%
    );
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

const Star = styled.span`
    background-image: url(/svg/star-icon.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
`;

const StarBigLeft = styled(Star)`
    width: 130px;
    height: 120px;
    left: -5.2rem;
    bottom: -1.6rem;
`;

const StarBigRigth = styled(Star)`
    width: 130px;
    height: 120px;
    right: -3.2rem;
    top: 3rem;
`;

const StarMedium = styled(Star)`
    width: 106px;
    height: 104px;
    left: -2.8rem;
    top: -1.6rem;
`;

const StarSmall = styled(Star)`
    width: 80px;
    height: 80px;
    right: -2.5rem;
    bottom: -1.5rem;
`;

const Title = styled.h2`
    font-weight: 600;
    font-size: 60px;
    text-shadow: 0px -2px 5px #1e813a;
    color: var(--yellow-color);
`;

const Caption = styled.p`
    font-size: 24px;
    color: var(--violet-color);
    font-weight: 400;
    text-align: center;
    margin: 22px 0 40px 0;
`;

const Button = styled.button`
    color: var(--white-color);
    background-color: #2bd600;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    font-size: 26px;
    font-weight: 600;
    padding: 5px 30px;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: var(--violet-color);
    }
`;

// /. styled components

const Modal = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    // /. hooks

    const onButtonRestartClick = () => {
        dispatch(switchModalVisibleStatus(false));
        dispatch(
            saveGameSettingsData({ quantity: 0, totalValue: 0, mode: '' })
        );
        dispatch(resetOrderedData());
        dispatch(switchGameStartedStatus(false));
        dispatch(removeInitialStatusOfOrderedDataItem());
        //
        router.push('/');
    };

    // /. functions

    return (
        <StyledModal>
            <Wrapper>
                <StarMedium />
                <StarBigLeft />
                <StarBigRigth />
                <StarSmall />
                <Title>Победа!</Title>
                <Caption>Молодец! Ты успешно справился с заданием!</Caption>
                <Button onClick={onButtonRestartClick}>Заново</Button>
            </Wrapper>
        </StyledModal>
    );
};

export default Modal;
