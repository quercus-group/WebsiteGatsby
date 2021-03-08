import React, {useState} from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';


const Form = ({className}) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [organization, setOrganization] = useState('')
    const [message, setMessage] = useState('')
    const portalId =  "8499028"
	const formId =  '0764f8e0-a58c-4944-9407-265ea6bcda13'
   

    const submitHandler = (e)=>{
        e.preventDefault()
        const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`
        setLoading(true);

        const body = {
            "submittedAt": Date.now(),
            "fields": [
              {
                "name": "firstname",
                "value": firstname
              },
              {
                "name": "lastname",
                "value": lastname
              },
              {
                "name": "email",
                "value": email
              },
              {
                "name": "company",
                "value": organization
              },
              {
                "name": "message",
                "value": message
              },
            ],
            "context": {
              "pageUri": "https://quercus-group.com/contact",
              "pageName": "Quercus Group"
            },
        }

        fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: new Headers({
              'Content-Type': 'application/json',
              Accept: 'application/json, application/xml, text/plain, text/html, *.*',
            }),
          })
            .then(res => res.json())
            .then(() => {
              setSuccess(true);
              setError(false);
              setLoading(false);
              setFirstname('');
              setLastname('');
              setMessage('');
            })
            .catch(err => {
              setSuccess(false);
              setError(err);
              setLoading(false);
            });
        

    }

     return (
        <ContactForm className={className} required onSubmit={submitHandler}>
           <div id="name">
                <label id="firstname" htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" value={firstname} onChange={e => setFirstname(e.target.value)}/>
           </div>
           <div id="name">
                <label id="lastname" htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" value={lastname} onChange={e => setLastname(e.target.value)}/>
           </div>
           <div className="email">
                <label id="Email" htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
           </div>
           <div className="organization">
           <label id="organization" htmlFor="organization">Organization</label>
                <input type="text" id="organization" value={organization} onChange={e => setOrganization(e.target.value)} />
           </div>
           <div className="message">
           <label id="message" htmlFor="message">Message</label>
                <textarea type="text" id="message" value={message} onChange={e => setMessage(e.target.value)}/>
           </div>
           <SubmitButton>Send</SubmitButton>
        </ContactForm>        
    );
}

const ContactForm = styled.form`
    padding: 2rem 2rem;
    width: 100%;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
    border-radius: 0.5em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 2rem;
    div {
        display: flex;
        flex-direction: column;
    }
    .email, .organization, .message {
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