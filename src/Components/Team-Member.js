import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components'

const TeamMember = ({firstName, lastName, email, phone, profileImage, position, officeLocation}) => {
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
    /* border: 0.1rem solid black; */
    h4 {
        font-size: 1.25rem;
        font-weight: 700;
    }
    p {
        line-height: 1.5;
        margin: 0;
        &.position {
            margin-bottom: 1rem;
        }
        &.phone, &.email {
            color: ${props => props.theme.colors.secondary700};
        }
    }
    .details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: clamp(0.5rem, 2.223vw, 2rem);
    }
    .profileImage {
        border-radius: 50%;
        aspect-ratio: 1;
        max-height: 11rem;
    }
    @media screen and (max-width: 68rem){
        grid-column: span 4;
    }
    @media screen and (max-width: 64.125rem){
        flex-direction: column;
        align-items: center;
        .details {
            justify-content: flex-start;
            align-items: center;
            margin: 1rem 0 0 0;
        }
        .profileImage {
            /* max-height: 9rem; */
        }
    }
    @media screen and (max-width: 56rem){
        p.position {
            margin-bottom: 0.5rem;
        }
    }
    @media screen and (max-width: 48rem){
        grid-column: span 6;
        flex-direction: row;
        justify-content: center;
        .details {
            align-items: flex-start;
            margin: 0 0 0 2rem;
        }
    }
    @media screen and (max-width: 40rem){
        grid-column: span 6;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        border-bottom: 0.1rem solid ${props => props.theme.colors.white500};
        padding-bottom: 2rem;
        .profileImage {
            max-height: 9rem;
        }
    }
    @media screen and (max-width: 32rem){
        
        .profileImage{
            max-height: 7.5rem;
        }
        .details {
            margin-left: 1.5rem;
        }
        p.position, p.email, p.phone {
            font-size: 1.125rem
        }
    }
`

export default TeamMember;