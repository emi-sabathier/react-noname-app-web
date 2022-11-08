import React, { ReactElement } from 'react';
import { Note } from '../../models/NoteModel';
import { Card, P } from '../styledComponents/globals';

type UINoteCardProps = {
    note: Note;
    index: number;
};

export const UINoteCard = ({ note, index }: UINoteCardProps): ReactElement => {
    return (
        <>
            <Card>
                <P>{note.title}</P>
                <P>{note.content}</P>
            </Card>
        </>
    );
};
