import { createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    html{
        scroll-behavior: smooth;
    }
    body, html {
        font-family: 'Lato', sans-serif;
        color: ${props => props.theme.colors.primary900};
        background-color: ${props => props.theme.colors.white100};
    }
    h1 {
        font-size: 3.5rem;
        line-height: 1.3;
    }
    h2 {
        font-size: 2rem;
        line-height: 1.3;
    }
    h3 {
        font-size: 1.5rem;
        line-height: 1.5;
    }
    h4 {
        font-size: clamp(1.44rem, 1.73vw,1.563rem);
        line-height: 1.5;
    }
    h5 {
        font-size: clamp(1.15rem, 1.38vw, 1.25rem);
        line-height: 1.75;
    }
    p {
        font-size: 1.25rem;
        line-height: 1.75;
        margin-bottom: 1rem;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.blue1};
    }
`


export default GlobalStyle