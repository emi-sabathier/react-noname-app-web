import React, { ReactElement } from 'react';
import { Note } from '../../../models/NoteModel';
import { RegularFont } from '../styles/shared-styles';
import styled from 'styled-components';
import { colorScheme } from '../../../constants/colorScheme';
import { mediaQueries } from '../../../assets/mediaQueries';
import { UIDeleteButton } from './UIDeleteButton';

type UINoteCardProps = {
    note: Note;
    index: number;
};

export const UINoteCard = ({ note, index }: UINoteCardProps): ReactElement => {
    const Card = styled.article`
        border: 1px solid ${colorScheme.grey800};
        margin-bottom: 2rem;
        padding: 1rem;
        background-color: #fff;
        -webkit-box-shadow: 5px 5px 0px 0px ${colorScheme.grey800};
        box-shadow: 5px 5px 0px 0px ${colorScheme.grey800};
        @media ${mediaQueries.large} {
            margin-left: ${index % 2 === 0 ? 0 : '10px'};
            align-self: start;
        }
        @media ${mediaQueries.laptopXlarge} {
            margin-left: ${index % 4 === 0 ? 0 : '10px'};
            align-self: start;
        }
    `;
    return (
        <Card>
            <H2TitleCard>{note.title}</H2TitleCard>
            <RegularFont>{note.content}</RegularFont>
            <UIDeleteButton />
        </Card>
    );
};

const H2TitleCard = styled.h2`
    padding-bottom: 10px;
    font-size: 1.6rem;
    word-break: break-all;
`;
