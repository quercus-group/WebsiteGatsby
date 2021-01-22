import React from 'react'
import styled from 'styled-components'
import {Header, Footer} from './index'

const Layout = (props)=>{
    return (
        <PageContainer>
            <Header/>
            <ContentContainer>
                {props.children}
            </ContentContainer>
            <Footer/>
        </PageContainer>
    )
}

const PageContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 5rem)) 1fr;
    column-gap: 2rem;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    width: 100%;
`
const ContentContainer = styled.div`
    grid-column: 2 / 12;
`

export default Layout