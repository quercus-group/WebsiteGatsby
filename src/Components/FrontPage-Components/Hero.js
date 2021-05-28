import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'



const Hero = () => {
    const heroImages = useStaticQuery(graphql`
        query images {
            allContentfulAsset (filter: {title: {in: ["MariamHeroImage", "AllanHeroImage", "NicolaiHeroImage"]}})
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
    const secondImage = heroImages.allContentfulAsset.edges[0]
    const thirdImage = heroImages.allContentfulAsset.edges[1]

    return ( 
        <HeroContainer>
            <div className='heroCopy'>
                <h1>Building innovative communities.</h1>
                <h3>We help businesses, government, academia and civic society to shape innovation & growth  with nature and people. Diversity of perspectives is always our starting point.</h3>
            </div>
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
    max-height: 50rem;
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
            color: ${props => props.theme.colors.primary700};
        }
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
`
