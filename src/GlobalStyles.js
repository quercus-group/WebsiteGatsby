import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    body, html {
        font-family: 'Lato', sans-serif;
        color: ${props => props.theme.colors.primary100};
    }
    h1 {
        font-size: 3.052rem;
        line-height: 1.3;
    }
    h2 {
        font-size: 2.441rem;
        line-height: 1.3;
    }
    h3 {
        font-size: 1.953rem;
        line-height: 1.5;
    }
    h4 {
        font-size: 1.563rem;
        line-height: 1.75;
    }
    h5 {
        font-size: 1.25rem;
        line-height: 1.75;
    }
    p {
        font-size: 1rem;
        line-height: 1.75;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.primary100};
    }
    
`
export default GlobalStyle