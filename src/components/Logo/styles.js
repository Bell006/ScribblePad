import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto Slab';
    font-style: normal;

    > h1 {
        color: ${({ theme }) => theme.COLORS.BLUE_300};
        font-weight: 700;
        font-size: 5.2rem;
        line-height: 6.9rem;
        text-align: center;
    }

    > h2 {
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.6rem;
        text-align: center; 

        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.BLUE_100};

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6.9rem;

        padding: .9rem 1.5rem;

        margin-bottom: 5.4rem;
    }
`;