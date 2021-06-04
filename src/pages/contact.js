import React from 'react'
import Layout from '../Components/Layout'
import styled from 'styled-components'
import { Section } from '../Components/Elements'
import Form from '../Components/Form'
import LightButton from '../Components/Light-Button'
import Seo from '../Components/SEO'

const ContactPage = ()=>{
    return (
        <Layout>
            <Seo title='Contact'/>
            <ContactPageContainer>
                <h1>
                    Tell us more about your project.  
                </h1>
                <div className='copy'>
                    <div>
                        <p className="contactText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis harum perferendis facere modi magnam ipsa!</p>
                        <p>Email us.</p>
                        <p className="email-address">info@quercus-group.com</p>
                    </div>
                    <div>
                        <p>Looking for someone in particular?</p>
                        <LightButton buttonText='Our team' linkTo='/about' className='button'/>
                    </div>
                </div>
                <ContactForm/>
            </ContactPageContainer>
        </Layout>
    )
}

const ContactPageContainer = styled.section`
    grid-column: 2 / span 12;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 4.5rem));
    grid-column-gap: 2rem;
    grid-template-rows: max-content;
    padding: 4rem 0;
    h1 {
        font-size: 3.5rem;
        line-height: 1.3;
        font-weight: 900;
        margin-bottom: 2rem;
        grid-column: 1 / span 6;
    }
    .copy {
        grid-column: 1 / span 6;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
            font-size: 1.25rem;
            line-height: 1.5;
        }
        .contactText {
            width: 80%;
        } 
        .email-address {
            color: ${props => props.theme.colors.highlight600};
            font-weight: 700;
            font-size: 2rem;
        }
        .button {
            margin-top: 2rem;
        }
    }
    
`

const ContactForm = styled(Form)`
    grid-row: 1 / span 2;
    grid-column: 7 / span 6;
`

export default ContactPage