import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components'

const TeamMember = ({firstName, lastName, email, phone, profileImage, position}) => {
    return ( 
        <TeamMemberContainer>
            <GatsbyImage className='profileImage' image={profileImage.gatsbyImageData} alt={`${firstName} ${lastName} from Quercus Group.`}/>
            <div className="details">
                <h4>{firstName} {lastName}</h4>
                <p className='position'>{position}</p>
                <p className='email'>{email}</p>
                <p className='phone'>{phone}</p>
            </div>
        </TeamMemberContainer>
     );
}

const TeamMemberContainer = styled.div`
    grid-column: span 6;
    margin-bottom: 2rem;
    display: flex;
    /* grid-template-columns: repeat(6, minmax(0, 4.5rem));
    grid-column-gap: 2rem; */
    h4 {
        font-size: 1.25rem;
        font-weight: 700;
    }
    p {
        margin: 0;
        line-height: 1.5;
        font-size: 1.125rem;
        &.phone, &.email {
            color: ${props => props.theme.colors.secondary700};
        }
        &.position {
            
            /* margin-bottom: 1rem; */
            /* min-height: 3.5rem; */
        }
    }
    h4, p {
        text-align: left;
    }
    .details {
        grid-column: 3 / span 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 66%;
        margin-left: 2rem;
        
    }
    .profileImage {
        border-radius: 50%;
        /* max-width: 33%; */
        width: clamp(8rem, 33%, 11rem);
        aspect-ratio: 1;
        grid-column: 1 / span 2;
    }
    @media screen and (max-width: 68rem){
        grid-column: span 4;
    }
    @media screen and (max-width: 56rem){
        flex-direction: column;
        .profileImage {
            margin-bottom: 1rem;
        }
        .details {
            justify-content: flex-start;
            margin-left: 0rem;
        }
    }
    @media screen and (max-width: 48rem){
        grid-column: span 6;
        flex-direction: row;
        .profileImage {
            margin-bottom: 0rem;
        }
        .details {
            margin-left: 2rem;
        }
    }
    @media screen and (max-width: 32rem){
        flex-direction: column;
        .profileImage {
            margin-bottom: 1rem;
        }
        .details {
            margin-left: 0rem;
        }
    }
`

export default TeamMember;