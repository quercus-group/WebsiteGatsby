import React from 'react';
import styled from 'styled-components';
import { ArrowNarrowRight } from 'tabler-icons-react';

const ProductCard = ({title, teaser, icon}) => {
    return ( 
        <Card className="product" >
            {icon}
            <h2>{title}</h2>
            <p>{teaser}</p>
            <ArrowNarrowRight className='arrow'/>
            <div className="slider"></div>
        </Card>
     );
}

const Card = styled.div`
    grid-column: span 4;
    border: 0.1rem solid ${props => props.theme.colors.white300};
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    padding: 2rem;
    box-shadow: 0 0.3rem 0.5rem 0rem rgba(0, 0, 0, 0.15);
    min-height: 26rem;
    display: grid;
    grid-template-rows: repeat(3, 27%) 19%;
    position: relative;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    cursor: pointer;
    h2 {
        width: 10ch;
        transition: color 0.5s ease-in-out;
        z-index: 2;
    }
    p {
        transition: color 0.5s ease-in-out;
        z-index: 2;
    }
    svg {
        width:5rem;
        height: 5rem;
        transition: stroke 0.5s ease-in-out;
        z-index: 2;
        &.icon {
        stroke-width: 1;
        stroke: ${props => props.theme.colors.secondary700};
        justify-self: flex-end;
        }
        &.arrow {
            stroke: ${props => props.theme.colors.primary100};
            stroke-width: 1;
            align-self: flex-end;
            width:4rem;
            height: 4rem;
        } 
    }
    &:hover {
        transform: scale(1.02);
    }
    &:hover svg {
        stroke: ${props => props.theme.colors.white100};
    }
    &:hover h2, &:hover p {
        color: ${props => props.theme.colors.white100};
    }
    .slider {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color:${props => props.theme.colors.highlight600};
        transition: clip-path 0.75s ease-in-out;
        clip-path: circle(0% at 50% 100%);
    }
    &:hover .slider {
        clip-path: circle(150% at 50% 100%);
    }
`
 
export default ProductCard;

