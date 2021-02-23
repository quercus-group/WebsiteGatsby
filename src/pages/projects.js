import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from "gatsby-image"
import {Layout} from '../Components'
import { Section, SectionText, SectionTitle } from '../Components/Elements'
import { LeftSideText, ProjectsGrid } from '../Components/ProjectSection'
import Truncate from 'react-truncate';

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
                excerpt {excerpt}
                thumbnailImage {
                    description
                    fluid {
                        ...GatsbyContentfulFluid_withWebp
                    }
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
                        <Link key={edge.node.id} to={`/projects/${edge.node.slug}`}>
                            <ProjectImg fluid={edge.node.thumbnailImage.fluid} alt={edge.node.thumbnailImage.description}/>
                            
                            <ProjectTitle>{edge.node.projectTitle}</ProjectTitle>
                            <MoreInfo>
                                <p className="client">{edge.node.client}</p>
                                <Truncate lines={2} ellipsis="&hellip;" className="excerpt">
                                <p>{edge.node.excerpt.excerpt}</p>
                                </Truncate>
                            </MoreInfo>
                            
                        </Link>
                    ))}
                </ProjectsGrid>
            </Section>
        </Layout>
    )
}

const RightSideText = styled(SectionText)`
    grid-column: 7 / span 4;
`
const ProjectImg = styled(Img)`
    border-radius: 0.5rem;
    box-shadow: 0 0.3rem 0.3rem ${props => props.theme.colors.blue5};
    aspect-ratio: 1/1;
`
const ProjectTitle = styled.p`
    margin-top: 1rem;
    font-weight: 700;
    line-height: 1.5;
`
const MoreInfo = styled.div`
    color: ${props => props.theme.colors.blue3};
    .client {
        margin: 0;
        font-weight: 700;
        line-height: 1.5;
    }
    .excerpt {
        line-height: 1.5;
    }
`

export default ProjectPage