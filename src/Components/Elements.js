import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Section = styled.section`
    grid-column: 2 / span 12;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 4.5rem));
    grid-column-gap: 2rem;
    grid-template-rows: max-content;
    grid-row-gap: 4rem;
    padding: 8rem 0;
`

export const SectionTitle = styled.h2`
    grid-column: 3 / span 8;
`

export const SectionText = styled.div`
    grid-column: 3 / span 8;
`
export const GridPicture = styled(motion.div)`
    border-radius: 0.5rem;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    position: relative;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`
export const Overlay = styled(motion.div)`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: ${props => props.theme.colors.blue2tr};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.neutral900};
    text-align: center;
    cursor: pointer;
`

export const Question = styled.p`
    grid-column: 2 / span 10;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
`
