import React  from 'react'
import Layout from '../Components/Layout'
// import styled from "styled-components"
import { Section, SectionTitle } from '../Components/Elements'
import Seo from '../Components/SEO'

const CompanyPage = ()=>{
    return (
        <Layout>
            <Seo
                title='About'
            />
            <Section>
                <SectionTitle>about us</SectionTitle>
                
            </Section>
        </Layout>
    )
}

export default CompanyPage