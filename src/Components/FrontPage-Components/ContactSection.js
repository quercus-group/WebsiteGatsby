import React from 'react';
import styled from 'styled-components'
import partnerLogos from '../../Data/partnerLogos'
import LightButton from '../Light-Button';

const ContactSection = () => {
    return ( 
        <ContactSectionContainer>
            <h2 className='sectionTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className='sectionSubtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur mollitia quae dolore minima ad vero ipsam quisquam obcaecati, aperiam maiores.</p>
            <LightButton buttonText='Contact us today' linkTo='/contact' className='contactButton'/>
            <p className='sectionSubtitle clientIntro'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur mollitia quae dolore minima ad vero ipsam quisquam obcaecati, aperiam maiores.</p>
            <div className="clientLogos">
                {partnerLogos.map(logo => (
                    <img
                         key={logo.name}
                         src={logo.url}
                         alt={`Logo of ${logo.name}`}
                     />
                ))}
            </div>
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
        /* flex-wrap: wrap; */
        justify-content: space-between;
        img {
            max-height: 3.5rem;
            filter: grayscale(1);
        }
    }
`
 
export default ContactSection;