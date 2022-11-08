import styled from 'styled-components';
import { mediaQueries } from '../../assets/mediaQueries';

export const UIWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media ${mediaQueries.tabletLarge} {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const Card = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #6C6C6C;
    @media ${mediaQueries.tabletLarge} {
        width: 50%;
    }
    @media ${mediaQueries.laptopXlarge} {
        width: 25%;
    }
`;

export const P = styled.p`
    font-size: 16px;
    width: 100%;
`;
