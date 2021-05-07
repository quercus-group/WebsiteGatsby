import React from 'react'
import styled from 'styled-components'
import Layout from '../Components/Layout'
import { Section, SectionTitle, SectionText, Question} from '../Components/Elements'
import Button from '../Components/Button'
import Services from '../data/Services'



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
    box-shadow: 
        0 2.8px 2.2px rgba(54, 73, 117, 0.034),
        0 6.7px 5.3px rgba(54, 73, 117, 0.048),
        0 12.5px 10px rgba(54, 73, 117, 0.06),
        0 2rem 40px rgba(54, 73, 117, 0.12);
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




export default ServicesPage