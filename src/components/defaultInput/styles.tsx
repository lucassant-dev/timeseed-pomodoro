import styled from "styled-components";
import globalColors from "@/styles/themes/globalColors";

export const InputWrapper = styled.div`
    position: relative;
    height: 4rem;
    width: 24rem;

    &::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 88%;
        height: 0.4rem;
        background-color: ${({ theme }) => theme.primary};
        border-radius: 0.4rem;
        transition: all 0.2s ease-in-out;
    }

    &:focus-within::after {
        transform: translateX(-50%);
        width: 88.5%;
        height: 0.48rem;
    }
`;

type Props = {
    $fontColor: string
};

export const Input = styled.input<Props>`
    width: 100%;
    height: 100%;
    padding: 0 1rem 0 1rem;
    color: ${({ $fontColor }) => $fontColor};
    background-color: transparent;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    border: none;
    transition: all 0.22s ease-in-out;
    
    &::placeholder {
        color: ${({ $fontColor }) => $fontColor};
        font-size: 1.6rem;
        font-style: italic;
    }

    &:focus {
        outline: none;
    }

    &:focus::placeholder {
        opacity: 0;
        color: transparent;
    }

    &:disabled {
        color: ${globalColors.status.disabled};
    }
`;