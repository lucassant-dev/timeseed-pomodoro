import styled from "styled-components";

export const TimerDiv = styled.div`
    color: ${({ theme }) => theme.text.default};
    text-align: center;
    font-weight: bold;
    font-size: clamp(8rem, 25vw, 10rem);
    cursor: default;
`;