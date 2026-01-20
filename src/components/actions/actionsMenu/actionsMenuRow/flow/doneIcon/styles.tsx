import styled, { css } from "styled-components";

type IconProps = {
    $isVisible: boolean
};

export const IconDiv = styled.div<IconProps>`
    transition: all 1.6s ease-out;
    width: 100%;
    height: 100%;
    ${({ $isVisible }) => {
        return $isVisible
            ? css`
                opacity: 1;
                transform: scale(1.6);
            `
            : css`
                opacity: 0;
                transform: scale(1);
            `;
    }}

    svg {
        stroke-width: 0.22rem;
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.primary.default};
    }
`;