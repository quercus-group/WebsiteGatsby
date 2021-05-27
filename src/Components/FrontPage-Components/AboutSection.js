import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image';
import LightButton from '../Light-Button';

const AboutSection = () => {
    const data = useStaticQuery(graphql`
        query  TeamMembers {
        allContentfulTeamMember (sort: { fields: order, order: ASC }) {
            edges {
                node {
                    id
                    firstName
                    lastName
                    profileImage {
                        gatsbyImageData (
                            aspectRatio: 1
                            placeholder: BLURRED
                            formats: [AUTO, WEBP]
                            quality: 75
                            )
                        }
                    }
                }
            }
        }
    `)
    return ( 
        <AboutSectionContainer>
            <div className="about-description">
                <div>
                    <h2 className="sectionTitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                    <p>Quercus Group is an international consulting company for sustainability based in <span>Copenhagen, Nairobi and Singapore</span>. Our expertise is collaboration and how to effectively use it to address the world’s most difficult challenges. We do and have done so in 45+ countries worldwide. </p>
                </div>
                <LightButton buttonText='Learn more' linkTo='/about' className='button'/>
            </div>
            <div className="team-pictures">
                {data.allContentfulTeamMember.edges.map(edge => (
                    <GatsbyImage className='profileImage' key={edge.node.id} image={edge.node.profileImage.gatsbyImageData} alt={`${edge.node.firstName} ${edge.node.lastName} from Quercus Group.`}/>
                ))}
            </div>
        </AboutSectionContainer>
     );
}

const AboutSectionContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 4.5rem));
    grid-column-gap: 2rem;
    p {
        font-size: 1.25rem;
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    span {
        font-weight: 700;
        color: ${props => props.theme.colors.highlight400}
    }
    .about-description {
        grid-column: 1 / span 4;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .team-pictures {
        grid-column: 5 / span 8;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
        .profileImage {
            max-width: 11rem;
            border-radius: 100%;
            img {
                filter: grayscale(1);
            }
        }
    }
`


  
export default AboutSection;