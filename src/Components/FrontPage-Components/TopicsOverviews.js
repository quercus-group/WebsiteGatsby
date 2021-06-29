import React from 'react';
import styled from 'styled-components'


const TopicsOverview = () => {
    const topics = ['Water & Sanitation', 'Sustainable Urban Development', 'Waste Management & Circular Economy', 'Cleantech', 'Sustainable Trade', 'Inclusive Business', 'Mobility', 'Climat Smart Agriculture', 'Regional Economic Development', 'Human Development']
    return ( 
        <TopicsContainer>
            {topics.map(topic => (
                <div key={topic}>
                    <h4>{topic}</h4>
                </div>
            ))}
        </TopicsContainer>
     );
}

const TopicsContainer = styled.div`
    grid-column: 1 / span 12;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div {
        background-color: ${props => props.theme.colors.white100};
        border-radius: 0.5rem;
        padding: 0.5em 0.8em;
        margin: 0.5rem 1rem 1rem 0.5rem;
        box-shadow: 0 0.3rem 0.5rem 0rem rgba(0, 0, 0, 0.15);
        border: 0.1rem solid ${props => props.theme.colors.white300};
    }
    h4 {
        font-size: 1.125rem;
        font-weight: 400;
    }
    @media screen and (max-width: 56rem){
        grid-column: 1 / span 8;
    }
    @media screen and (max-width: 40rem){
        grid-column: 1 / span 6;
        justify-content: flex-start;
        div {
            margin: 0.5rem 0.5rem 0.5rem 0rem;
        }
    }
`
 
export default TopicsOverview;