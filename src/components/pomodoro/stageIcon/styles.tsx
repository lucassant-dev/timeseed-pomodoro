import styled, { css } from "styled-components";

export const StageIconContainer = styled.div`
    position: relative;
    width: 3.2rem;
    height: 3.2rem;
`;

type Props = {
    $isDone: boolean,
};

export const StageIconWrapper = styled.div<Props>`
    position: absolute;
    ${({ $isDone }) => {
        return $isDone
            ? css`
                opacity: 32%;  
                width: 60%;
                height: 60%;
                transition: all 0.6s ease-in;
            `
            : css`  
                position: absolute;
                width: 100%;
                height: 100%;
            `;
    }};

    svg {
        width: 100%;
        height: 100%;
    }
`;