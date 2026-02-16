import styled, { css } from "styled-components";
import type { AppThemePageBackgroundGradientColors } from "@/styles/themes/AppTheme";

export const FlipCardContainer = styled.div<{$backgroundColors: AppThemePageBackgroundGradientColors}>`
    border-radius: 1rem;
    overflow: hidden;
    background: ${({ $backgroundColors }) => {
        const { bottom, top } = $backgroundColors;
        return `linear-gradient(
                ${bottom} 0%,
                ${top} 100%
            )`
        }};
    box-shadow:
        0 8px 24px rgba(0, 0, 0, 0.12),
        0 4px 24px rgba(0, 0, 0, 0.08);
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3.2rem;
    gap: 3rem;
    transition: all 0.4s ease-in-out;

    &:hover {
        transform: scale(1.04);
    }
`;

export const FlipCardHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    border-radius: 0.8rem;

    svg {
        position: absolute;
        right: 0;
        stroke-width: 0.28rem;
        height: 3.4rem;
        width: 3.4rem;
        color: ${({ theme }) => theme.primary};
        transition: all 0.4s ease-in-out;
        
        &:hover {
            cursor: pointer;
            filter: brightness(0.96);
        }
    }
`;

export const FlipName = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3.2rem;
    height: 100%;
    margin-right: 4rem;
    color: ${({ theme }) => theme.primary};
`;

export const ScoreLabelBox = styled.div`
    width: 100%;
    padding: 0.8rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    ${({ theme }) => {
        const borderValue = `0.4rem solid ${theme.primary}`
        return css`
            border-top: ${borderValue};
            border-bottom: ${borderValue};
        `;
    }}

    svg {
        color: ${({ theme }) => theme.primary};
        width: 2.8rem;
        height: 2.8rem;
    }
`;

export const ScoreLabel = styled.span`
    letter-spacing: 0.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    font-size: 2.8rem;
`;

export const FlipCardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.8rem;
`;