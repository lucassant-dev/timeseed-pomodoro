import styled from "styled-components";
import globalColors from "@/styles/themes/globalColors";

export const AddThemeButtonLink = styled.button`
    background-color: ${globalColors.status.info};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in-out;
    user-select: none;
    border-radius: 1rem;
    border: none;
    height: 6rem;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.04);
    }

    svg {
        color: ${({ theme }) => theme.icon};
        stroke-width: 0.24rem;
        width: 2.8rem;
        height: 2.8rem;
    }
`;
