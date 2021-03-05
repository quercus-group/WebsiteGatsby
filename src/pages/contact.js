import React from 'react'
import {Layout} from '../Components'
import styled from 'styled-components'
import { Section } from '../Components/Elements'
import Form from '../Components/Form'

const ContactPage = ()=>{
    return (
        <Layout>
            <Section>
                <Title>
                    We'd love to hear from you. 
                </Title>
                <LeftSideText>
                    <p>Let us talk about</p>
                    <ul>
                        <li>your great project</li>
                        <li>meeting for a coffee</li>
                    </ul>
                    <p>Email us.</p>
                    <p>info@quercus-group.com</p>
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
`
const ContactForm = styled(Form)`
    grid-column: 7 / span 6;
`

export default ContactPage