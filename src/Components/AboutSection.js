import React from 'react';
import styled from 'styled-components';
import { Section, SectionText, SectionTitle } from './Elements';
import Button from "./Button"

const AboutSection = () => {
    return ( 
        <StyledSection>
            <AboutSectionTitle>
                We try to ensure that what we do is as impactful as possible.
            </AboutSectionTitle>
            <AboutSectionText as="p">
                The real glue is human. At our core, we work with relational challenges. 
            </AboutSectionText>
            <KeyInfo>
                    <InfoItem>
                        <p>An epic adventure since</p>
                        <strong>2012</strong>
                    </InfoItem>
                    <InfoItem>
                        <p>Offices in</p>
                        <strong>Copenhagen<br/>Nairobi<br/>Singapore</strong>
                    </InfoItem>
                    <InfoItem>
                        <p>Worldwide</p>
                        <strong>40+<br/>countries</strong>
                    </InfoItem>
                    <InfoItem>
                        <p>Across sectors</p>
                        <strong>Sustainable Trade<br/>Regional Economic Developmen<br/>Social Innovation</strong>
                    </InfoItem>
                    <InfoItem>
                        <p>Approach</p>
                        <strong className="highlighted">Sustainability<br/>Collaboration<br/>Innovation</strong>
                    </InfoItem>
            </KeyInfo>
            <ToAboutButton text="More about Quercus Group" linkTo="/company"/>
        </StyledSection>
     );
}

const StyledSection = styled(Section)`
    min-height: 80vh;
    align-content: center;
    padding: 0;
`

const AboutSectionTitle = styled(SectionTitle)`
    text-align: center;
`
const AboutSectionText = styled(SectionText)`
    text-align: center;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.blue2};
`
const KeyInfo = styled.div`
    grid-column: 1 / span 12;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: min-content;
    `
const InfoItem = styled.div`
    text-align: center;
    strong {
        font-size: clamp(1.44rem, 1.73vw,1.563rem);
        &.highlighted {
            color: ${props => props.theme.colors.yellow1};
        }       
    }
`

const ToAboutButton = styled(Button)`
    grid-column-end: 13;
    justify-self: end;
`
  
export default AboutSection;