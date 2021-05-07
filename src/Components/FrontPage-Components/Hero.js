import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components'

const Hero = () => {
    return ( 
        <HeroContainer>
            <div className='heroCopy'>
                <h1>Building innovative communities.</h1>
                <h3>We help businesses, government, academia and civic society to shape innovation & growth  with nature and people. Diversity of perspectives is always our starting point.</h3>
            </div>
            <StaticImage 
                src='https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
                alt='Workshop Omage'
                className=' image firstImage'
                />
            <StaticImage
                src='https://images.unsplash.com/photo-1501471759181-021123cdc844?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80'
                alt='People crossing the street'
                className=' image secondImage'
                />
            <StaticImage
                src='https://images.unsplash.com/photo-1531482615713-2afd69097998?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
                alt='People working on computer'
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
        img {
            filter: grayscale(1);
        }
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
