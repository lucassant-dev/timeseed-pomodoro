import styled, { css } from "styled-components";

export const TimingInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TimingInputTitle = styled.label`
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
    font-size: 1.6rem;
`;

export const TimingNumberInput = styled.input`
    width: 6rem;
    height: 6rem;
    border: none;
    background-color: transparent;
    text-align: center;
    font-size: 3.8rem;
    font-weight: bold;
    
    ${({ theme }) => {
        return css`
            color: ${theme.text};
            &::placeholder {
                color: ${theme.text};
                font-size: 3.8rem;
                font-weight: bold;
            }
        `;
    }}

    &:focus {
        caret-color: transparent;
        border-bottom: 0.4rem solid ${({ theme }) => theme.primary}
    }
`;