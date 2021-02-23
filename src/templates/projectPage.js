import React from 'react'
import {graphql} from 'gatsby'
import { Layout } from '../Components';

const projectPage = ({data}) => {
    return ( 
        <Layout>
            <h2>{data.contentfulProject.projectTitle}</h2>
        </Layout>
     );
}

export const query = graphql`
    query ($slug: String!){
        contentfulProject (slug: {eq: $slug}) {
            projectTitle
        }   
    }
`
 
export default projectPage;