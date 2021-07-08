import React from 'react'
import {graphql} from 'gatsby'
// import { GatsbyImage } from "gatsby-plugin-image"
// import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import styled from 'styled-components'
import Layout from '../Components/Layout'

const projectPage = ({data}) => {
    return ( 
        <Layout>
            <section>
                <h1>{data.contentfulProject.projectTitle}</h1>
            </section>
        </Layout>
     );
}

export const query = graphql`
    query ($slug: String!){
        contentfulProject (slug: {eq: $slug}) {
            projectTitle
            featuredProject
            metaTitle
            metaDescription
            client
            tags
            mainText {raw}
            featuredImage {
                title
                gatsbyImageData (
                    quality: 70
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                    aspectRatio: 1
                    )
            }
            primaryContact {
                firstName
                lastName
                email
                phone
                profileImage {
                    title
                    gatsbyImageData (
                        quality: 70
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                        aspectRatio: 1
                        )
                }
            }
            secondaryContact {
                firstName
                lastName
                email
                phone
                profileImage {
                    title
                    gatsbyImageData (
                        quality: 70
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                        aspectRatio: 1
                        )
                }
            }
        }   
    }
`


 
export default projectPage;