import React from 'react'
import Layout from '../Components/Layout'
import styled from 'styled-components'
import LightButton from '../Components/Light-Button'
import Seo from '../Components/SEO'

const ContactPage = ()=>{
    return (
        <Layout>
            <Seo title='Contact' description='Tell us about your project in an email, in the form or to someone in our team.'/>
            <ContactPageContainer>
                <h1>
                    Tell us more about your project.  
                </h1>
                <p className="contact-text">Feel free to contact us by e-mail or filling out the form (or visit us for a coffee). We will read every word and answer you in no time.</p>
                <div className='email-contact'>
                    <div>
                        <p className='email-us'>Email us.</p>
                        <p className="email-address">mariam@quercus-group.com</p>
                    </div>
                    <div className="ourteam">
                        <p>Looking for someone in particular?</p>
                        <LightButton buttonText='Our team' linkTo='/about' className='button'/>
                    </div>
                </div>
            </ContactPageContainer>
        </Layout>
    )
}

const ContactPageContainer = styled.section`
    grid-column: 2 / span 12;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 4.5rem));
    grid-column-gap: 2rem;
    grid-template-rows: max-content;
    margin-top: 5vh;
    h1 {
        grid-column: 4 / span 6;
        grid-row: 1 / span 1;
        text-align: center;
        font-size: 3.5rem;
        line-height: 1.3;
        font-weight: 900;
        margin-bottom: 2rem;
    }
    .contact-text {
        grid-column: 3 / span 8;
        grid-row: 2 / span 1;
        text-align: center;
        margin-bottom: 4.5rem;
    }
    .email-contact {
        grid-column: 1 / span 6;
        grid-row: 3 / span 1;
        display: flex;
        flex-direction: column;
        p {
            font-size: 1.25rem;
            line-height: 1.5;
        }
        .email-us {
            margin-bottom: 1rem;
        }
        .email-address {
            color: ${props => props.theme.colors.secondary700};
            font-weight: 700;
            font-size: 2rem;
            margin: 0rem 0 4.5rem 0;
        }
        .button {
            margin-top: 1rem;
            color: ${props => props.theme.colors.primary900};
            font-size: 1.125rem;
            .circle {
                background-color: ${props => props.theme.colors.primary900};
                height: 2rem;
                width: 2rem;
            }
        }
    }
    @media screen and (max-width: 68rem){
        h1 {
        grid-column: 3 / span 8;
        }
        .contact-text {
        grid-column: 2 / span 10;
        }
    }  
    @media screen and (max-width: 56rem){
        grid-template-columns: repeat(8, minmax(0, 1fr));
        h1 {
            grid-column: 2 / span 6;
        }
        .contact-text {
            grid-column: 2 / span 6;
        }
        .email-contact {
            align-items: center;
            grid-column: 2 / span 6;
            .email-us, .email-address, .ourteam p {
                text-align: center;
            }
            .email-address {
                margin-bottom: 2.5rem;
            }
            .ourteam {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-bottom: 4.5rem;
                .button {
                    align-self: center;
                }
            }
        }
    }
    @media screen and (max-width: 48rem){
        h1 {
            grid-column: 1 / span 8;
        }
        .contact-text {
            grid-column: 1 / span 8;
        }
    }
    @media screen and (max-width: 40rem){
        h1, .contact-text {
            text-align: left;
        }
        h1 {
            font-size: 2.5rem;
        }
        .email-contact {
            grid-column: 1 / span 8;
            align-items: flex-start;
            
            .email-us, .email-address, .ourteam p {
                text-align: left;
            }
            .email-address {
                font-size: 1.5rem;
            }
            .ourteam .button {
                align-self: flex-start;
            }
        }
        
    }
`


export default ContactPage