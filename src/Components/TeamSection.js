import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components'
import { Section, SectionText, SectionTitle, GridPicture, Overlay } from './Elements';
import { GatsbyImage} from "gatsby-plugin-image"


const TeamSection = () => {
    const data = useStaticQuery(graphql`
        query Teammembers {
            allContentfulTeamMember (sort: { fields: order, order: ASC }){
              edges {
                node {
                  id
                  firstName
                  lastName
                  slug
                  profileImage {
                    description
                    gatsbyImageData (
                        quality: 75
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
        <Section>
            <SectionTitle>
                We like coffee. You have a great idea? Let us have a cup and get started!
            </SectionTitle>
            <SectionText>
                <p>We prefer to meet each other, our partners and our clients on eye-height. "Good things start with a cup of coffee (or tea)," we say, because it helps to build relationships of trust and then we take it from there.</p>
                <p>These are the Quercus Group people. Reach out to start the conversation. </p>
            </SectionText>
            <TeamGrid>
                {data.allContentfulTeamMember.edges.map(edge=>(
                    <Link key={edge.node.id} to={`/team/${edge.node.slug}`}>
                    <GridPicture whileHover="hover" whileTap="hover" initial="rest" animate="rest" >
                    <ProfileImg image={edge.node.profileImage.gatsbyImageData} alt={edge.node.profileImage.description}/>
                        <TeamSectionOverlay variants={HoverMotion}>
                            <h5>{edge.node.firstName}<br/>{edge.node.lastName}</h5>
                        </TeamSectionOverlay>
                    </GridPicture>
                    </Link>
                ))}
            </TeamGrid>
        </Section>
     );
}

const TeamGrid = styled.div`
    grid-column: 1 / span 12;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto, 1fr);
    grid-gap: 2rem 2rem;
    @media ${props => props.theme.breakpoints.large} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${props => props.theme.breakpoints.medium} {
        grid-column: 1 / span 6;
    }
`
const ProfileImg = styled(GatsbyImage)`
    border-radius: 0.5rem;
    box-shadow: 0 0.3rem 0.3rem ${props => props.theme.colors.blue5};
`

const TeamSectionOverlay = styled(Overlay)`
    h5 {
        line-height: 1.5;
    }
    
`

export const HoverMotion = {
    rest: {
        opacity: 0,
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        opacity: 1,
        transtion: {
            duration: 0.5,
            type: "tween",
            ease: "easeOut"
        },
    },
}
 
export default TeamSection;