import React from "react"
import styled from 'styled-components'
import Button from "./Button";
import { Section, SectionTitle } from "./Elements";
import { LeftSideText } from "./ProjectSection";

const ServiceSection = () => {
    return ( 
        <Section>
            <SectionTitle>We support collaborative and creative problem solving for sustainable development.</SectionTitle>
            <TextBlock>
                <div>
                <p>Quercus Group employs a combination of approaches, methods and practices aimed to advance sustainability, collaboration and innovation.</p>
                <p>Our services integrate diverse perspectives and needs into a win-win-win approach. This entails tools to see the whole system from many viewpoints. It comprises bringing people together to seek alternatives, build them jointly and learn what works</p>
                <p>We are equally happy to support our clients and partners in particular steps or make it a success from start to end.</p>
                </div>
                <Button text="Learn more" linkTo="/services"/>
            </TextBlock>
            <ServiceAccordion>
                {services.map(service => (
                    <ServiceCategory>
                        <h5>{service.category}</h5>
                        {/* <p>{service.services}</p> */}
                    </ServiceCategory>
                ))}                
            </ServiceAccordion>
        </Section>
     );
}

const TextBlock = styled(LeftSideText)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ServiceAccordion = styled.div`
    grid-column: 7 / span 4;
`
const ServiceCategory = styled.div`
    padding: 1rem;
    box-shadow: 0 0.2rem 0.2rem ${props => props.theme.colors.blue4};
    margin-bottom: 1rem;
    border-radius: 0.5rem;
`

const services = [
    {category: "Understand & Situate", services: "Social and Action Research, Diagnosis & Analytics // Stakeholder, Systems & Issue Mapping // Collective Intelligence // Synthesis & Sensemaking"},
    {category: "Plan & Strategize", services: "Strategy // Theory of Change // Sustainable & Inclusive Business Model // Project Management // Futures // Fundraising & Financing"},
    {category: "Mobilize & Orchestrate", services: "Creative Facilitation & Moderation // Engagement & Partnership Plan // Brokering // Cluster Development // Stakeholder & Citizen Participation"},
    {category: "Amplify & Generate", services: "Co-Creation // Convening // Open Innovation // Innovation Labs & Teams // Value Chain Development // Challenge Prizes // Accelerator Programs"},
    {category: "Learn & Evaluate", services: "Capacity Building, Trainings & Coaching // Innovation & Action Learning // Evidence, Monitoring & Evaluation"},
    {category: "Ventures", services: "Building new impact organizations, projects and alliances from scratch"}
]


 
export default ServiceSection;