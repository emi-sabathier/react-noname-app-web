import * as React from 'react';
import { ReactElement } from 'react';
import '../assets/global.css';
import { UIScaffold } from '../ui/styledComponents/globals';
import { UINoteCard } from '../ui/shared/UINoteCard';
import { useDocumentsListener } from '../api/hooks/useDocumentsListener';
import { Note } from '../models/NoteModel';
import { NOTES_COLLECTION_NAME } from '../constants/firestore';

export const Home = (): ReactElement => {
    const notesList: Note[] = useDocumentsListener<Note>(NOTES_COLLECTION_NAME);

    return (
        <UIScaffold>
            {notesList.map((note: Note, index: number) => (
                <UINoteCard note={note} index={index} key={note.id} />
            ))}
        </UIScaffold>
    );
};
