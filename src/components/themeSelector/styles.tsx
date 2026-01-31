import styled from "styled-components";

export const ThemeSelectorDiv = styled.div`
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 3.2rem;
    padding: 3.2rem;
    max-width: 32rem;
    border-radius: 1rem;
    transition: all 0.2s ease-in;

    &:hover {
        transform: scale(1.01);
    }
`;

export const SelectorTitle = styled.h1`
    text-align: center;
    font-size: 3rem;
    color: ${({ theme }) => theme.primary};
    cursor: default;
`;

export const SelectionList = styled.ul`
    width: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    height: 22rem;
    z-index: 1;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 0 1.6rem;
    scrollbar-color: ${({ theme }) => `${theme.primary} ${theme.menu}`};
    scrollbar-width: auto;
`;

export const SelectionListItem = styled.li`
    width: 100%;
`;

export const ActionButtonsDiv = styled.div`
    margin-top: 2rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`;