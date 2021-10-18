import React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'
import Layout from '../Components/Layout'
import PageTitle from '../Components/Basic-Components/PageTitle';
import Seo from '../Components/SEO'

const projectPage = ({data}) => {
    const {projectTitle, client, tags, subtitle, mainText, metaTitle, metaDescription, imageOnProjectPage, primaryContact, secondaryContact, projectStart, projectEnd, seoImage, author } = data.contentfulProject
    const seoImageSrc= seoImage ? `https:${seoImage.fluid.src}` : ''
    const articleAuthor = author ? `${author.firstName} ${author.lastName}` : null
    return ( 
        <Layout>
            <Seo
            title={metaTitle}
            description={metaDescription}
            metaImage={seoImageSrc}
            author={articleAuthor}
            />
            <ProjectPageContainer>
                <PageTitle>{projectTitle}</PageTitle>
                <p className="context-info">{client ? client : ''}  &bull; {projectStart ? projectStart : ''} -{projectEnd ? projectEnd : ''}</p>
                <div className="tags">
                    { tags ? tags.map(tag => (<span key={tag}>{tag}</span>)) : '' }
                </div>
                <div className="project-images">
                    {
                        imageOnProjectPage !== null ? 
                        imageOnProjectPage.map(image => (
                            <GatsbyImage
                            className='project-image'
                            image={image.gatsbyImageData}
                            alt={image.description}
                            key={image.id}
                            />
                        )) : ''
                    }
                </div>
                { subtitle === null ? '' : <span className="subtitle">{documentToReactComponents(JSON.parse(subtitle.raw))}</span>}
                { mainText === null ? '' : documentToReactComponents(JSON.parse(mainText.raw)) }
                <p className='question-cta'>Interested to learn more about {projectTitle}? Contact&hellip;</p>
                <div className="project-contacts">
                    {primaryContact !== null ? 
                    <div className='contact-card'>
                        <GatsbyImage className='contact-image' image={primaryContact.profileImage.gatsbyImageData} alt={`${primaryContact.firstName} ${primaryContact.lastName} from Quercus Group.`}/>
                        <p className='contact-name'>{primaryContact.firstName} {primaryContact.lastName}</p>
                        <p className='contact-email'>{primaryContact.email}</p>
                        <p className='contact-phone'>{primaryContact.phone}</p>
                    </div> : null}
                    {secondaryContact !== null ?
                     <div className='contact-card'>
                        <GatsbyImage className='contact-image' image={secondaryContact.profileImage.gatsbyImageData} alt={`${secondaryContact.firstName} ${secondaryContact.lastName} from Quercus Group.`}/>
                        <p className='contact-name'>{secondaryContact.firstName} {secondaryContact.lastName}</p>
                        <p className='contact-email'>{secondaryContact.email}</p>
                        <p className='contact-phone'>{secondaryContact.phone}</p>
                    </div> : ''}
                </div>
            </ProjectPageContainer>
        </Layout>
     );
}

// styles
const ProjectPageContainer = styled.article`
    margin-top: 5vh;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 4.5rem));
    grid-gap: 0rem 2rem;
    .context-info {
        text-align:center;
    }
    .tags {
        grid-column: 3 / span 8;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        span {
            display: inline-flex;
            vertical-align: top;
            -webkit-box-align: center;
            align-items: center;
            max-width: 100%;
            font-weight: 400;
            line-height: 1.2;
            outline: transparent solid 2px;
            outline-offset: 2px;
            border: 0.1rem solid ${props => props.theme.colors.white300};
            box-shadow: 
                0 .0625rem .1875rem 0rem rgba(0, 0, 0, 0.1),
                0 .0625rem .125rem -0.125rem rgba(0, 0, 0, 0.06);
            min-height: 2rem;
            min-width: 2rem;
            font-size: 1rem;
            border-radius: 0.375rem;
            padding-inline-start: 0.75rem;
            padding-inline-end: 0.75rem;
            margin: 0.5rem 1rem 1rem 0.5rem;
            background: ${props => props.theme.colors.white100};
            color: ${props => props.theme.colors.primary900};
        }
    }
    .project-contacts,
    .project-images {
        grid-column: 3 / span 8;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
    }
    .project-images {
        margin: 3rem 0 3rem 0;
        .project-image {
            border-radius: 0.5rem;
        }
    }
    .project-contacts {
        margin-bottom: 4.5rem;
    }
    .subtitle {
        font-size: 1.5rem;
        grid-column: 3 / span 8;
        font-weight: 700;
        margin-bottom: 2rem;
    }
    h2 {
        font-size: 1.5rem;
        grid-column: 4 / span 6;
        font-weight: 700;
        margin: 1rem 0 0.5rem 0;
    }
    h3 {
        font-size: 1.25rem;
    }
    h4 {
        grid-column: 4 / span 6;
        margin: 1rem 0 0.5rem 0;
    }
    p, ul, ol, blockquote, h3 {
        grid-column: 4 / span 6;
    }
    a {
        color: ${props => props.theme.colors.primary900};
        text-decoration: underline;
    }
    p {
        line-height: 1.5;
    }
    ul, ol {
        margin-left: 2rem;
        p {
            margin-bottom: 0.5rem;
        }
    }

    ol li::marker {
        font-size: 1.25rem;
        padding-right: 0.5rem;
    }
    blockquote {
        font-style: italic;
        color: ${props => props.theme.colors.secondary700};
        padding-left: 2rem;
        border-left: 0.15rem solid ${props => props.theme.colors.secondary200};
        margin: 1.5rem 0;
        p {
            margin: 0;
        }
    }
    .question-cta {
        grid-column: 3 / span 8;
        font-size: 2rem;
        font-weight: 700;
        margin: 3rem 0;
        text-align: center;
    }
    .contact-card {
        display: grid;
        grid-template-columns: max-content auto;
        grid-column-gap: 2rem;
    }
    .contact-image {
        border-radius: 50%;
        grid-column: 1 / span 1;
        grid-row: span 3;
        max-height: 5rem;
        max-width: 5rem;
    }
    .contact-name {
        font-weight: 700;
        grid-column: 2 / span 1;
        margin-bottom: 0.5rem;
    }
    .contact-email, .contact-phone {
        margin: 0;
        grid-column: 2 / span 1;
        font-size: 1.125rem;
    }
    .updated-at {
        font-size: .875rem;
    }
    @media screen and (max-width: 68rem){
        grid-template-columns: repeat(8, minmax(0, 6rem));
        .context-info, .tags, .project-contacts, .project-images, .subtitle, .question-cta {
            grid-column: 2 / span 6;
        }
        p, h2, h3, blockquote, ul, ol, h3 {
            grid-column: 3 / span 4;
        }
    }
    @media screen and (max-width: 56rem){
        .context-info, .tags, .project-contacts, .project-images, .subtitle, .question-cta {
            grid-column: 1 / span 8;
        }
        p, h2, h3, ul, ol, blockquote {
            grid-column: 2 / span 6;
        }
    }
    @media screen and (max-width: 48rem){
        grid-template-columns: repeat(6, 1fr);
        .context-info, .tags, .project-contacts, .project-images, .subtitle, .question-cta {
            grid-column: 1 / span 6;
        }
        p, h2, h3, ul, ol, blockquote {
            grid-column: 2 / span 4;
        }
    }
    @media screen and (max-width: 48rem){
        grid-template-columns: repeat(6, 1fr);
        .context-info, .tags, .project-contacts, .project-images, .subtitle, .question-cta {
            grid-column: 1 / span 6;
        }
        p, h2, h3, ul, ol, blockquote {
            grid-column: 1 / span 6;
        }
    }
    @media screen and (max-width: 48rem){
        blockquote {
            padding-left: 1rem;
        }
        .context-info, .subtitle, .question-cta, p, h2, h3 {
            text-align: left;
        }
        .tags {
            justify-content: flex-start;
            span {
                margin: 0.5rem 0.5rem 0.5rem 0;
            }
        }
        .subtitle {
            margin-bottom: 1rem;
        }
        .project-images {
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 0rem;
            grid-template-rows: repeat(5, 1fr);
            .project-image:nth-child(1) {
                grid-column: 1 / span 2;
                grid-row: 1 / span 3;
            }
            .project-image:nth-child(2) {
                grid-column: 2 / span 2;
                grid-row: 3 / span 3;
                box-shadow: 
                    0 0.625rem 0.9375rem -0.1875rem rgba(0, 0, 0, 0.1),
                    0 .25rem .375rem -0.125rem rgba(0, 0, 0, 0.05);
            }
        }
        .project-contacts {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0rem;
            grid-row-gap: 2rem;
        }
    }
` 

// getting the project data
export const query = graphql`
    query ($slug: String!){
        contentfulProject (slug: {eq: $slug}) {
            projectTitle
            subtitle {raw}
            featuredProject
            metaTitle
            metaDescription
            client
            tags
            author {
                firstName
                lastName
            }
            projectStart (formatString: "MMM YYYY")
            projectEnd (formatString: " MMM YYYY")
            mainText {raw}
            updatedAt (formatString: "DD.MM.YYYY")
            imageOnProjectPage {
                title
                description
                id
                gatsbyImageData (
                    quality: 70
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                    )
            }
            seoImage {fluid {src}}
            primaryContact {
                firstName
                lastName
                email
                phone
                profileImage {
                    title
                    gatsbyImageData (
                        quality: 70
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                        aspectRatio: 1
                        )
                }
            }
            secondaryContact {
                firstName
                lastName
                email
                phone
                profileImage {
                    title
                    gatsbyImageData (
                        quality: 70
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                        aspectRatio: 1
                        )
                }
            }
        }   
    }
`
 
export default projectPage;