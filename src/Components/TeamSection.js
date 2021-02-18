import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components'
import { Section, SectionText, SectionTitle, GridPicture, Overlay } from './Elements';
import Img from "gatsby-image"
import {motion} from 'framer-motion'

const TeamSection = () => {
    const data = useStaticQuery(graphql`
        query Teammembers {
            allContentfulTeamMember (sort: { fields: order, order: ASC }){
              edges {
                node {
                  id
                  firstName
                  lastName
                  profileImage {
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
                    <GridPicture id={edge.node.id} whileHover="hover" whileTap="hover" initial="rest" animate="rest" >
                        <ProfileImage objectFit="cover" fluid={edge.node.profileImage.fluid} alt={edge.node.profileImage.description}/>
                        <TeamSectionOverlay variants={HoverMotion}>
                            <h5>{edge.node.firstName}<br/>{edge.node.lastName}</h5>
                        </TeamSectionOverlay>
                    </GridPicture>
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
`
const ProfileImage = styled(Img)`
    height: 100%;
    width: 100%;
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