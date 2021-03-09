import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql, Link} from 'gatsby'
import { GatsbyImage} from "gatsby-plugin-image"
import {Layout} from '../Components'
import { Section, SectionText, SectionTitle, Question} from '../Components/Elements'
import Button from '../Components/Button'

const TeamPage = ()=>{
    const data = useStaticQuery(graphql`
        query TeamMembers {
            allContentfulTeamMember (sort: { fields: order, order: ASC }){
              edges {
                node {
                  id
                  firstName
                  lastName
                  email
                  phone
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
        <Layout>
                <Section>
                    <SectionTitle>Bringing hands, minds and hearts together. Meet our team. </SectionTitle>
                    <SectionText>
                        <p>We work together with companies, governments and civic society organizations, who aspire to be changed and create change on a difficult situation that cannot be solved alone.</p>
                    </SectionText>
                    <TeamGrid>
                        {data.allContentfulTeamMember.edges.map(edge => (
                            <Link key={edge.node.id} to={`/team/${edge.node.slug}`}>
                                <ProfileImg image={edge.node.profileImage.gatsbyImageData} alt={edge.node.profileImage.description}/>
                                <div>
                                    <Name>{edge.node.firstName} {edge.node.lastName}</Name>
                                    <ContactDetails>
                                        <p>{edge.node.phone}</p>
                                        <p>{edge.node.email}</p>
                                    </ContactDetails>
                                    <BioLink to={`/team/${edge.node.slug}`}>Show Bio</BioLink>
                                </div>
                            </Link>
                        ))}
                    </TeamGrid>
                    <Question>Curious about what we offer and how we help?</Question>
                    <ToServicesButton text="Services" linkTo="/services"/>
                </Section>
        </Layout>
    )
}

const TeamGrid = styled.div`
    grid-column: 1 / span 12;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto, 1fr);
    grid-gap: 3rem 2rem;
`

const ProfileImg = styled(GatsbyImage)`
    border-radius: 0.5rem;
    box-shadow: 
        0 2.8px 2.2px rgba(54, 73, 117, 0.034),
        0 6.7px 5.3px rgba(54, 73, 117, 0.048),
        0 1rem 1rem rgba(54, 73, 117, 0.12);
`

const Name = styled.p`
    margin-top: 1rem;
    font-weight: 700;
    line-height: 1.5;
    
`
const ContactDetails = styled.div`
    color: ${props => props.theme.colors.blue3};
    margin-bottom: 1rem;
    p {
        margin: 0;
        line-height: 1.5;
    }
`
const BioLink = styled(Link)`
    color: ${props => props.theme.colors.blue3};
    border-bottom: 0.1rem solid ${props => props.theme.colors.blue3};
`

const ToServicesButton = styled(Button)`
    grid-column: 6 / span 2;
    justify-self: center;
`


export default TeamPage