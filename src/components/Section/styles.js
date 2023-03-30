import styled from "styled-components";

export const Container = styled.section`
    margin: 3rem 0;

    > h2 {
        border-bottom-width: .1rem;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        padding-bottom: 1.6rem;
        margin-bottom: 2.4rem;
        
        font-size: 2rem;
        font-weight: 400;
    }
`;