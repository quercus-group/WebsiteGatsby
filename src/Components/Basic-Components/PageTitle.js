import React from 'react';
import styled from 'styled-components';

const PageTitle  = ({children}) => {
    return ( <StyledPageTitle>{children}</StyledPageTitle> );
}

const StyledPageTitle = styled.h1`
    grid-column: 4  / span 6;
    font-size: 3.5rem;
    line-height: 1.3;
    font-weight: 900;
    text-align: center;
    margin-bottom: 3rem;
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

export default PageTitle;