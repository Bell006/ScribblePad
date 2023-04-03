import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: .7rem;
    text-align: left;
    
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.BLUE_400};

    border-radius: 1rem;

    display: flex;
    align-items: center;
    gap: .5rem;
`;