import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components'

const LightButton = ({buttonText, linkTo, className}) => {
    return ( 
        <Button to={linkTo} className={className}>
            {buttonText}
            <div className="circle">
                <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke='#ffffff' fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
            </div>
        </Button>
     );
}

const Button = styled(Link)`
    border: none;
    outline: none;
    background: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.highlight600};
    display: flex;
    align-items: center;
    .circle {
        height: 2.5rem;
        width: 2.5rem;
        background-color: ${props => props.theme.colors.highlight600};
        border-radius: 50%;
        margin-left: 1rem;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
 
export default LightButton;