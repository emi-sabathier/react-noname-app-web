import { useEffect, useState } from 'react';
import { Note } from '../../models/NoteModel';
import {
    collection,
    onSnapshot,
    DocumentData,
    CollectionReference,
    QuerySnapshot,
    QueryDocumentSnapshot,
    Unsubscribe,
} from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

export const useDocumentsListener = <T extends Note>(collectionName: string) => {
    const [documentsList, setDocumentsList] = useState<T[]>([]);

    useEffect(() => {
        const ref: CollectionReference = collection(db, collectionName);
        const unsubscribe: Unsubscribe = onSnapshot(ref, (querySnapshot: QuerySnapshot): void => {
            const documents: DocumentData[] = querySnapshot.docs.map((document: QueryDocumentSnapshot) => {
                return document.data();
            });
            setDocumentsList(documents as T[]);
        });
        return () => unsubscribe();
    }, []);

    return documentsList;
};
