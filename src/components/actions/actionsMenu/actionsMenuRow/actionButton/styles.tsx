import globalColors from "@/styles/themes/globalColors";
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
            ? globalColors.status
            : theme.primary.default
    }};
    
    &:hover {
        background-color: ${({ theme }) => theme.primary.hover};
        cursor: pointer;
    }

    svg {
        color: ${({ theme }) => theme.icon};
        width: 3rem;
        height: 3rem;
        stroke-width: 0.28rem;
    }
`;