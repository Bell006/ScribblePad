import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.BLUE_400};

        -webkit-font-smothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    } 

    button:hover, a:hover {
        filter: brightness(0.98);
    } 
`;