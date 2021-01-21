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
    
`
export default GlobalStyle