import styled from "styled-components";

export const Button = styled.a`
    width: 5.2rem;
    height: 5.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.primary.default};
    border-radius: 1.4rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.primary.hover};
    }
`;

export const SvgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 60%;

    svg {
        color: ${({ theme }) => theme.icon};
        stroke-width: 0.18rem;
        width: 90%;
        height: 90%;
    }
`;