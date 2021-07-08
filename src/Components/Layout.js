import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const Layout = ({children})=>{
    return (
        <PageContainer>
            <Header/>
            <main className='content-container'>
                {children}
            </main>
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
    overflow: hidden;
    position: relative;
    .content-container {
        grid-column: 2 / span 12;
    }
    @media screen and (max-width: 56rem){
        grid-template-columns: 1.5rem repeat(8, minmax(auto, 4.5rem)) 1.5rem;
        grid-column-gap: 2rem;
        .content-container {
            grid-column: 2 / span 8;
        }
    }
    @media screen and (max-width: 40rem){
        grid-template-columns: 0.5rem repeat(6, minmax(auto, 4.5rem)) 0.5rem;
        grid-column-gap: 1.5rem;
        .content-container {
            grid-column: 2 / span 6;
        }
    }
`

export default Layout