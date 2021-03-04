import React, {useState} from 'react'
import {Layout} from '../Components'
import styled from "styled-components"
import {motion, AnimateSharedLayout, AnimatePresence} from 'framer-motion'
import { Section, SectionTitle } from '../Components/Elements'
import CompanyQuestions from '../data/CompanyQuestions'

const CompanyPage = ()=>{
    return (
        <Layout>
            <Section>
                <SectionTitle>Got questions? Here maybe we can answer ’em.</SectionTitle>
                <LeftSideText>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta tenetur harum expedita similique nobis error sequi, a modi hic esse voluptatem, odit minima molestias consequatur tempora perspiciatis sint ad sit. Tempore illum minus dolore nulla in eos quae et magnam consectetur, natus aspernatur repudiandae sapiente corrupti numquam inventore incidunt culpa corporis, ea voluptas, 
                    </p>
                </LeftSideText>
                <AnimateSharedLayout>
                    <QuestionAccordion layout>
                    {CompanyQuestions.map(question => (
                        <QuestionItem key={question.questions} question={question}/>
                    ))}   
                    </QuestionAccordion>
                </AnimateSharedLayout>
            </Section>
        </Layout>
    )
}

const QuestionItem = ({question})=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Question layout onClick={toggleOpen}>
            <motion.h5 layout>{question.question}</motion.h5>
            <AnimatePresence>
                {isOpen && <motion.p layout variants={TextMotion} initial="close" animate="open" exit="close">{question.response}</motion.p>}
            </AnimatePresence>
        </Question>
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
const LeftSideText = styled.div`
    grid-column: 3 / span 4;
`
const QuestionAccordion = styled(motion.ul)`
grid-column: 7 / span 4;
`
const Question = styled(motion.li)`
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

export default CompanyPage