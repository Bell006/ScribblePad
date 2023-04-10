import styled from "styled-components";

export const Container = styled.header`
    grid-area: header; //cabeçalho fixo

    height: 10.5rem;
    width: 100%;

    border-bottom-width: .1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    justify-content: space-between;

    padding: 0 4rem;
`;

export const LogoGreetings = styled.div`
        display: flex;
        align-items: center;
        gap: 1.5rem;

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 1.6rem;
        line-height: 2.1rem;

        border-left-style: solid;
        border-left-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        padding: .5rem 1rem;

        span {
        font-size: 1.4rem;
        }

        
        strong {
        font-size: 1.8rem;
        }
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
       width : 5.6rem;
       height: 5.6rem;
       border-radius: 50%;
    }

`;

export const Logout = styled.button`
    border: none;
    background: none;

    display: flex;
    align-items: center;
    gap: 2rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.BLUE_400};
        font-size: 2.4rem;
    }

`;