import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


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

const PageContainer = styled.div`
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
const ContentContainer = styled.main`
    grid-column: 2 / span 12;
    @media ${props => props.theme.breakpoints.medium} {
        grid-column: 2 / span 6;
    }
`

export default Layout