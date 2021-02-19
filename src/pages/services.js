import React from 'react'
import styled from 'styled-components'
import {Layout} from '../Components'
import { Section, SectionTitle, SectionText } from '../Components/Elements'
import Search from '../images/search-icon.svg'
import Compass from '../images/compass.svg'
import Mobilize from '../images/mobilize.svg'
import Rocket from '../images/rocket.svg'
import Bulb from '../images/bulb.svg'
import Tools from '../images/tools.svg'
import { Question } from './team'
import Button from '../Components/Button'



const ServicesPage = ()=>{
    return (
        <Layout>
            <Section>
                <SectionTitle>
                    Open and create pathways on intractable situations through new alliances.
                </SectionTitle>
                <ServiceSectionText>
                    <p>We work together with companies, governments and civic society organizations, who aspire to be changed and create change on a difficult situation that cannot be solved alone. </p>
                    <p>Our team practices a set of approaches and methods that help  to bring together minds, hearts and hands in partnerships and alliances, in getting a better understanding of the challenge and how to address it, and setting insights and collaboration towards action.</p>
                </ServiceSectionText>
                <Grid>
                    {Services.map(service => (
                        <ServiceCard key={service.category}>
                            {service.icon && <img src={service.icon} alt={`icon for ${service.category} services`}/>}
                            <h5>{service.category}</h5>
                            <p>{service.description}</p>
                            <p className="lighter">{service.services}</p>
                        </ServiceCard>
                    ))}
                </Grid>
                <Question>You have an idea, a project or want to learn more about our services in action?</Question>
                <ContactButton text="Contact us today" linkTo="/contact" arrowColor="#FFFEFE"/>
                <ToProjectsButton text="Projects" linkTo="/projects" />
            </Section>
        </Layout>
    )
}

const ServiceSectionText = styled(SectionText)`
    column-count: 2;
    column-gap: 2rem;
`

const Grid = styled.div`
    grid-column: 1 / span 12;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto, 1fr);
    grid-gap: 2rem 2rem;
`

const ServiceCard = styled.div`
    padding: 2rem;
    box-shadow: 0 0.2rem 0.2rem ${props => props.theme.colors.blue4};
    border-radius: 0.5rem;
    text-align: center;
    h5 {
        margin: 2rem 0rem 1rem 0rem;
    }
    .lighter {
        color: ${props => props.theme.colors.blue3};
    }
`

const ContactButton = styled(Button)`
    grid-column-end: 7;
    justify-self: end;
    .specificStyles {
        border:none;
        background: ${props => props.theme.colors.yellow1};
        color: ${props => props.theme.colors.neutral900};
        font-weight: 700;
    }
`

const ToProjectsButton = styled(Button)`
    grid-column: 7;
`

export const Services = [
    {category: "Understand & Situate", icon: `${Search}`, description: "We help clients to broaden and deepen their understanding on where they are and what is going on.", services: "Social and Action Research, Diagnosis & Analytics // Stakeholder, Systems & Issue Mapping // Collective Intelligence // Synthesis & Sensemaking"},
    {category: "Plan & Strategize", icon: `${Compass}`, description: "We help organizations to develop actions to overcome challenges and to move forward.", services: "Strategy // Theory of Change // Sustainable & Inclusive Business Model // Project Management // Futures // Fundraising & Financing"},
    {category: "Mobilize & Orchestrate", icon: `${Mobilize}`, description: "Collaboration on difficult problems is not easy and requires expert facilitation. ", services: "Creative Facilitation & Moderation // Engagement & Partnership Plan // Brokering // Cluster Development // Stakeholder & Citizen Participation"},
    {category: "Amplify & Generate", icon: `${Rocket}`, description: "Embracing on-going change and diversity, we support creating  and amplifying solutions to complex challenges.",services: "Co-Creation // Convening // Open Innovation // Innovation Labs & Teams // Value Chain Development // Challenge Prizes // Accelerator Programs"},
    {category: "Learn & Evaluate", icon: `${Bulb}`, description: "It’s a process. Build capabilities, learn what works, and understand your impact, together with us.", services: "Capacity Building, Trainings & Coaching // Innovation & Action Learning // Evidence, Monitoring & Evaluation"},
    {category: "Ventures", icon: `${Tools}`, description: "We are changing ourself. Sometimes it is by going on our adventures.", services: "Building new impact organizations, projects and alliances from scratch"}
]


export default ServicesPage