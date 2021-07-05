import React, {useState} from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import SubmitButton from './Submit-Button';


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
              setLastname('')
              setEmail('')
              setOrganization('');
              setMessage('');
            })
            .catch(err => {
              setSuccess(false);
              setError(err);
              setLoading(false);
            });
        

    }

      return (
        <ContactForm className={className} required onSubmit={submitHandler} data-form-id={formId} data-portal-id={portalId} disabled={loading}>
           <div id="name">
                <label id="firstname" htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} placeholder='Your first name' required/>
           </div>
           <div id="name">
                <label id="lastname" htmlFor="lastname" >Last Name</label>
                <input type="text" id="lastname" value={lastname} onChange={e => setLastname(e.target.value)} placeholder='Your last name' required/>
           </div>
           <div className="email">
                <label id="Email" htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='name@example.com' required/>
           </div>
           <div className="organization">
           <label id="organization" htmlFor="organization">Organization</label>
                <input type="text" id="organization" value={organization} onChange={e => setOrganization(e.target.value)} placeholder='Your organization'/>
           </div>
           <div className="message">
           <label id="message" htmlFor="message">Message</label>
                <textarea type="text" id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder='Type your  message here' required/>
           </div>
           <SubmitButton
            className='submit-button'
            loading={loading}
            error={error}
            success={success}/>
        </ContactForm>        
    );
}

const ContactForm = styled.form`
    padding: 2rem 2rem;
    border-radius: 0.5em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 2rem;
    box-shadow: 0 0.3rem 0.5rem 0rem rgba(0, 0, 0, 0.15);
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .email, .organization, .message {
        grid-column: 1 / span 2;
    }
    label {
      margin-bottom: 1rem;
      font-size: 1.125rem;
    }
    input, textarea {
        font-size: 1rem;
        padding: 1em;
        border-radius: 0.5em;
        border: 0.1rem solid ${props => props.theme.colors.white500};
        background: none;
        transition: background-color 0.3s ease border 0.3s ease;
        :hover {
          background-color: ${props => props.theme.colors.white50};
        }
        :focus, :active {
          outline: none;
          border: 0.1rem solid ${props => props.theme.colors.secondary700};
          background-color: ${props => props.theme.colors.white50};
        }
    }
    textarea {
        display: block;
        font-size: 1rem;
        font-family: 'Lato', sans-serif;
        resize: none;
        height: 10vh;
        overflow: auto;
    }
    .form-message {
      grid-column: 2 / span 1;
      text-align: right;
    }
    .submit-button {
      grid-column: 1 / span 2;
      justify-self: end;
    }
    
`


 
export default Form;