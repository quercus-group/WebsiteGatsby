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
    @media screen and (min-width: 40rem){
        &:hover {
            transform: scale(1.02);
        }
        &:hover svg {
            stroke: ${props => props.theme.colors.white100};
        }
        &:hover h2, &:hover p {
            color: ${props => props.theme.colors.white100};
        }
        &:hover .slider {
            clip-path: circle(150% at 50% 100%);
        }
    }
    @media screen and (max-width: 68rem){
        grid-column: span 6;
        min-height: 18rem;
        h2 {
            width: 100%;
        }
        svg {
            width: 4rem;
        }
    }
    @media screen and (max-width: 56rem){
        grid-column: span 4;
    }
    @media screen and (max-width: 40rem){
        grid-column: 1 / span 6;
        box-shadow: none;
        border: none;
        border-bottom: 0.1rem solid ${props => props.theme.colors.white500};
        border-radius: 0;
        grid-template-columns: 15% 80%;
        grid-column-gap: 5%;
        grid-template-rows: repeat(2, max-content);
        min-height: fit-content;
        margin-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        h2 {
            margin-bottom: 1rem;
        }
        p {
            margin: 0;
        }
        svg {
            /* width:70%;
            height: 70%; */
            &.icon {
                justify-self: flex-start;
                grid-row: 1 / span 2;
            }
            &.arrow {
                display: none;
            }
        }
    }
`
 
export default ProductCard;

