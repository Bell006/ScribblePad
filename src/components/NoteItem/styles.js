import styled from "styled-components";

export const Container = styled.input`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.WHITE};
    color: ${({ theme}) => theme.COLORS.BLUE_300};

    border:  ${({ theme, isNew }) => isNew ? `.1rem dashed ${ theme.COLORS.WHITE}` : "none"};

    margin-bottom: .8rem;
    border-radius: 1rem;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none;
    }

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;

        color: ${({ theme}) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme}) => theme.COLORS.GREY};
        }
    }

`;