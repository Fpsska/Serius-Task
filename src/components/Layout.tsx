import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';

import { useAppSelector } from '../../store/hooks';

import { useLocationData } from '../hooks/useLocation';

import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';

// /. imports

const Main = styled.main`
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background-color: #a2d3da;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const Overlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(32, 21, 54, 0.6);
`;

const Container = styled.div`
    max-width: 966px;
    height: 100%;
    padding: 0 40px;
    margin: 0 auto;
`;

// /. styled components

const Layout = ({ children }: any) => {
    const [isModalVisible, setModalVisibleStatus] = useState<boolean>(false);
    const [backgroundIMG, setBackgroundIMG] = useState<string>('');

    const { pathname } = useLocationData();

    const { currentBackgroundCollection } = useAppSelector(
        state => state.mainSlice
    );

    // /. hooks

    useEffect(() => {
        switch (pathname) {
            case '/':
                setBackgroundIMG('/images/background-template_settings.png');
                break;
            case '/playground':
                setBackgroundIMG(currentBackgroundCollection.playgroundImage);
                break;
        }
    }, [pathname, currentBackgroundCollection]);

    // /. effects

    return (
        <>
            <Header />
            <Main style={{ backgroundImage: `url(${backgroundIMG})` }}>
                <Container>
                    {isModalVisible && (
                        <Overlay>
                            <Modal
                                setModalVisibleStatus={setModalVisibleStatus}
                            />
                        </Overlay>
                    )}
                    {children}
                </Container>
            </Main>
            <Footer />
        </>
    );
};

export default Layout;
