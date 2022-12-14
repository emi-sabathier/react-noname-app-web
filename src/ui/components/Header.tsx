import React from 'react';
import styled from 'styled-components';
import { MdLightbulbOutline, MdWaves } from 'react-icons/md';
import { colorScheme } from '../../constants/colorScheme';

export const Header = () => {
    return (
        <HeaderContainer>
            <div style={{ marginLeft: '1rem', border: '1px solid black', background: 'white' }}>
                <MdWaves size={40} color="#4DD0E1" />
            </div>
            <div
                style={{
                    flexDirection: 'row',
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                }}>
                <MdLightbulbOutline style={{ marginTop: '5px' }} size={40} color="white" />
                <H1Title>No name app</H1Title>
            </div>
        </HeaderContainer>
    );
};

const H1Title = styled.h1`
    text-align: center;
    padding: 10px 0;
    font-size: 2rem;
    word-break: break-all;
    color: ${colorScheme.white};
`;

const HeaderContainer = styled.header`
    background-color: ${colorScheme.headerBg};
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
`;
