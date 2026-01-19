import styled from "styled-components";

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
`;

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
        background-color: ${({ theme }) => theme.border.primary};
        border-radius: 0.4rem;
        transition: all 0.2s ease-in-out;
    }

    &:focus-within::after {
        transform: translateX(-50%);
        width: 88.5%;
        height: 0.48rem;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 1rem 0 1rem;
    color: ${({ theme }) => theme.text.default};
    background-color: transparent;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    border: none;
    transition: all 0.22s ease-in-out;
    
    &::placeholder {
        color: ${({ theme }) => theme.background.neutral[500]};
        font-size: 1.6rem;
        font-style: italic;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        color: ${({ theme }) => theme.text.disabled};
    }
`;

export const InputLabel = styled.label`
    font-weight: bold;
    font-size: 3rem;
    color: ${({ theme }) => theme.text.default}
`;