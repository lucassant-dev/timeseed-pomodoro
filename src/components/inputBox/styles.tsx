import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding-bottom: 1rem;
`;

export const InputLabel = styled.label`
    font-weight: bold;
    font-size: 3rem;
    color: ${({ theme }) => theme.text.default}
`;