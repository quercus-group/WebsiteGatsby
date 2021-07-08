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
                    alt={thumbnailImage.description}
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
    @media screen and (min-width: 40rem){
        &:hover {
            transform: scale(1.02);
        }
    }
`
 
export default ProjectCard;