import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby'
import { GatsbyImage} from "gatsby-plugin-image"
import { IconArrowNarrowRight } from '@tabler/icons';

const ProjectCard = ({ slug, metaTitle, metaDescription, tags, client, thumbnailImage}) => {
    return ( 
        <ProjectCardContainer to={slug} className='projectCard'>
                <GatsbyImage 
                    image={thumbnailImage.gatsbyImageData}
                    alt={thumbnailImage.description ? thumbnailImage.description : ''}
                    className='project-thumbnail-image'
                />
                
                <div className="tags">
                    {tags.map(tag => (<p className='tag' key={tag}>{tag}</p>))}
                </div>
                <div className="title-and-client">
                    <h3 className='title'>{metaTitle}</h3>
                    <h4 className='client'>{client}</h4>
                </div>
                <p className='teaser'>{metaDescription}</p>
                <IconArrowNarrowRight className='icon'/>
        </ProjectCardContainer>
     );
}

const ProjectCardContainer = styled(Link)`
    grid-column: span 4;
    border: 0.1rem solid ${props => props.theme.colors.white300};
    border-radius: 0.5rem;
    box-shadow: 0 0.3rem 0.5rem 0rem rgba(0, 0, 0, 0.15);
    overflow: hidden;
    display: grid;
    grid-template-columns: 2rem 1fr 2rem;
    grid-template-rows: 37% 14% 17% 20% 8% 4%;
    height: 43rem;
    transition: transform 0.5s ease;
    margin-bottom: 2rem;
    .project-thumbnail-image {
        grid-column: 1 / span 3;
    }
    .tags, .title-and-client, .teaser, .icon {
        grid-column: 2 / span 1;
    } 
    .tags {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1.5rem;
        .tag {
            height: fit-content;
            font-size: 0.875rem;
            margin: 0 0.5rem 0 0;
            padding: 0.25rem 0.5rem;
            background-color: ${props => props.theme.colors.white300};
            border-radius: 0.5rem;
        }
    }
    
    h3 {
        font-size: 1.25rem;
        line-height: 130%;
        margin: 1rem 0 0.5rem 0;
    }
    h4 {
        font-size: 1rem;
        color: ${props => props.theme.colors.primary500};
    }
    p {
        font-size: 1.125rem;
        margin-bottom: 0;
        line-height: 1.5;
    }
    .icon {
        justify-self: end;
        width:4rem;
        height: 4rem;
        stroke-width: 1;
        stroke: ${props => props.theme.colors.primary100};
        grid-row: span 2;
    }
    @media screen and (max-width: 68rem){
        grid-column: span 4;
        height: 38rem;
        .tags {
            margin-top: 1.25rem;
        }
    }
    @media screen and (max-width: 56rem){
        grid-template-columns: 1.5rem 1fr 1.5rem;
        grid-template-rows: 35% 14% 21% 20% 8% 2%;
    }
    @media screen and (max-width: 50rem){
        grid-template-columns: 1rem 1fr 1rem;
    }
    @media screen and (max-width: 48rem){
        grid-column: span 6;
        height: 20rem;
        grid-template-columns: 40% 55%;
        grid-template-rows: 1.5rem auto repeat(2, 1fr) 1.5rem;
        grid-column-gap: 5%;
        padding-right: 1.5rem;
        .project-thumbnail-image {
        grid-column: 1 / span 1;
        grid-row: 1 / span 5;
        }
        h3 {
            margin-top: 0.5rem;
        }
        .tags, .title-and-client, .teaser, .icon {
            grid-column: 2 / span 1;
        }
        .tags {
            grid-row: 2 / span 1;
            margin-top: 0;
            .tag {
                margin-bottom: 0.5rem;
            }
        }
        .title-and-client {
            grid-row: 3 / span 1;
        }
        .teaser {
            grid-row: 4 / span 1;
        }
        .icon {
            display: none;
        }
    }
    @media screen and (max-width:40rem){
        grid-template-rows: 1rem repeat(2, auto) 1rem;
        height: fit-content;
        .project-thumbnail-image {
            grid-column: 1 / span 1;
            grid-row: 1 / span 4;
        }
        .tags {
            grid-row: 3 / span 1;
        }
        .title-and-client {
            grid-row: 2 / span 1;
            .title {
                margin-top: 0;
            }
            .client {
                margin-bottom: 1rem;
            }
        }
        .teaser {
            display: none;
        }
    }
    @media screen and (max-width: 32rem){
        grid-template-columns: 1rem 1fr 1rem ;
        grid-template-rows: 10rem auto auto 1rem;
        grid-column-gap: 0;
        padding-right: 0;
        height: max-content;
        .project-thumbnail-image {
            grid-column: 1 / span 3;
            grid-row: 1 / span 1;
        }
        .title-and-client {
            margin-top: 1rem;
            grid-column: 2 / span 1;
            grid-row: 2 / span 1;
        }
        .tags {
            grid-column: 2 / span 1;
            grid-row: 3 / span 1;
            .tag {
                font-size: 0.75rem;
            }
        }
    }
    @media screen and (min-width: 40rem){
        &:hover {
            transform: scale(1.02);
        }
    }
`
 
export default ProjectCard;