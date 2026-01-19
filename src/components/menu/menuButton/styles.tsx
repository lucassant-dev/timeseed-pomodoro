import styled from "styled-components";

export const Button = styled.a`
    width: 5.2rem;
    height: 5.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.background.primary};
    border-radius: 1.4rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.background.hover.primary};
    }
`;

export const SvgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 60%;

    svg {
        color: ${({ theme }) => theme.icon.color.default};
        stroke-width: ${({ theme }) => theme.icon.stroke[1]};
        width: 90%;
        height: 90%;
    }
`;