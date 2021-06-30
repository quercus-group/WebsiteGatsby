import React from 'react'
import {ThemeProvider} from "styled-components"
import GlobalStyle from './src/GlobalStyles'
import Theme from './src/Theme'
import "@fontsource/lato"
import "@fontsource/lato/900.css" 
import "@fontsource/lato/700.css" 

export const wrapRootElement = ({element} )=> (
    <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        {element}
    </ThemeProvider>
)
