import React from 'react';
import styled from 'styled-components';

const PageSubTitle  = ({children}) => {
    return ( <StyledPageSubTitle>{children}</StyledPageSubTitle> );
}

const StyledPageSubTitle = styled.h2`
    grid-column: 4  / span 6;
    grid-row: 2 / span 1;
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    @media screen and (max-width: 68rem){
        grid-column: 2  / span 6;
    }
    @media screen and (max-width: 48rem){
        grid-column: 1  / span 6;
    }
    @media screen and (max-width: 40rem){
        text-align: left;
        font-size: 2.5rem;
    }
`

export default PageSubTitle;