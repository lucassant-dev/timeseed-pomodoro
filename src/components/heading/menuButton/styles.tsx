import styled from "styled-components";

export const MenuButtonLink = styled.a`
    width: 5.2rem;
    height: 5.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 1.4rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        filter: brightness(0.88);
    }
`;

export const MenuButtonIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 60%;

    svg {
        color: ${({ theme }) => theme.icon};
        stroke-width: 0.2rem;
        width: 90%;
        height: 90%;
    }
`;