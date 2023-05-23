import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: 1rem;

    padding: 2.2rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    margin-bottom: 1.5rem;

    text-align: left;

    > h1 {
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.4rem;

        flex: 1;
        text-align: left;

        color:  ${({ theme }) => theme.COLORS.BLUE_500};
    };

    > p {
        max-height: 5.7rem;
        line-height: 2rem;

        display: -webkit-box; 
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical; 
        white-space: normal; 
        overflow: hidden; 
        text-overflow: ellipsis;

        text-align: justify;
        color:  ${({ theme }) => theme.COLORS.BLUE_300};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: .5rem;
    }
`;