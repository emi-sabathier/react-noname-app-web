import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { colorScheme } from '../../../constants/colorScheme';
import styled from 'styled-components';

export const UIDeleteButton = () => {
    return (
        <DeleteContainer>
            <DeleteButton>
                <MdDeleteOutline size={30} color={colorScheme.grey700} />
            </DeleteButton>
        </DeleteContainer>
    );
};

const DeleteContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const DeleteButton = styled.button`
    margin-top: 2rem;
`;
