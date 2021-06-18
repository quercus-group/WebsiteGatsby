import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import LightButton from '../Light-Button';



const Hero = () => {
    const heroImages = useStaticQuery(graphql`
        query images {
            allContentfulAsset (filter: {title: {in: ["NicolaiHero", "HowMightWe", "DitteKaren"]}})
                {edges {
                    node  {
                        title,
                        description, 
                        id
                        gatsbyImageData (
                            placeholder: BLURRED
                            formats: [AUTO, WEBP]
                            quality: 75
                        )
                    }
                }
            }
        }
    `)
    const firstImage = heroImages.allContentfulAsset.edges[2]
    const secondImage = heroImages.allContentfulAsset.edges[1]
    const thirdImage = heroImages.allContentfulAsset.edges[0]

    return ( 
        <HeroContainer>
            <div className='heroCopy'>
                <h1>Today's challenges demand acting together.</h1>
                <h3>We help businesses, government, academia and civic society to collaborate more and better across perspectives, sectors and countries.</h3>
            </div>
            <LightButton buttonText='Get in touch' className='cta' linkTo='/contact'/>
            <GatsbyImage 
                image={firstImage.node.gatsbyImageData}
                alt={firstImage.node.description}
                className=' image firstImage'
                />
            <GatsbyImage
                image={secondImage.node.gatsbyImageData}
                alt={secondImage.node.description}
                className=' image secondImage'
                />
            <GatsbyImage
                image={thirdImage.node.gatsbyImageData}
                alt={thirdImage.node.description}
                className=' image thirdImage'
            />
        </HeroContainer>
     );
}
 
export default Hero;

const HeroContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 4.5rem));
    grid-column-gap: 2rem;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 2rem;
    margin-bottom: 2rem;
    height: 84vh;
    .heroCopy {
        grid-column: 1 / span 6;
        grid-row: 1 / span 2;
        align-self: flex-end;
        h1 {
            font-size: 3.5rem;
            line-height: 1.3;
            font-weight: 900;
            margin-bottom: 2rem;
        }
        h3 {
            font-size: 1.5rem;
            line-height: 1.5;
            color: ${props => props.theme.colors.primary300};
        }
    }
    .cta {
        grid-column: 1 / span 6;
        grid-row: 3 / span 1;
        align-self: flex-end;
    }
    .image {
        border-radius: 0.5rem;
        position: relative;
    }
    .firstImage {
        grid-column: 7 / span 3;
        grid-row: 1 / span 2;
    }
    .secondImage {
        grid-column: 10 / span 3;
        grid-row: 2 / span 2;
    }
    .thirdImage {
        grid-column: 6 / span 4;
        grid-row: 3 / span 1;
    }
    @media screen and (min-width: 90rem){
        max-height: 48rem;
    }
    @media screen and (max-width: 68rem){
        grid-template-columns: repeat(8, minmax(auto, 6rem));
        height: 82vh;
        .heroCopy {
            grid-column: 1 / span 4;
            h1 {
                font-size: 3rem;
            }
            h3 {
                font-size: 1.25rem;
            }
        }
        .firstImage {
            grid-column: 5 / span 2;
        }
        .secondImage {
            grid-column: 7 / span 2;
        }
        .thirdImage {
            grid-column: 4 / span 3;
        }
        .cta {
            grid-column: 1 / span 4;
            grid-row: 3 / span 1;
            align-self: flex-end;
            font-size: 1.25rem;
        }
    }
    @media screen and (max-width: 56rem){
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(4, 1fr);
        height: auto;
        .heroCopy {
            grid-column: 1 / span 5;
            
        }
        .firstImage {
            grid-column: 6 / span 3;
            grid-row: 1 / span 3;
        }
        .secondImage {
            display: none;
        }
        .thirdImage {
            grid-column: 4 /span 4;
            grid-row: 3 / span 2;
            box-shadow: 0.3rem 0.3rem 0.5rem 0rem rgba(0, 0, 0, 0.15);
        }
        .cta {
            align-self: flex-start;
        }
    }
`
