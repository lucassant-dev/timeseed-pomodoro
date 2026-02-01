import styled from "styled-components";

type Props = {
    $color: string 
};

export const ThemeSelectorActionButtonLink = styled.button<Props>`
    background-color: ${({ $color }) => $color};
    padding: 1.2rem 0;
    width: 18.6rem;
    font-size: 2.6rem;
    color: ${({ theme }) => theme.icon};
    font-weight: bold;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.04);
    }
`;