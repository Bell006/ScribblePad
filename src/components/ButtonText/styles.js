import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.RED};;

    border: none;
    font-size: 1.6rem;
    font-weight: 600;
`;