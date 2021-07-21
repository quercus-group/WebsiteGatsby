import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components'

const TeamMember = ({firstName, lastName, email, phone, profileImage, position}) => {
    return ( 
        <TeamMemberContainer>
            <GatsbyImage className='profileImage' image={profileImage.gatsbyImageData} alt={`${firstName} ${lastName} from Quercus Group.`}/>
            <h4>{firstName} {lastName}</h4>
            <p className='position'>{position}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </TeamMemberContainer>
     );
}

const TeamMemberContainer = styled.div`
    
    h4 {
        margin-top: 1.5rem;
        font-size: 1.5rem;
        font-weight: 700;
    }
    p {
        margin: 0;
        line-height: 1.5;
        &.position {
            /* margin-bottom: 1rem; */
            min-height: 4.375rem;
        }
    }
    h4, p {
        text-align: center;
    }
    .profileImage {
        border-radius: 50%;
        max-width: 17.5rem;
        transform: scale(0.9);
    }
`

export default TeamMember;