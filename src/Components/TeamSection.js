import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components'
import { Section, SectionText, SectionTitle, GridPicture } from './Elements';
import Img from "gatsby-image"

const TeamSection = () => {
    const data = useStaticQuery(graphql`
        query Teammembers {
            allContentfulTeamMember {
              edges {
                node {
                  id
                  firstName
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
                    <GridPicture id={edge.node.id}>
                        <ProfileImage objectFit="cover" fluid={edge.node.profileImage.fluid} alt={edge.node.profileImage.description}/>
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
    grid-gap: 2rem;
`
const ProfileImage = styled(Img)`
    height: 100%;
`
 
export default TeamSection;