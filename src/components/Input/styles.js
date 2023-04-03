import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    
    margin-bottom: 0.8rem;
    border-radius: 1rem;

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;
        border: 0;

        border-radius: 1rem;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GREY};
        }
    };

    >  svg {
            margin-left: 1.6rem;
            color: ${({ theme }) => theme.COLORS.GREY}; 
        }
`;