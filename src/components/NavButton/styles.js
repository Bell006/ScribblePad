import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: .7rem;
    text-align: left;
    
    border:  ${({ theme, all }) => all  ? `2px solid ${theme.COLORS.BLUE_500}` : "none"};
    background-color: ${({ theme, isActive }) => isActive  ? theme.COLORS.BLUE_500 : theme.COLORS.BACKGROUND_800};
    color: ${({ theme, isActive }) => isActive  ? theme.COLORS.WHITE : theme.COLORS.BLUE_400};

    border-radius: 1rem;

    display: flex;
    align-items: center;
    gap: .5rem;
`;