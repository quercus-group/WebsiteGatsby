import React from 'react'
import {graphql} from 'gatsby'
import { Layout } from '../Components';

const projectPage = ({data}) => {
    return ( 
        <Layout>
            <h2>{data.contentfulTeamMember.firstName} {data.contentfulTeamMember.lastName}</h2>
        </Layout>
     );
}

export const query = graphql`
    query ($slug: String!){
        contentfulTeamMember (slug: {eq: $slug}) {
            firstName
            lastName
        }
    }
`
 
export default projectPage;