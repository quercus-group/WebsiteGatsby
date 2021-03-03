import React, {useState} from "react"
import styled from 'styled-components'
import Button from "./Button";
import { Section, SectionTitle } from "./Elements";
import { LeftSideText } from "./ProjectSection";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Services from '../Data/Services'


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
                <AnimateSharedLayout>
                <ServiceAccordion layout>
                    {Services.map(service => (
                        <ServiceItem key={service.category} service={service}/>
                    ))}                
                </ServiceAccordion>
            </AnimateSharedLayout>
        </Section>
     );
}

const ServiceItem = ({service})=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <ServiceCategory layout onClick={toggleOpen}>
            <motion.h5 layout>{service.category}</motion.h5>
            <AnimatePresence>
                {isOpen && <motion.p layout variants={TextMotion} initial="close" animate="open" exit="close">{service.services}</motion.p>}
            </AnimatePresence>
        </ServiceCategory>
    )
}


const TextMotion = {
    close: {
        opacity: 0,
    }, 
    open: {
        opacity: 1,
    }
}

const TextBlock = styled(LeftSideText)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ServiceAccordion = styled(motion.ul)`
    grid-column: 7 / span 4;
`
const ServiceCategory = styled(motion.li)`
    padding: 1rem 2rem;
    box-shadow: 0 0.2rem 0.2rem ${props => props.theme.colors.blue4};
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    list-style: none;
    cursor: pointer;
    background-color: ${props => props.theme.colors.blue2};
    color: ${props => props.theme.colors.neutral900};
    p {
        margin-top: 1rem;
    }
`
 
export default ServiceSection;