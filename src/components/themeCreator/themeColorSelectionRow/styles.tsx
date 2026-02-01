import styled, { css } from "styled-components";

export const ThemeColorSelectionRowContainer = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    background-color: ${({ theme }) => theme.menu};
    border-radius: 1.6rem;
    transition: all 0.4s ease-in-out;

    &:hover {
        transform: scale(1.04);
    }
`;

export const RowLabel = styled.h2`
    color: ${({ theme }) => theme.text};
    font-weight: bold;
    cursor: default;
`;

type Props = {
    $defaultColor: string
};

export const RowColorPickWrapper = styled.div`
    position: relative;
    cursor: pointer;
    height: 4.8rem;
    width: 4.8rem;
`;

const colorPickDefaults = css`
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
`;

export const RowColorPickPreview = styled.div<Props>`
    ${colorPickDefaults}
    background-color: ${({ $defaultColor }) => $defaultColor};
    pointer-events: none;
    border: 0.28rem solid ${({ theme }) => theme.text};
`;

export const RowColorPickInput = styled.input`
    ${colorPickDefaults}
    opacity: 0;
    cursor: pointer;
`;