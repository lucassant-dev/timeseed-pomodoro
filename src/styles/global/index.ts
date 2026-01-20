import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    
    html {
        min-height: 100vh;
        font-size: 62.5%;
    }

    body {
        font-family: system-ui,
            -apple-system, 
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            'Open Sans',
            'Helvetica Neue',
            sans-serif;

        font-size: 1.6rem;
        background: ${({ theme }) => theme.page };
        color: ${({ theme }) => theme.text};
    }
`;

export default GlobalStyle;