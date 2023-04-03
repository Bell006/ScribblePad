import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: 1rem;

    padding: 2.2rem;

    margin-bottom: 1.5rem;

    > h1 {
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.4rem;

        flex: 1;
        text-align: left;

        color:  ${({ theme }) => theme.COLORS.BLUE_500};
    };

    > footer {
        width: 100%;
        display: flex;
        margin-top: 2.4rem;
    }


`;