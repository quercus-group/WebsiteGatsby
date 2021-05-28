import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql, Link} from 'gatsby'
import { GatsbyImage} from "gatsby-plugin-image"
import Layout from '../Components/Layout'
import { Question, Section, SectionText, SectionTitle } from '../Components/Elements'

const ProjectPage = ()=>{
    const data = useStaticQuery(graphql`
        query ProjectsData {
            allContentfulProject (sort: { fields: order, order: ASC }) {
            edges {
                node {
                id
                slug
                projectTitle
                client
                thumbnailImage {
                    description
                    gatsbyImageData (
                        quality: 50
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                        aspectRatio: 1
                        )
                }
                }
            }
            }
        }
    `)
    return (
        <Layout>
            <Section>
                <SectionTitle>
                    A single project can be the beginning of a systemic shift. We help making changes beyond mere optimization.
                </SectionTitle>
                <LeftSideText>
                <p>In past and recent projects, we tackled issues related to</p> 
                </LeftSideText>
                <RightSideText>
                  <p>sustainable & inclusive businesses // urban development // waste management & circular economy // water & sanitation // climate smart agriculture // mobility // cleantech // cluster developement</p>  
                </RightSideText>
                <ProjectsGrid>
                    {data.allContentfulProject.edges.map(edge => (
                        <ProjectInformation key={edge.node.id} to={`/projects/${edge.node.slug}`}>
                                <ProjectImg image={edge.node.thumbnailImage.gatsbyImageData} alt={edge.node.thumbnailImage.description}/>
                                <ProjectTitle>{edge.node.projectTitle}</ProjectTitle>
                                <MoreInfo>
                                    <p className="client">{edge.node.client}</p>
                                    <p className="truncatedText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, quibusdam?</p>
                                </MoreInfo>
                        </ProjectInformation>
                    ))}
                </ProjectsGrid>
                <Question>Interested how we can contribute to your next project?</Question>
            </Section>
        </Layout>
    )
}

const RightSideText = styled(SectionText)`
    grid-column: 7 / span 4;
`
const ProjectImg = styled(GatsbyImage)`
    /* box-shadow: 0 0.3rem 0.3rem ${props => props.theme.colors.blue5}; */
    aspect-ratio: 1/1;
`
const ProjectInformation = styled(Link)`
    box-shadow: 0 2.8px 2.2px rgba(54, 73, 117, 0.034),
        0 6.7px 5.3px rgba(54, 73, 117, 0.048),
        0 12.5px 10px rgba(54, 73, 117, 0.06),
        0 2rem 40px rgba(54, 73, 117, 0.12);
    height: 100%;
    display: grid;
    grid-template-rows: max-content 3rem max-content;
    grid-row-gap: 1rem;
    border-radius: 0.5em;
    overflow: hidden;
    transition: transform 0.5s ease;
    &:hover {
        transform: scale(1.025);
    }

`
const LeftSideText = styled(SectionText)`
    grid-column: 3 / span 4;
    @media ${props => props.theme.breakpoints.large} {
        grid-column: 2 / span 5;
        }
    @media ${props => props.theme.breakpoints.medium} {
        grid-column: 1 / span 3;
        }`

const ProjectsGrid = styled.div`
    grid-column: 1 / span 12;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    grid-template-rows: repeat(2, 1fr);
    @media ${props => props.theme.breakpoints.medium}{
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${props => props.theme.breakpoints.medium} {
        grid-column: 1 / span 6;
    }
    @media ${props => props.theme.breakpoints.mediumsmall} {
        grid-gap: 1.5rem;
    }
`

const ProjectTitle = styled.p`
    padding: 0 1rem;
    margin: 0;
    font-weight: 700;
    line-height: 1.5;
`
const MoreInfo = styled.div`
    color: ${props => props.theme.colors.blue3};
    .client {
        margin: 0;
        padding: 0 1rem;
        font-weight: 700;
        line-height: 1.5;
    }
    .truncatedText {
        line-height: 1.5;
        max-width: 224px;
        padding: 0 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export default ProjectPage