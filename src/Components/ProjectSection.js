import React from "react"
import styled from "styled-components"
import { Section, SectionText, SectionTitle, GridPicture } from "./Elements"
import {useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"
import Button from "./Button"

const ProjectSection = () => {
    const data = useStaticQuery(graphql`
        query ProjectData {
            allContentfulProject {
            edges {
                node {
                id
                projectTitle
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
        <Section id="ProjectSection">
            <SectionTitle>A single project can be the beginning of a systemic shift. We help making changes beyond mere optimization.</SectionTitle>
            <LeftSideText>
                <p>Since 2012, we supported companies, governments, cities, international agencies, universities and civil society in over 40 countries. Our engagements span days, months or years.</p>
                <p>We care a lot about the process. It turns out the biggest barriers to change, and what might be the strongest enablers of change is process. Our approach and methods support how you get there first and then what it is you are getting to.</p>
            </LeftSideText>
            <RightSideBox>
                <p>In past and recent projects, <strong>we tackled issues</strong> related to </p>
                <p>sustainable & inclusive businesses // urban development // waste management & circular economy // water & sanitation // climate smart agriculture // mobility // cleantech // cluster developement</p>
            </RightSideBox>
            <ProjectsGrid>
                {data.allContentfulProject.edges.map(edge => (
                    <GridPicture>
                        <Img fluid={edge.node.thumbnailImage.fluid} alt={edge.node.thumbnailImage.description} id={edge.node.id}/>
                    </GridPicture>
                ))}
            </ProjectsGrid>
            <ToProjectsButton text="See more projects" linkTo="/projects"/>
            <Partner>
                <h2>Our partners</h2>
            </Partner>
        </Section>
    )
}

export const LeftSideText = styled(SectionText)`
    grid-column: 3 / span 4;
`
const RightSideBox = styled(SectionText)`
    grid-column: 7 / span 4;
    box-shadow: 0 0.3rem 0.3rem ${props => props.theme.colors.blue4};
    border-radius: 0.5rem;
    padding: 1.5rem;
`

const ProjectsGrid = styled.div`
    grid-column: 1 / span 12;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    grid-template-rows: repeat(2, 1fr);
`

const ToProjectsButton = styled(Button)`
    justify-self: end;
    grid-column-end: 13;
`


const Partner = styled.div`
    grid-column: 1 / span 12;
`

export default ProjectSection