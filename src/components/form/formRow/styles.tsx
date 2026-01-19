import styled from "styled-components";

export const FormRowDiv = styled.div`
    padding: 2.4rem 4rem;
    height: 12rem;
    width: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in;

    &:hover {
        transform: scale(1.04);
        background-color: ${({ theme }) => theme.background.hover.neutral};
    }
`;