import React from 'react';
import styled from 'styled-components';

const BasicProductCard = ({title, teaser, icon}) => {
    return ( 
        <Card className="product" >
            {icon}
            <h2>{title}</h2>
            <p>{teaser}</p>
        </Card>
     );
}

const Card = styled.div`
    grid-column: span 6;
    display: grid;
    grid-template-rows: repeat(2, max-content);
    grid-template-columns: max-content auto;
    grid-gap: 0.5rem 2rem;
    min-height: fit-content;
    padding: 1rem 0rem;
    svg {
        width: 4.5rem;
        height: 4.5rem;
        &.icon {
            stroke-width: 1;
            stroke: ${props => props.theme.colors.secondary700};
            justify-self: flex-start;
            grid-row: 1 / span 2;
        }
    }
    @media screen and (max-width: 56rem){
        grid-column: span 4;
        grid-column-gap: 1rem;
        svg {
            width: 4rem;
            height: 4rem;
        }
    }
    @media screen and (max-width: 40rem){
        grid-column: span 6;
        border-bottom: 0.1rem solid ${props => props.theme.colors.white500};
    }
    
`

export default BasicProductCard