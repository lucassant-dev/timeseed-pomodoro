import styled from "styled-components";

type ButtonProps = {
    $isRunning: boolean
};

export const Button = styled.button<ButtonProps>`
    border-radius: 2.4rem;
    border: none;
    padding: 1.2rem 0;
    transition: all 0.4s ease-in-out;
    min-width: 30rem;
    border-radius: 4rem;
    background-color: ${({ theme, $isRunning }) => {
         return $isRunning
            ? theme.background.status.danger
            : theme.background.primary
    }};
    
    &:hover {
        background-color: ${({ theme }) => theme.background.hover.primary};
        cursor: pointer;
    }

    svg {
        color: ${({ theme }) => theme.icon.color.default};
        width: 3rem;
        height: 3rem;
        stroke-width: ${({ theme }) => theme.icon.stroke[1]};
    }
`;