import styled from "styled-components";

export const MenuRowContainer = styled.div`
    position: relative;
    padding: 2.4rem 4rem;
    width: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.4s ease-in;

    &:hover {
        transform: scale(1.04);
    }

    &::after {
        position: absolute;
        content: "";
        inset: 0;
        pointer-events: none;
        background-color: ${({ theme }) => theme.menu.contrast};
        opacity: 0;
        transition: opacity 0.6s ease-in;
    }

    &:hover::after {
        opacity: 0.02;
    }
`;