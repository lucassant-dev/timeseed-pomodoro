import styled, { css } from "styled-components";
import globalColors from "@/styles/themes/globalColors";

type Props = {
    $height: number,
    $width: number,
};

export const AppButtonLink = styled.button<Props>`
    user-select: auto;
    cursor: pointer;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 2rem;
    padding: ${({ $width, $height }) => `${$height}rem ${$width}rem`};
    transition: all 0.4s ease-in-out;
    
    ${({ theme }) => {
        return css`
            color: ${theme.icon};
            background-color: ${theme.primary};
        `
    }}

    &:hover {
        filter: brightness(0.94);
        transform: scale(1.01);
    }

    &:disabled {
        background-color: ${globalColors.status.disabled}
    }
`;