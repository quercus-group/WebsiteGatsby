import React from 'react'
import styled from 'styled-components'

const Button = ({buttonText})=>{
    return (
        <StyledButton>{buttonText}</StyledButton>
    )
}

const StyledButton = styled.button`
    background: 0;
    border-radius: 5px;
    border: solid 0.1rem ${props => props.theme.colors.secondary500};
    padding: 0.75em 6em 0.75em 2em;
    color: ${props => props.theme.colors.secondary500};
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 2rem;
`

export default Button