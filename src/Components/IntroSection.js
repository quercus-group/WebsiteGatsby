import React from 'react'
import styled from 'styled-components'
import { Section, SectionText, SectionTitle } from './Elements'

const HeroSection = ()=>{
    return (
        <IntroSection>
            <SectionTitle>We help organizations and actors to collaborate better across differences._</SectionTitle>
            <IntroText>
                <p>Quercus Group is an international consulting company for sustainability based in Copenhagen, Nairobi and Singapore.</p>
                <p>We focus on sustainable trade, regional economic development and social innovation. Our expertise is collaboration, co-creation and how to effectively use it to address the world’s most difficult challenges.</p>
                <p>We help organizations, stakeholder and people from government, business and civic society to forge future opportunities, choices and solutions that are unattainable by acting alone.</p>
                <p>Our services help get a better understanding of what is going on, how to navigate rapid, far-reaching and unprecedented changes in all aspects of society and how to create effective change by doing it in partnership.</p>
                <p>Imagine what we can do together.</p>
            </IntroText>
        </IntroSection>
    )
}

const IntroSection = styled(Section)`
    min-height: 90vh;
    align-content: center;
`

const IntroText = styled(SectionText)`
    column-count: 2;
    column-gap: 2rem;
    p {
        margin-bottom: 1rem;
    }
`

export default HeroSection