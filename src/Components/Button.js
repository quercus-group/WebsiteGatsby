import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const Button = ({text, linkTo, className, arrowDirection, arrowColor}) => {
    return (
        <Link to={linkTo} initial="rest" animate="rest" whileHover="hover" className={className}>
            <StyledButton variants={HoverMotion} initial="rest" animate="rest" whileHover="hover" className="specificStyles">
                {text}
            {(arrowDirection === 'down')? <ArrowDown/> : <ArrowRight arrowColor={arrowColor}/> } 
            </StyledButton>
        </Link> 
     );
}

const ArrowRight = ({arrowColor})=>{
    const strokeColor = arrowColor ? arrowColor : "#364975";
    return (
    <motion.svg variants={SVGMotion} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke={strokeColor} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
                </motion.svg>
    );
}

const ArrowDown = ()=>{
    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg"  width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#364975" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="16" y1="15" x2="12" y2="19" />
        <line x1="8" y1="15" x2="12" y2="19" />
        </motion.svg>
    )
}

const StyledButton = styled(motion.button)`
    width: max-content;
    background: ${props => props.theme.colors.neutral900};
    border: 0.1rem solid ${props => props.theme.colors.blue4};
    border-radius: 0.5em;
    padding: 0.5em 1em;
    text-align: left;
    font-size: 1rem;
    color: ${props => props.theme.colors.blue1};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        margin-left: 1.5vw;
    }
`

const HoverMotion = {
    rest: {
        boxShadow: '0 0 0.0rem rgba(178, 188, 214, 0.5)',
        transition: {
            duration: 0.3,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        boxShadow: '0 0.2rem 0.2rem rgba(178, 188, 214, 0.5)',
        transition: {
            duration: 0.3,
            type: "tween",
            ease: "easeIn"
        }
    }
}
const SVGMotion = {
    rest: {
        x: 0,
        transition: {
            duration: 0.3,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        x: 5,
        transition: {
            duration: 0.3,
            type: "tween",
            ease: "easeIn"
        }
    }
}
 
export default Button;