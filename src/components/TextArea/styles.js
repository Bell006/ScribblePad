import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 15rem;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    
    margin-bottom: 0.8rem;
    border-radius: 1rem;
    padding: 1.6rem;

    border: none;
    resize: none;

    &:placeholder {
        color: ${({ theme }) => theme.COLORS.GREY};
    }

`;