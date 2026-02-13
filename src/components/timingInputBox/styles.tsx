import styled from "styled-components";

export const TimingInputBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    padding: 1rem;
`;

type Props = {
    $fontColor: string
};

export const TimingInputSeparator = styled.span<Props>`
    color: ${({ $fontColor }) => $fontColor};
    font-size: 4.8rem;
    font-weight: bold;
    margin-top: 1.4rem;
`;