import globalColors from "@/styles/themes/globalColors";
import styled from "styled-components";

export const AddButton = styled.button`
    width: 100%;
    height: 6rem;
    transition: all 0.4s ease-in-out;
    user-select: none;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    background: ${globalColors.status.info};
    border: none;

    &:hover {
        cursor: pointer;
        transform: scale(1.04);
    }
`;

export const AddIconDiv = styled.div`
    svg {
        color: ${({ theme }) => theme.icon};
        stroke-width: 0.24rem;
        width: 2.8rem;
        height: 2.8rem;
    }
`;
