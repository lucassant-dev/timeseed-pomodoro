import globalColors from "@/styles/themes/globalColors";
import "@fontsource/ubuntu/500.css";
import styled from "styled-components";

type ThemeSelectionItemButtonProps = {
    $fillColor: string,
};

export const ThemeSelectionItemButton = styled.button<ThemeSelectionItemButtonProps>`
    width: 100%;
    height: 6rem;
    transition: transform 0.4s ease-in-out;
    user-select: none;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    background: ${({ $fillColor }) => $fillColor};
    box-shadow: 1px 2px 4px ${globalColors.black.default};

    &:hover {
        cursor: pointer;
        transform: scale(1.04);
    }
    
    &[aria-pressed="true"] {
        border: 0.52rem solid ${({ theme }) => theme.primary};
        box-shadow: none;
    }
`;

type ThemeNameLabelProps = {
    $textColor: string
};

export const ThemeNameLabel = styled.h1<ThemeNameLabelProps>`
    color: ${({ $textColor }) => $textColor};
    font-weight: bold;
    font-family: 'Ubuntu', sans-serif;
    font-size: 2.6rem;
`;