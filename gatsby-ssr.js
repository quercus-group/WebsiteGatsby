import React from 'react'
import {ThemeProvider} from "styled-components"
import GlobalStyle from './src/GlobalStyles'
import theme from './src/theme'

export const wrapRootElement = ({element} )=> (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {element}
    </ThemeProvider>
)