import React from 'react';

import Link from 'next/link';

import styled from '@emotion/styled';

// /. imports

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Title = styled.h1`
    color: var(--white-color);
    font-size: 52px;
    font-weight: 600;
    text-align: center;
`;

const Caption = styled.h1`
    color: var(--white-color);
    font-size: 32px;
    font-weight: 400;
    text-align: center;

    a {
        color: #000;
    }
`;

// /. styled components

const NoFoundPage = () => {
    return (
        <Section>
            <Title>404</Title>
            <Caption>
                Page is now exist, visit <Link href="/">startPage</Link>{' '}
            </Caption>
        </Section>
    );
};

export default NoFoundPage;
