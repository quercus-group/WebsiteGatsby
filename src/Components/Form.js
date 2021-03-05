import React from 'react';
import styled from 'styled-components';

const Form = ({className}) => {
    return (
        <ContactForm className={className} required>
           <div id="name">
                <label id="firstName">First Name</label>
                <input type="text" id="firstName" />
           </div>
           <div id="name">
                <label id="lastName">Last Name</label>
                <input type="text" id="lastName" />
           </div>
           <div className="organization">
           <label id="organization">Organization</label>
                <input type="text" id="organization" />
           </div>
           <div className="message">
           <label id="message">Message</label>
                <textarea type="text" id="message"/>
           </div>
           <SubmitButton>Send</SubmitButton>
        </ContactForm>        
    );
}

const ContactForm = styled.form`
    padding: 3rem 2rem;
    width: 100%;
    box-shadow: 0 0.2rem 0.2rem ${props => props.theme.colors.blue4};
    border-radius: 0.5em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 2rem;
    div {
        display: flex;
        flex-direction: column;
    }
    .organization, .message {
        grid-column: 1 / span 2;
    }
    label {
        margin-bottom: 0.5rem;
    }
    input, textarea {
        font-size: 1rem;
        padding: 1em;
        border-radius: 0.5em;
        border: 0.1rem solid ${props => props.theme.colors.blue4};
        background: none;
        box-shadow: inset 0 0 0.2rem ${props => props.theme.colors.blue4};
    }
    textarea {
        display: block;
        font-size: 1rem;
        font-family: 'Lato', sans-serif;
        resize: none;
        height: 10vh;
        overflow: auto;
    }
`
const SubmitButton = styled.button`
    grid-column: 2 / span 1;
    font-size: 1rem;
    font-weight: 400;
    width: 75%;
    justify-self: end;
    background: ${props => props.theme.colors.yellow1};
    color:  ${props => props.theme.colors.neutral900};
    border: 0.1rem solid ${props => props.theme.colors.blue4};
    border-radius: 0.5em;
    padding: 1em;
    cursor: pointer;
    box-shadow: 0 0.1rem 0.2rem ${props => props.theme.colors.blue4};
`
 
export default Form;