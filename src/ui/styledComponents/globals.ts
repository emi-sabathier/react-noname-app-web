import styled from 'styled-components';
import { mediaQueries } from '../../assets/mediaQueries';

export const UIScaffold = styled.div`
    background-color: green;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media ${mediaQueries.tabletLarge} {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const Card = styled.article`
    background-color: lightblue;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media ${mediaQueries.tabletLarge} {
        width: 50%;
    }
    @media ${mediaQueries.laptopXlarge} {
        width: 25%;
    }
`;

export const P = styled.p`
    font-size: 16px;
    background-color: yellow;
    width: 100%;
`;
