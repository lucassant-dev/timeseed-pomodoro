import styled from "styled-components";

export const TimingInputBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    padding: 1rem;
`;

export const TimingInputSeparator = styled.span`
    color: ${({ theme }) => theme.text.default};
    font-size: 4.8rem;
    font-weight: bold;
    margin-top: 1.4rem;
`;