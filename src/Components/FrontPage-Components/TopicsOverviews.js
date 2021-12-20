import React from 'react';
import styled from 'styled-components'


const TopicsOverview = () => {
    const topics = ['Water & Sanitation', 'Sustainable Urban Development', 'Waste Management & Circular Economy', 'Cleantech', 'Sustainable Trade', 'Inclusive Business', 'Mobility', 'Climate Smart Agriculture', 'Regional Economic Development', 'Human Development']
    return ( 
        <TopicsContainer>
            {topics.map(topic => (
                <span key={topic}>
                    {topic}
                </span>
            ))}
        </TopicsContainer>
     );
}

const TopicsContainer = styled.div`
    grid-column: 1 / span 12;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    span {
        display: inline-flex;
        vertical-align: top;
        -webkit-box-align: center;
        align-items: center;
        max-width: 100%;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.2;
        outline: transparent solid 2px;
        outline-offset: 2px;
        border: 0.1rem solid ${props => props.theme.colors.white300};
        box-shadow: 
            0 .0625rem .1875rem 0rem rgba(0, 0, 0, 0.1),
            0 .0625rem .125rem -0.125rem rgba(0, 0, 0, 0.06);
        min-height: 2rem;
        min-width: 2rem;
        border-radius: 0.375rem;
        padding-inline-start: 0.75rem;
        padding-inline-end: 0.75rem;
        margin: 0.5rem 1rem 1rem 0.5rem;
        background: ${props => props.theme.colors.white100};
        color: ${props => props.theme.colors.primary900};
    }
    @media screen and (max-width: 56rem){
        grid-column: 1 / span 8;
    }
    @media screen and (max-width: 40rem){
        grid-column: 1 / span 6;
        justify-content: flex-start;
        span {
            margin: 0.5rem 0.5rem 0.5rem 0rem;
        }
    }
`
 
export default TopicsOverview;

