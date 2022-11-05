import React, { useState } from 'react';

import styled from '@emotion/styled';

import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';

// /. imports

const Main = styled.main`
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    padding: 90px 140px;
    background-color: #a2d3da;
    background-image: url(/images/background-template_settings.png);
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

// /. styled components

const Layout = ({ children }: any) => {
    const [isModalVisible, setModalVisibleStatus] = useState<boolean>(true);

    return (
        <>
            <Header />
            <Main>
                {isModalVisible && (
                    <Overlay>
                        <Modal />
                    </Overlay>
                )}
                {children}
            </Main>
            <Footer />
        </>
    );
};

export default Layout;
