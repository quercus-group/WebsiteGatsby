import React from "react"
import styled from "styled-components"
import { Section, SectionText, SectionTitle, GridPicture, Overlay } from "./Elements"
import {useStaticQuery, graphql, Link} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "./Button"
import {HoverMotion} from './TeamSection'
import PartnerSlider from "./PartnerSlider"


const ProjectSection = () => {
    
    const data = useStaticQuery(graphql`
        query ProjectData {
            allContentfulProject (sort: { fields: order, order: ASC }, limit: 6) {
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
                    <ProjectCard key={edge.node.id} to={`/projects/${edge.node.slug}`}>
                    <GridPicture whileHover="hover" whileTap="hover" initial="rest" animate="rest">
                        <GatsbyImage image={edge.node.thumbnailImage.gatsbyImageData} alt={edge.node.thumbnailImage.description}/>
                        <ProjectSectionOverlay variants={HoverMotion}>
                            <h5>{edge.node.shortTitle}</h5>
                        </ProjectSectionOverlay>
                    </GridPicture>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
            <ToProjectsButton text="See more projects" linkTo="/projects"/>
            <PartnerSlider/>
        </Section>
    )
}

export const LeftSideText = styled(SectionText)`
    grid-column: 3 / span 4;
    @media ${props => props.theme.breakpoints.large} {
        grid-column: 2 / span 5;
        }
    @media ${props => props.theme.breakpoints.medium} {
        grid-column: 1 / span 3;
        }
`
const RightSideBox = styled(SectionText)`
    grid-column: 7 / span 4;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 0.5rem;
    padding: 1.5rem;
    height: fit-content;
    @media ${props => props.theme.breakpoints.large} {
        grid-column: 7 / span 5;
    }
    @media ${props => props.theme.breakpoints.medium} {
        grid-column: 4 / span 3;
    }
`
export const ProjectsGrid = styled.div`
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
const ProjectCard = styled(Link)`
    &:first-child {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
        /* @media ${props => props.theme.breakpoints.mediumsmall} {
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
        } */
    }
    &:last-child {
        display: none;
        @media ${props => props.theme.breakpoints.medium}{
        display: contents;
        }
    }
    @media ${props => props.theme.breakpoints.mediumsmall} {
        &:nth-child(n+4){
            display: none;
        }
    }
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
    @media ${props => props.theme.breakpoints.medium} {
        grid-column-end: 7;
        grid-column: 4 / span 3;
    }
`



export default ProjectSection