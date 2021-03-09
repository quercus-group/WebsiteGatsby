import React from "react"
import styled from "styled-components"
import { Section, SectionText, SectionTitle, GridPicture, Overlay } from "./Elements"
import {useStaticQuery, graphql, Link} from 'gatsby'
import { GatsbyImage} from "gatsby-plugin-image"
import Button from "./Button"
import {HoverMotion} from './TeamSection'

const ProjectSection = () => {
    
    const data = useStaticQuery(graphql`
        query ProjectData {
            allContentfulProject (sort: { fields: order, order: ASC }) {
            edges {
                node {
                id
                slug
                shortTitle
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
                    <Link key={edge.node.id} to={`/projects/${edge.node.slug}`}>
                    <GridPicture whileHover="hover" whileTap="hover" initial="rest" animate="rest">
                        <GatsbyImage image={edge.node.thumbnailImage.gatsbyImageData} alt={edge.node.thumbnailImage.description}/>
                        <ProjectSectionOverlay variants={HoverMotion}>
                            <h5>{edge.node.shortTitle}</h5>
                        </ProjectSectionOverlay>
                    </GridPicture>
                    </Link>
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
    box-shadow: ${props => props.theme.boxshadow.shadow1};
    border-radius: 0.5rem;
    padding: 1.5rem;
`
export const ProjectsGrid = styled.div`
    grid-column: 1 / span 12;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    grid-template-rows: repeat(2, 1fr);
`
const ProjectSectionOverlay = styled(Overlay)`
    h5 {
        line-height: 1.5;
        width: 75%;
    }
`
const ToProjectsButton = styled(Button)`
    justify-self: end;
    grid-column-end: 13;
`
const Partner = styled.div`
    grid-column: 1 / span 12;
`


export default ProjectSection