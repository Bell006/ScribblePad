import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 8rem;
    grid-template-areas:
    "header header"
    "menu search"
    "menu content"
    "newnote content";

    
`;

export const Menu = styled.ul`
    grid-area: menu;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1.5rem;
    
    background: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 2.2rem 2.2rem 0 0;
    
    margin: 1rem 1.5rem 0;

    > h1 {
        margin: 2rem .5rem;
        font-size: 2.6rem;

        display: flex;
        align-items: center;
        gap: .5rem;

        padding: 1.2rem 0;
        
    }

    > ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 90%;

        align-items: center;
    }
`;

export const Search = styled.div`
    grid-area: search;
    padding: .5rem 4.5rem 0;
`;

export const Content = styled.div`
    grid-area: content;

    margin-top: 2.5rem;
    padding: .5rem 4.5rem 0;
    
    > main {
        max-height: 55vh;
        overflow-y: auto;

        padding-right: .8rem;

        ::-webkit-scrollbar-track
            {
                border: 4px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
                // border color does not support transparent on scrollbar
                // border-color: transparent;
                background-color: ${({ theme }) => theme.COLORS.WHITE};
            }

            ::-webkit-scrollbar
            {
                width: 10px;
                background-color: #dfe6e9;
            }

            ::-webkit-scrollbar-thumb
            {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
                border-radius: 10px;
            }

                };
    
`;

export const NewNote = styled(Link)`
    grid-area: newnote;
    background-color: red;

    
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 1.5rem 1rem;

    border: none;
    background: ${({ theme }) => theme.COLORS.BLUE_400};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 2.2rem 2.2rem;

    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

`;


