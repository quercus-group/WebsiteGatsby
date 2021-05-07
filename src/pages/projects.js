import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql, Link} from 'gatsby'
import { GatsbyImage} from "gatsby-plugin-image"
import Layout from '../Components/Layout'
import { Question, Section, SectionText, SectionTitle } from '../Components/Elements'
import Button from '../Components/Button'
import { LeftSideText, ProjectsGrid } from '../Components/FrontPage-Components/ProjectSection'

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
                <ToServicesButton text="Services" linkTo="/services"/>
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
const ToServicesButton = styled(Button)`
    grid-column: 6 / span 2;
    justify-self: center;
`

export default ProjectPage