import styled from "styled-components";

export const HyperTextContainer = styled.div`
    & {
        padding: 0 4rem;
    }
    
    h1 {
        font-size: 3.6rem;
        padding-bottom: 2rem;
        text-align: center;
    }

    * {
        font-weight: bold;
    }

    p {
        padding: 0.6rem 2;
        font-size: 2rem;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.primary};
    }
`;