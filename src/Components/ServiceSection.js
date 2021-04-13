import React, {useState} from "react"
import styled from 'styled-components'
import Button from "./Button";
import { Section, SectionTitle } from "./Elements";
import { LeftSideText } from "./ProjectSection";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Services from '../data/Services'


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
                
            </TextBlock>
            <AnimateSharedLayout>
                <ServiceAccordion layout>
                    {Services.map(service => (
                        <ServiceItem key={service.category} service={service}/>
                    ))}                
                </ServiceAccordion>
            </AnimateSharedLayout>
            <ToServicesButton text="Learn more" linkTo="/services"/>
        </Section>
     );
}

const ServiceItem = ({service})=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const boxVariant = isOpen && BoxMotion
    return (
        <ServiceCategory layout onClick={toggleOpen} variants={boxVariant} initial="close" animate="open" exit="close">
            <div className="title">
            {isOpen && service.icon && <img src={service.icon} alt={`icon for ${service.category} services`}/>}
            <motion.h5 layout>{service.category}</motion.h5>
            </div>
            <AnimatePresence>
                {isOpen && <motion.p layout variants={TextMotion} initial="close" animate="open" exit="close">{service.services}</motion.p>}
            </AnimatePresence>
        </ServiceCategory>
    )
}


const TextMotion = {
    close: {
        opacity: 0,
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeInOut'
        }
    }, 
    open: {
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}
const BoxMotion = {
    close: {
        backgroundColor: '#485987',
        color: '#FFFEFE',
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeInOut'
        }
    },
    open: {
        backgroundColor: '#FFFEFE',
        color: '#364975',
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}


const TextBlock = styled(LeftSideText)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ServiceAccordion = styled(motion.ul)`
    grid-column: 7 / span 4;
    @media ${props => props.theme.breakpoints.large} {
        grid-column: 7 / span 5;
    }
    @media ${props => props.theme.breakpoints.medium} {
        grid-column: 4 / span 3;
    }
`
const ServiceCategory = styled(motion.li)`
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    margin-bottom: 1rem;
    border-radius: 0.5em;
    list-style: none;
    cursor: pointer;
    background-color: ${props => props.theme.colors.white100};
    /* color: ${props => props.theme.colors.primary900}; */
    .title {
        display: flex;
        align-items: center;
        img {
            margin-right: 1rem;
        }
    }
    p {
        margin-top: 1rem;
    }
`
const ToServicesButton = styled(Button)`
    grid-column: 3 / span 3;
    @media ${props => props.theme.breakpoints.large} {
        grid-column: 2 / span 3;
        }
    @media ${props => props.theme.breakpoints.medium} {
        grid-column: 1 / span 3;
        }
`
 
export default ServiceSection;