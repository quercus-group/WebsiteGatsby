import React from 'react'
import Layout from '../Components/Layout'
import styled from 'styled-components'
import { Section } from '../Components/Elements'
import Form from '../Components/Form'
import Button from '../Components/Button'

const ContactPage = ()=>{
    return (
        <Layout>
            <Section>
                <Title>
                    We'd love to hear from you. 
                </Title>
                <LeftSideText>
                    <div>
                    <p className="contactText">Tell us about your <span>new project</span>, your interest to <span>work with us</span>, or if you simply want to <span>talk over a coffee</span>.</p>
                    <p>Email us.</p>
                    <Email>info@quercus-group.com</Email>
                    </div>
                    <div>
                        <p>Looking for someone in particular?</p>
                        <Button text="Team" linkTo="/team"/>
                    </div>
                </LeftSideText>
                <ContactForm/>
            </Section>
        </Layout>
    )
}

const Title = styled.h2`
    grid-column: 1 / span 6;
`
const LeftSideText = styled.div`
    grid-column: 1 / span 6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
        color: ${props => props.theme.colors.blue3};
        font-weight: 700;
    }
    .contactText {
        width: 80%;
        margin-bottom: 5vh;
    }
    
`
const ContactForm = styled(Form)`
    grid-row: 1 / span 2;
    grid-column: 7 / span 6;
`
const Email = styled.p`
    font-size: clamp(1.44rem, 1.73vw,1.563rem);
    color: ${props => props.theme.colors.yellow1};
    font-weight: 700;
`

export default ContactPage