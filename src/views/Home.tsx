import React, { ReactElement } from 'react';
import '../assets/global.css';
import styled from 'styled-components';
import { UIPageContainer } from '../ui/shared/styles/shared-styles';
import { UINoteCard } from '../ui/shared/components/UINoteCard';
import { Header } from '../ui/components/Header';
import { useDocumentsListener } from '../api/hooks/useDocumentsListener';
import { Note } from '../models/NoteModel';
import { NOTES_COLLECTION_NAME } from '../constants/firestore';
import { mediaQueries } from '../assets/mediaQueries';

export const Home = (): ReactElement => {
    const notesList: Note[] = useDocumentsListener<Note>(NOTES_COLLECTION_NAME);

    return (
        <>
            <Header />
            <UIPageContainer>
                <UICardContainer>
                    {notesList.map((note: Note, index: number) => (
                        <UINoteCard note={note} index={index} key={note.id} />
                    ))}
                </UICardContainer>
            </UIPageContainer>
        </>
    );
};
const UICardContainer = styled.main`
    display: grid;
    @media ${mediaQueries.large} {
        grid-template-columns: repeat(2, auto);
    }
    @media ${mediaQueries.laptopXlarge} {
        grid-template-columns: repeat(4, auto);
    }
`;
