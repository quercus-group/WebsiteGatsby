import React from 'react'
// import styled from 'styled-components'
// import {useStaticQuery, graphql, Link} from 'gatsby'
// import { GatsbyImage} from "gatsby-plugin-image"
import Layout from '../Components/Layout'
import {  Section,  SectionTitle } from '../Components/Elements'
import Seo from '../Components/SEO'

const ProjectPage = ()=>{
    
    return (
        <Layout>
            <Seo title='Project'/>
            <Section>
                <SectionTitle>Projects</SectionTitle>
                
            </Section>
        </Layout>
    )
}



export default ProjectPage