import React  from 'react'
import Layout from '../Components/Layout'
import styled from "styled-components"
import Seo from '../Components/SEO'
import LightButton from '../Components/Light-Button';
import { graphql, useStaticQuery } from 'gatsby';
import TeamMember from '../Components/Team-Member';
import PageTitle from '../Components/Basic-Components/PageTitle';
import PageSubTitle from '../Components/Basic-Components/PageSubTitle';
import BigStatement from '../Components/Basic-Components/BigStatement';
import GridContainer from '../Components/Basic-Components/GridContainer';

const AboutPage = ()=>{
    const {allContentfulTeamMember} = useStaticQuery(graphql`
    query  {
        allContentfulTeamMember (sort: {fields: firstName order: ASC}) {edges {node {id firstName lastName position phone email officeLocation profileImage {
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
    const coreTeam = allTeamMembers.filter(({node}) => (
        !node.officeLocation.includes('Other')
    ))
    
    return (
        <Layout>
            <Seo
                title='About'
            />
            <AboutPageContainer className='about-page'>
                <PageTitle>About</PageTitle>
                <PageSubTitle>A hybrid company - somewhere between management consultant and agency, crossing disciplines and international borders.</PageSubTitle>
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
                    It was the shared "aha"-moment when we knew that we achieved together what was unattainable by doing it alone. 
                </BigStatement>
                    {
                        coreTeam.map(member => {
                            const {firstName, lastName, email, phone, profileImage, position, id, officeLocation} = member.node
                            return <TeamMember
                                key={id} 
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                phone={phone}
                                profileImage={profileImage}
                                position={position}
                                officeLocation={officeLocation}
                            />
                        })
                    }
                <p className="page-outro">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, est mollitia expedita pariatur animi incidunt neque ullam illo blanditiis? Voluptatem modi ratione officia quod corrupti odit deleniti, enim ea repellendus.
                </p>
                    <LightButton buttonText='Contact us today' className='button' linkTo='/contact' />
            </AboutPageContainer>
        </Layout>
    )
}

const AboutPageContainer = styled(GridContainer)`
    p {
        font-size: 1.25rem;
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
    @media screen and (max-width: 68rem){
        .sectionIntro, .page-outro, .button {
        grid-column: 2  / span 6;
        }
    }
    @media screen and (max-width: 56rem){
        .sectionIntro, .page-outro, .button {
        grid-column: 1  / span 8;
        }
    }
    @media screen and (max-width: 48rem){
        .sectionIntro, .page-outro, .button {
            grid-column: 1  / span 6;
        }
    }
    @media screen and (max-width: 40rem){
        .sectionIntro p, .page-outro{
            text-align: left;
        }
        .button {
            justify-self: flex-start;
        }
    }
`


export default AboutPage