import React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'
import Layout from '../Components/Layout'
import { Section, SectionTitle } from '../Components/Elements';

const projectPage = ({data}) => {
    const PriContact = data.contentfulProject.primaryContact
    const SecContact = data.contentfulProject.secondaryContact
    return ( 
        <Layout>
            <Section>
                <ProjectPageTop>
                    <ClientName>{data.contentfulProject.client}</ClientName>
                    <SectionTitle style={{marginBottom: '1rem'}}>{data.contentfulProject.projectTitle}</SectionTitle>
                    <ProjectSubtitle>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores odit quia perferendis, ullam laborum error aperiam nam dolore commodi fuga incidunt? Minima cumque dolorem repellat voluptatum commodi debitis quo? Adipisci reprehenderit minima delectus quibusdam, ut cumque repudiandae temporibus quidem atque nam velit quod maiores assumenda deserunt labore modi blanditiis amet.</ProjectSubtitle>
                </ProjectPageTop>
                <FeatureImage image={data.contentfulProject.featuredImage.gatsbyImageData} alt={data.contentfulProject.featuredImage.title}/>
                <ProjectDescription>{documentToReactComponents(JSON.parse(data.contentfulProject.description.raw))}</ProjectDescription>
                <PrimaryContact>
                    <ProfileImage image={PriContact.profileImage.gatsbyImageData} alt={PriContact.profileImage.title}/>
                    <ContactInfo>
                        <h5>{PriContact.firstName} {PriContact.lastName}</h5>
                        <p>{PriContact.email}</p>
                        <p>{PriContact.phone}</p>
                    </ContactInfo>
                </PrimaryContact>
                {SecContact && 
                <SecondaryContact>
                <ProfileImage image={SecContact.profileImage.gatsbyImageData} alt={SecContact.profileImage.title}/>
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
            description {raw}
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
const ProjectPageTop = styled.div`
    grid-column: 3 / span 8;
`
const ClientName = styled.h3`
    color: ${props => props.theme.colors.blue2};
    font-size: clamp(1.44rem, 1.73vw,1.563rem);
`
const ProjectSubtitle = styled.p`
    color: ${props => props.theme.colors.blue2};
    font-size: clamp(1.15rem, 1.38vw, 1.25rem);
    line-height: 1.55;
`
const ProjectDescription = styled.div`
    grid-column: 3 / span 8;
`
const FeatureImage = styled(GatsbyImage)`
    grid-column: 2 / span 10;
    border-radius: 0.5em;
    aspect-ratio: 1200 / 627;
`
const PrimaryContact = styled.div`
    grid-column: 3 / span 4;
    display: flex;
    align-items: flex-start;
    border-radius: 0.5em;
    box-shadow: 
        0 2.8px 2.2px rgba(54, 73, 117, 0.034),
        0 6.7px 5.3px rgba(54, 73, 117, 0.048),
        0 1rem 20px rgba(54, 73, 117, 0.12);
    padding: 1em;
`
const SecondaryContact = styled(PrimaryContact)`
    grid-column: 7 / span 4;
`
const ProfileImage = styled(GatsbyImage)`
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