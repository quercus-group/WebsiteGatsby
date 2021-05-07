import React from 'react'
import {graphql} from 'gatsby'
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Layout from '../Components/Layout'
import { Section } from '../Components/Elements'
import Button from '../Components/Button'

const projectPage = ({data}) => {
    return ( 
        <Layout>
            <Section>
                <ProfileGrid>
                    <GatsbyImage image={data.contentfulTeamMember.profileImage.gatsbyImageData} alt={data.contentfulTeamMember.profileImage.description}/>
                    <Details>
                        <h3>{data.contentfulTeamMember.firstName} {data.contentfulTeamMember.lastName}</h3>
                        {
                            (data.contentfulTeamMember.description !== null) ? <Description>{documentToReactComponents(JSON.parse(data.contentfulTeamMember.description.raw))}</Description> : ''
                        }
                        {
                            (data.contentfulTeamMember.cvEducation !== null) ? <Cv>{documentToReactComponents(JSON.parse(data.contentfulTeamMember.cvEducation.raw))}</Cv> : ''
                        }
                        <Contacts>
                            <p><b>Email:</b> {data.contentfulTeamMember.email}</p>
                            <p><b>Phone:</b> {data.contentfulTeamMember.phone}</p>
                        </Contacts>
                    </Details>
                </ProfileGrid>
                <ToTeamButton linkTo="/team" text='Team' />
            </Section>
        </Layout>
     );
}

export const query = graphql`
    query ($slug: String!){
        contentfulTeamMember (slug: {eq: $slug}) {
            id
            firstName
            lastName
            email
            linkedin
            phone
            description {raw}
            cvEducation {raw}
            profileImage {
                description
                gatsbyImageData (
                    quality: 70
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                    aspectRatio: 1
                    )
            }
        }
    }
`

const ProfileGrid = styled.div`
    grid-column: 1 / 12;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
`
const Details = styled.div`
    grid-column: 2 / span 1;
`
const Description = styled.div`
    margin-top: 2rem;
`
const Cv = styled.div`
    margin-bottom: 2rem;
    p {
        margin: 0;
    }
`
const Contacts = styled.div`
    p {
        margin: 0;
    }
`
const ToTeamButton = styled(Button)`
    justify-self: end;
    grid-column-end: 13;
    grid-row: 2 / span 1;
`
 
export default projectPage;