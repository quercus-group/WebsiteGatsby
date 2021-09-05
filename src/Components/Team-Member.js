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
        /* font-size: 1.25rem; */
        font-size: clamp(1rem, 1.339vw, 1.25rem);
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
        margin-left: 2rem;
    }
    .profileImage {
        border-radius: 50%;
        aspect-ratio: 1;
        max-height: 11rem;
        width: 33%;
    }
    @media screen and (max-width: 68rem){
        grid-column: span 4;
    }
    @media screen and (max-width: 56rem){
        p.position {
            margin-bottom: 0.5rem;
        }
        .details {
            justify-content: flex-start;
        }
    }
    @media screen and (max-width: 48rem){
        grid-column: span 3;
    }
`

export default TeamMember;