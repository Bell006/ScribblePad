import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    main {
        grid-area: content;
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Form = styled.div`
    max-width: 55rem;
    margin: 1.8rem auto;

    > header {

        display: flex;
        justify-content: space-between;
        align-items: center;

        > a {
            background: ${({ theme }) => theme.COLORS.GREEN};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 18px;

            padding: .7rem 1.5rem;
            max-width: 7.2rem;
            max-height: 3rem;


            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
            
        }

        > h1 {
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 700;
            font-size: 3.6rem;
            line-height: 4.7rem;
    
            color: ${({ theme }) => theme.COLORS.BLUE_300};

            margin-bottom: 2.8rem;
        }
    }

`;