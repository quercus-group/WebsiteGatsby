import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'
import { Layout } from '../Components';
import { Section, SectionTitle } from '../Components/Elements';

const projectPage = ({data}) => {
    const PriContact = data.contentfulProject.primaryContact
    const SecContact = data.contentfulProject.secondaryContact
    return ( 
        <Layout>
            <Section>
                <Client>{data.contentfulProject.client}</Client>
                <SectionTitle>{data.contentfulProject.projectTitle}</SectionTitle>
                <ProjectBrief>{data.contentfulProject.excerpt.excerpt}</ProjectBrief>
                <BigImage fluid={data.contentfulProject.featuredImage.fluid} alt={data.contentfulProject.featuredImage.title}/>
                <ProjectDescription>{documentToReactComponents(JSON.parse(data.contentfulProject.description.raw))}</ProjectDescription>
                <PrimaryContact>
                    <ProfileImage fluid={PriContact.profileImage.fluid} alt={PriContact.profileImage.title}/>
                    <ContactInfo>
                        <h5>{PriContact.firstName} {PriContact.lastName}</h5>
                        <p>{PriContact.email}</p>
                        <p>{PriContact.phone}</p>
                    </ContactInfo>
                </PrimaryContact>
                {SecContact && 
                <SecondaryContact>
                <ProfileImage fluid={SecContact.profileImage.fluid} alt={SecContact.profileImage.title}/>
                <ContactInfo>
                        <h5>{SecContact.firstName} {SecContact.lastName}</h5>
                        <p>{SecContact.email}</p>
                        <p>{SecContact.phone}</p>
                    </ContactInfo>
                </SecondaryContact>
                }
            </Section>
        </Layout>
     );
}

export const query = graphql`
    query ($slug: String!){
        contentfulProject (slug: {eq: $slug}) {
            projectTitle
            client
            excerpt {excerpt}
            description {raw}
            featuredImage {
                title
                fluid {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            primaryContact {
                firstName
                lastName
                email
                phone
                profileImage {
                    title
                    fluid (maxWidth: 100){
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
            }
            secondaryContact {
                firstName
                lastName
                email
                phone
                profileImage {
                    title
                    fluid (maxWidth: 100){
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
            }
        }   
    }
`

const Client = styled.h3`
    grid-column: 3 / span 8;
`
const ProjectBrief = styled.p`
    grid-column: 3 / span 8;
`
const ProjectDescription = styled.div`
    grid-column: 3 / span 8;
`
const BigImage = styled(Img)`
    grid-column: 1 / 12;
    border-radius: 0.5em;
`
const PrimaryContact = styled.div`
    grid-column: 3 / span 4;
    display: flex;
    align-items: flex-start;
    border-radius: 0.5em;
    box-shadow: 0 0.2rem 0.2rem ${props => props.theme.colors.blue4};
    padding: 1em;
`
const SecondaryContact = styled(PrimaryContact)`
    grid-column: 7 / span 4;
`
const ProfileImage = styled(Img)`
    border-radius: 50%;
    height: 75%;
    width: 6em;
    height: 6em;
`
const ContactInfo = styled.div`
    margin-left: 2em;
    p {
        margin: 0;
    }
`

 
export default projectPage;