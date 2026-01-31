import globalColors from "@/styles/themes/globalColors";
import styled from "styled-components";

type Props = {
    $isRunning?: boolean
};

export const Button = styled.button<Props>`
    border-radius: 2.4rem;
    border: none;
    padding: 1.2rem 0;
    transition: all 0.4s ease-in-out;
    border-radius: 4rem;
    min-width: 30rem;
    background-color: ${({ theme, $isRunning }) => {
        return $isRunning
            ? globalColors.status.danger
            : theme.primary
    }};
    
    &:hover {
        filter: brightness(0.88);
        cursor: pointer;
    }

    svg {
        color: ${({ theme }) => theme.icon};
        width: 3rem;
        height: 3rem;
        stroke-width: 0.28rem;
    }
`;