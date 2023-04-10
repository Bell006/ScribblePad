import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 12.4rem;

        > p {
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 700;
            font-size: 3.6rem;
            line-height: 4.7rem;

            margin-left: 1rem;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.BLUE_300};
            font-size: 2.4rem;
        }
    } 
`;

export const Form = styled.form`
    max-width: 34rem;
    margin: 3.4rem auto 0;

    >div:nth-child(3) {
        margin-bottom: 2.5rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin:  -12rem auto 3.2rem;

    width: 18.6rem;
    height: 18.6rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;

        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.BLUE_300};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: .7rem;
        right: .7rem;

        cursor: pointer;

        > input {
            display: none;
        }

        > svg {
            color: ${({ theme }) => theme.COLORS.WHITE};

            width: 2rem;
            height: 2rem;
        }
    }
`;