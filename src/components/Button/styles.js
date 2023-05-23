import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    height: 5.6rem;
    border: 0;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    border-radius: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 700;

    &:disabled {
        opacity: 0.5;
    }
`