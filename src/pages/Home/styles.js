import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
    grid-template-areas:
    "header header"
    "menu search"
    "menu content"
    "menu content";
`;

export const Menu = styled.ul`
    grid-area: menu;
    display: flex;
    justify-content: center;
    
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 2.2rem;
    
    margin: 1.5rem;
`;

export const Search = styled.div`
    grid-area: search;
`;

export const Content = styled.div`
    grid-area: content;
`;

export const NewNote = styled.button`
    background-color: red;
    width: 80%;
    height: 10%;

    align-self: end;
    margin-bottom: 2rem;

    border: none;
    background: ${({ theme }) => theme.COLORS.BLUE_400};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;

    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

`;


