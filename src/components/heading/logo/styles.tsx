import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    
    * {
        color: ${({ theme }) => theme.primary};
    }
`;

export const LogoLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 0.8rem;
    
    &, * {
        transition: all 1s ease-in-out;
    }

    &:hover * {
        scale: 1.02;
        filter: brightness(0.88);
    }
`;
 

export const LogoTitle = styled.span`
    font-weight: bold;
    font-size: 3.6rem;
`;

export const LogoIconWrapper = styled.div`
    width: 6.4rem;
    height: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 100%;
        height: 100%;
    }
`;