import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: "content";
        overflow-y: scroll;
        padding: 6.4rem 0;

        background-color: ${({ theme }) => theme.COLORS.WHITE};;
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 1.2rem;

        a {
            color: ${({ theme }) => theme.COLORS.GREY}
        }
    }

`;

export const Content = styled.div`
    max-width: 55rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }

    > h1 {
        font-weight: 600;
        font-size: 3.6rem;
        line-height: 4.7rem;

        margin-bottom: 1.6rem;
    }

    > p {
        font-size: 1.6rem;
        text-align: justify;

        color: ${({ theme }) => theme.COLORS.GREY};
    }
`;
