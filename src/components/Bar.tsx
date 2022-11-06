import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';

// /.imports

const StyledBar = styled.div`
    background-repeat: no-repeat;
    background-size: 200% auto;
    background-position: center;
    background-color: #444;
    border-radius: 20px;
    padding: 20px;
    min-height: 70px;
`;

const BarList = styled.ul`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(6, 1fr);
`;

const BarListTemplate = styled.li`
    height: 130px;
    background-color: yellow;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.06);
    box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
`;

// /. styled components

const Bar = () => {
    const [backgroundIMG, setBackgroundIMG] = useState<string>(
        '/images/bar-template_1.png'
    );

    return (
        <StyledBar style={{ backgroundImage: `url(${backgroundIMG})` }}>
            <BarList>
                <BarListTemplate></BarListTemplate>
                <BarListTemplate></BarListTemplate>
                <BarListTemplate></BarListTemplate>
                <BarListTemplate></BarListTemplate>
                <BarListTemplate></BarListTemplate>
                <BarListTemplate></BarListTemplate>
            </BarList>
        </StyledBar>
    );
};

export default Bar;
