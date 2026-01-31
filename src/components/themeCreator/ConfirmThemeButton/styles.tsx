import styled, { css } from "styled-components";

export const ConfirmButton = styled.button`
    ${({ theme }) => {
        return css`
            color: ${theme.icon};
            background-color: ${theme.primary};
        `
    }}
    
    font-weight: bold;
    font-size: 2.6rem;
    border-radius: 1rem;
    width: 100%;
    height: 8rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        filter: brightness(0.88);
        transform: scale(1.02)
    }
`;