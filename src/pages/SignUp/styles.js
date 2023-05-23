import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    gap: 8rem;

    align-items: stretch;
    justify-content: center;
`;

export const Form = styled.form`
    font-family: 'Roboto Slab';
    font-style: normal;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h2 {
        margin-bottom: 2.9rem;
        color: ${({ theme }) => theme.COLORS.BLUE_300};
    }
    
    >a {
        margin-top: 6.2rem;
        font-size: 1.6rem;
        line-height: 2.1rem;
        color: ${({ theme }) => theme.COLORS.BLUE_100};
        text-decoration: none;
        font-weight: bold;
    }
`;

export const Background = styled.div`
    display: flex;
    align-items: center;

    >img {
        width: 35rem;
    }
`;
