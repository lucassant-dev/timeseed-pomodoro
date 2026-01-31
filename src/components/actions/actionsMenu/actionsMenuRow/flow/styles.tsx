import styled from "styled-components";

export const FlowDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10rem;
    background-color: ${({ theme }) => theme.menu};
    padding: 1rem 3rem;
    gap: 1rem;
`;

export const FlowBar = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s ease-in-out;
`;

export const Icon = styled.li`
    position: relative;
    padding: 1rem;
    transition: all 0.2s ease-in;

    &:hover {
        transform: scale(104%);
        transform: translateY(-0.4rem);
        box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.09);
    }

    &::after {
        position: absolute;
        content: "";
        inset: 0;
        background-color: ${({ theme }) => theme.contrast};
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease-in;
    }

    &:hover::after {
        opacity: 0.03;
    }
`;