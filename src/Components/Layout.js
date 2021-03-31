import React from 'react'
import styled from 'styled-components'
import {Header, Footer} from './index'


const Layout = ({children})=>{
    return (
        <PageContainer>
            <Header/>
            <ContentContainer>
                {children}
            </ContentContainer>
            <Footer/>
        </PageContainer>
    )
}

const PageContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.5rem)) 1fr;
    grid-column-gap: 2rem;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    width: 100%;
    @media ${props => props.theme.breakpoints.medium} {
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    }
`
const ContentContainer = styled.div`
    grid-column: 2 / span 12;
    @media ${props => props.theme.breakpoints.medium} {
        grid-column: 2 / span 6;
    }
`

export default Layout