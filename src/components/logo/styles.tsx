import styled from "styled-components";

export const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
`;

export const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({ theme }) => theme.text.primary};
    gap: 0.8rem;
    
    &, * {
        transition: all 1s ease-in-out;
    }

    &:hover {
        scale: 1.02;
    
    }

    &:hover * {
        color: ${({ theme }) => theme.text.hover.primary}
    }
`;
 

export const Title = styled.span`
    font-weight: bold;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.text.primary};
`;

export const SvgDiv = styled.div`
    width: 6.4rem;
    height: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.text.primary};
    }
`;