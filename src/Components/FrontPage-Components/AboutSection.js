import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image';
import LightButton from '../Light-Button';

const AboutSection = () => {
    const data = useStaticQuery(graphql`
        query  TeamMembers {
        allContentfulTeamMember (sort: { fields: orderOfAppearance, order: ASC }) {
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
                    <h2 className="sectionTitle">Quercus is latin for oak. The tree symbolises the long-term.</h2>
                    <p>Quercus Group is an international consulting company for sustainability based in <span>Nairobi</span>. Our expertise is collaboration and how to effectively use it to address the world’s most difficult challenges. We do and have done so in 45+ countries worldwide. </p>
                </div>
                <LightButton buttonText='About us' linkTo='/about' className='button'/>
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
        grid-template-rows: auto;
        grid-gap: 2rem;
        height: fit-content;
        .profileImage {
            max-width: 11rem;
            border-radius: 100%;
            aspect-ratio: 1;
        }
    }
    @media screen and (max-width: 68rem){
        .about-description {
            grid-column: 1 / span 6;
        }
        .team-pictures {
            grid-template-columns: repeat(3, 1fr);
            grid-column: 7 / span 6;
        }
    }
    @media screen and (max-width: 56rem){
        grid-template-columns: repeat(8, 1fr);
        .about-description, .team-pictures {
            grid-column: 1 / span 8;
        }
        .about-description {
            align-items: center;
            h2, p {
                text-align: center;
            }
            .button {
                margin-top: 2rem;
            }
        }
        .team-pictures {
            margin-top: 4.5rem;
        }
    }
    @media screen and (max-width: 40rem){
        grid-template-columns: repeat(6, 1fr);
        .about-description, .team-pictures {
            grid-column: 1 / span 6;
        }
        .about-description {
            align-items: flex-start;
            h2, p {
                text-align: left;
            }
        }
    }
`


  
export default AboutSection;