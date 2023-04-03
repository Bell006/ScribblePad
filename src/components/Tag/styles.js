import styled from "styled-components";

export const Container = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    padding: .5rem 1.4rem;
    border-radius: .5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-right: .6rem;

    color: ${({ theme }) => theme.COLORS.BLUE_400};
    background: ${({ theme }) => theme.COLORS.GREEN};
`; 