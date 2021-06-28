import React from 'react';
import styled from 'styled-components'
import partnerLogos from '../../data/partnerLogos'
import LightButton from '../Light-Button';

const ContactSection = () => {
    return ( 
        <ContactSectionContainer>
            <h2 className='sectionTitle'>Imagine what we can do together. </h2>
            <p className='sectionSubtitle'>You have a project on your mind that can benefit from working together? We say 'Good things start from a cup of coffee'. Let's sit together for one to explore how we can work&nbsp;together.</p>
            <LightButton buttonText='Contact us today' linkTo='/contact' className='contactButton'/>
            <p className='sectionSubtitle clientIntro'>We prefer to meet each other, our partners and our clients on eye-height. In the past, we have worked together with organizations such as&hellip;</p>
            {/* <div className="clientLogos">
                {partnerLogos.map(logo => (
                    <img
                         key={logo.name}
                         src={logo.url}
                         alt={`Logo of ${logo.name}`}
                     />
                ))}
            </div> */}
        </ContactSectionContainer>
     );
}

const ContactSectionContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 4.5rem));
    grid-column-gap: 2rem;
    margin-top: 8rem;
    h2 {
        font-size: 2rem;
    }
    p {
        font-size: 1.25rem;
        line-height: 1.5;
    }
    .sectionTitle {
        grid-column: 4 / span 6;
        margin-bottom: 2rem;
        font-weight: 700;
        text-align: center;
    }
    .sectionSubtitle {
        grid-column: 3 / span 8;
        margin-bottom: 4.5rem;
        text-align: center;
    }
    .contactButton {
        grid-column: 1 / span 12;
        justify-self: center;
    }
    .clientIntro {
        margin-top: 7.5rem;
    }
    .clientLogos {
        grid-column: 1 / span 12;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        img {
            max-height: 3.5rem;
            filter: grayscale(1);
        }
    }
    @media screen and (max-width: 56rem){
        grid-template-columns: repeat(8, 1fr);
        .sectionTitle, .sectionSubtitle, .contactButton {
            grid-column: 2 / span 6;
        }
    }
    @media screen and (max-width: 45rem){
        .sectionTitle, .sectionSubtitle, .contactButton {
            grid-column: 1 / span 8;
        }
    }
    @media screen and (max-width: 40rem){
        margin-top: 4.5rem;
        grid-template-columns: repeat(6, 1fr);
        .sectionTitle, .sectionSubtitle {
            text-align: left;
            grid-column: 1 / span 6;
        }
        .sectionSubtitle {
            margin-bottom: 2rem;
        }
        .contactButton {
            grid-column: 1 / span 6;
            justify-self: start;
        }
        .clientIntro {
            margin-top: 4.5rem;
        }
        .clientLogos {
            grid-column: 1 / span 6;
            flex-wrap: wrap;
            img {
                margin-bottom: 1rem;
                transform: scale(0.9);
            }
        }
    }
`
 
export default ContactSection;