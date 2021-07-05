import { IconArrowRight, IconRotate2, IconX, IconCheck } from '@tabler/icons';
import React from 'react';
import styled from 'styled-components'

const SubmitButton = ({className, loading, error, success}) => {

    const buttontext = loading ? 'Sending' : success ? 'Thank you for writing us.' : error ? 'Oops, something went wrong!' : 'Send'
    return ( 
        <StyledSubButton type='submit' className={className} value='submit'
        sending={loading}
        error={error}
        success={success}
        >
            {buttontext}
            <div className="circle">
                {loading ? <IconRotate2/> : success ? <IconCheck/> : error ? <IconX/> : <IconArrowRight/>}
            </div>
        </StyledSubButton>
     );
}

const StyledSubButton = styled.button`
    border: none;
    outline: none;
    background: none;
    font-size: 1.5rem;
    font-weight: 700;
    pointer-events: ${props => (
        props.sending ? 'none' :
        props.error ? 'none' :
        props.success ? 'none' :
        'auto'
    )};;
    color: ${props => (
        props.sending ? props.theme.colors.highlight700 :
        props.error ? props.theme.colors.red :
        props.success ? props.theme.colors.green :
        props.theme.colors.primary900
    )};
    display: flex;
    align-items: center;
    cursor: pointer;
    .circle {
        height: 2.5rem;
        width: 2.5rem;
        background-color: ${props => (
        props.sending ? props.theme.colors.highlight700 :
        props.error ? props.theme.colors.red :
        props.success ? props.theme.colors.green :
        props.theme.colors.primary900
    )};
        border-radius: 50%;
        margin-left: 1rem;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            stroke: ${props => props.theme.colors.white50};
        }
    }
`
 
export default SubmitButton;