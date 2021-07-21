import React  from 'react'
import Layout from '../Components/Layout'
import styled from "styled-components"
import Seo from '../Components/SEO'
import LightButton from '../Components/Light-Button';
import { graphql, useStaticQuery } from 'gatsby';
import TeamMember from '../Components/Team-Member';

const AboutPage = ()=>{
    const {allContentfulTeamMember} = useStaticQuery(graphql`
    query  {
        allContentfulTeamMember {edges {node {id firstName lastName position phone email officeLocation profileImage {
            gatsbyImageData (
                aspectRatio: 1
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                quality: 75
                )
            }}}}
      }
    `)
    
    const allTeamMembers = allContentfulTeamMember.edges
    const copenhagenTeam = allTeamMembers.filter(({node}) => (
        node.officeLocation.includes('Copenhagen') 
    ))
    const nairobiTeam = allTeamMembers.filter(({node}) => (
        node.officeLocation.includes('Nairobi') 
    ))
    const singaporeTeam = allTeamMembers.filter(({node}) => (
        node.officeLocation.includes('Singapore') 
    ))

    return (
        <Layout>
            <Seo
                title='About'
            />
            <AboutPageContainer>
                <h1>About</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <div className="sectionIntro">
                    <p>
                        In 2012, Quercus Group started as a spin-off of Nicolai's cluster development experiences focusing on cleantech and on helping other clusters to succeed.
                    </p>
                    <p >
                        Over time however, we understood that partnerships with many involved minds, hearts and hands such as cluster organizations also create real changes in many other problem areas and sectors of society, too. They offer a way forward in intractable situations and open new opportunities to achieve value for many.
                    </p>
                    <p>
                        Today, we design, facilitate and manage multi-stakeholder partnerships around the world that create technological advances as well as other cultural, institutional, social, and economic innovations.
                    </p>
                </div>
                <BigStatement>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet consequuntur beatae tempore.
                </BigStatement>
                <h3 className="location">Copenhagen</h3>
                <h3 className="location">Nairobi</h3>
                <h3 className="location">Singapore</h3>
                <div className="copenhagen-office">
                    {
                        copenhagenTeam.map(member => {
                            const {firstName, lastName, email, phone, profileImage, position, id} = member.node
                            return <TeamMember
                                key={id} 
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                phone={phone}
                                profileImage={profileImage}
                                position={position}
                            />
                        })
                    }
                </div>
                <div className="nairobi-office">
                {
                        nairobiTeam.map(member => {
                            const {firstName, lastName, email, phone, profileImage, position, id} = member.node
                            return <TeamMember
                                key={id} 
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                phone={phone}
                                profileImage={profileImage}
                                position={position}
                            />
                        })
                    }
                </div>
                <div className="singapore-office">
                {
                        singaporeTeam.map(member => {
                            const {firstName, lastName, email, phone, profileImage, position, id} = member.node
                            return <TeamMember
                                key={id} 
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                phone={phone}
                                profileImage={profileImage}
                                position={position}
                            />
                        })
                    }
                </div>
                <p className="page-outro">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, est mollitia expedita pariatur animi incidunt neque ullam illo blanditiis? Voluptatem modi ratione officia quod corrupti odit deleniti, enim ea repellendus.
                </p>
                    <LightButton buttonText='Contact us today' className='button' linkTo='/contact' />
            </AboutPageContainer>
        </Layout>
    )
}

const AboutPageContainer = styled.section`
    margin-top: 5vh;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 4.5rem));
    grid-gap: 0rem 2rem;
    h1 {
        grid-column: 4  / span 6;
        font-size: 3.5rem;
        line-height: 1.3;
        font-weight: 900;
        text-align: center;
        margin-bottom: 3rem;
    }
    h2 {
        grid-column: 4  / span 6;
        grid-row: 2 / span 1;
        font-weight: 700;
        text-align: center;
        margin-bottom: 2rem;

    }
    .sectionIntro, .page-outro, .button {
        grid-column: 3  / span 8 ;
    }
    .sectionIntro {
        grid-row: 3 / span 1;
        p {
            line-height: 1.5;
            text-align: center;
        }
    }
    .location {
        margin-bottom: 3.5rem;
        ::after {
            display: inline-block;
            content: "";
            border-top: .1rem solid ${props => props.theme.colors.white400};
            width: 100%;
        }
        &:first-of-type {
            grid-column: 1 / span 6;
        }
        grid-column: span 3;
    }
    .copenhagen-office {
        grid-column: 1 / span 6;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
    .nairobi-office, .singapore-office {
        grid-column: span 3;
        display: grid;
        grid-row-gap: 2rem;
    }
    .page-outro {
        text-align: center;
        line-height: 1.5;
        margin: 4.5rem 0 2.5rem 0;
    }
    .button {
        justify-self: center;
        margin-bottom: 4.5rem;
        color: ${props => props.theme.colors.highlight600};
    }
`

const BigStatement = styled.h4`
    font-size: 3rem;
    color: ${props => props.theme.colors.secondary700};
    font-weight: 900;
    text-align: center;
    margin: 4.5rem 0rem;
    grid-column: 3 / span 8;
    @media screen and (max-width: 56rem){
        grid-column: 1 / span 8;
    }
    @media screen and (max-width: 40rem){
        grid-column: 1 / span 6;
        text-align: left;
        margin: 4.5rem 0;
        font-size: 2.5rem;
    }
`

export default AboutPage