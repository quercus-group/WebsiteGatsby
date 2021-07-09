import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Layout from '../Components/Layout'
import Seo from '../Components/SEO'
import ProjectCard from '../Components/ProjectCard'
import LightButton from '../Components/Light-Button';

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
                                quality: 100
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
            <Seo title='Projects'/>
            <ProjectPageContainer>
                    <h1>Projects</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className='sectionIntro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum fugiat ex doloremque, earum itaque. Sequi ea, non excepturi perferendis magni voluptatibus odio expedita laboriosam sint ullam minima voluptates qui, in voluptas eaque odit quam vero molestiae at facere voluptatum? Odio possimus dolor ipsum corrupti ipsa accusantium, ad vel</p>
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ipsam, facilis accusantium dolore a optio quis quibusdam ducimus. Adipisci, blanditiis. Rem, sed nam maxime numquam enim quod explicabo a eaque beatae tempora rerum, deleniti esse.
                    </p>
                    <LightButton buttonText='Contact us today' className='button' linkTo='/contact' />
            </ProjectPageContainer>
        </Layout>
    )
}


const ProjectPageContainer = styled.section`
    margin-top: 5vh;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 4.5rem));
    grid-gap: 0rem 2rem;
    a {
        color: ${props => props.theme.colors.primary900};
    }
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
        grid-template-columns: repeat(8, minmax(auto, 6rem));
        h1, h2, .sectionIntro, .page-outro, .button {
        grid-column: 2  / span 6;
        }
    }
    @media screen and (max-width: 68rem){
        grid-template-columns: repeat(8, 1fr);
    }
    @media screen and (max-width: 56rem){
        .sectionIntro, .page-outro, .button {
        grid-column: 1  / span 8;
        }
    }
    @media screen and (max-width: 48rem){
        grid-template-columns: repeat(6, 1fr);
        h1, h2, .sectionIntro, .page-outro, .button {
            grid-column: 1  / span 6;
        }
    }
    @media screen and (max-width: 40rem){
        h1, h2, .sectionIntro, .page-outro{
            text-align: left;
        }
        h1 {
            font-size: 2.5rem;
        }
        .button {
            justify-self: flex-start;
        }
    }
`

export default ProjectPage