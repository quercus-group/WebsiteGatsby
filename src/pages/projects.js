import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Layout from '../Components/Layout'
import Seo from '../Components/SEO'
import ProjectCard from '../Components/ProjectCard'
import LightButton from '../Components/Light-Button';
import PageTitle from '../Components/Basic-Components/PageTitle'
import PageSubTitle from '../Components/Basic-Components/PageSubTitle'
import GridContainer from '../Components/Basic-Components/GridContainer'

const ProjectPage = ()=>{
    const data = useStaticQuery(graphql`
        query featuredProjects {
            allContentfulProject (filter: {featuredProject: {eq: true}} limit: 6 sort: {fields: createdAt order: ASC})
                {edges {
                    node {
                        id
                        slug
                        metaTitle
                        metaDescription
                        tags
                        client
                        featuredProject
                        thumbnailImage {
                            description
                            gatsbyImageData (
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                                quality: 70
                                width: 400
                                )
                            }
                        }
                    }
                }
            }
    `)
    const featuredProjects = data.allContentfulProject.edges
    return (
        <Layout>
            <Seo title='Projects' description='The entire process or only research, facilitation or strategy. We do both. Check out our projects.'/>
            <ProjectPageContainer>
                    <PageTitle>Projects</PageTitle>
                    <PageSubTitle>Multi-stakeholder partnerships are not easy but an effective way to move forward on difficult issues.</PageSubTitle>
                    <p className='sectionIntro'>Sometimes it takes just one step like rigorous research, a coordinated strategy or good facilitation to get unstuck and to move forward. It might also require a partner, who carefully stewards the process from A to Z. We do both. What holds all our projects together is the participatory approach and the invitation to work together on real changes for sustainable development.</p>
                    {
                        featuredProjects.map(project => {
                            const {id, slug, metaTitle, metaDescription, tags, client, thumbnailImage} = project.node
                            return (
                                <ProjectCard
                                    key={id}
                                    slug={slug}
                                    metaTitle={metaTitle}
                                    metaDescription={metaDescription}
                                    tags={tags}
                                    client={client}
                                    thumbnailImage={thumbnailImage}
                                />
                            )
                        })
                    }
                    <p className="page-outro">
                        Our clients are businesses & business associations, policy makers, civic society organizations, clusters, funders and enablers. If you also like to work and partner with us, we invite you to contact us anytime.  
                    </p>
                    <LightButton buttonText='Contact us today' className='button' linkTo='/contact' />
            </ProjectPageContainer>
        </Layout>
    )
}


const ProjectPageContainer = styled(GridContainer)`
    a {
        color: ${props => props.theme.colors.primary900};
    }
    .sectionIntro, .page-outro, .button {
        grid-column: 3  / span 8 ;
    }
    .sectionIntro {
        grid-row: 3 / span 1;
        text-align: center;
        line-height: 1.5;
        margin-bottom: 4.5rem;
    }
    .page-outro {
        text-align: center;
        line-height: 1.5;
        margin: 2.5rem 0 2.5rem 0;
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
        .sectionIntro, .page-outro{
            text-align: left;
        }
        .button {
            justify-self: flex-start;
        }
    }
`

export default ProjectPage