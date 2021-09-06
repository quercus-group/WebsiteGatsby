import React from 'react';
import styled from 'styled-components';

const GridContainer  = ({className, children}) => {
    return ( <StyledGridContainer className={className}>{children}</StyledGridContainer> );
}

const StyledGridContainer = styled.section`
    margin-top: 5vh;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 4.5rem));
    grid-gap: 0rem 2rem;
    @media screen and (max-width: 68rem){
        grid-template-columns: repeat(8, minmax(0, 6rem));
    }
    @media screen and (max-width: 48rem){
        grid-template-columns: repeat(6, 1fr);
    }
`

export default GridContainer;