import React from 'react';
import styled from 'styled-components';

const BigStatement  = ({children}) => {
    return ( <StyledBigStatement>{children}</StyledBigStatement> );
}

const StyledBigStatement = styled.h4`
font-size: 3rem;
color: ${props => props.theme.colors.secondary700};
font-weight: 900;
text-align: center;
margin: 4.5rem 0rem;
grid-column: 3 / span 8;
@media screen and (max-width: 68rem){
    grid-column: 2 / span 6;
}
@media screen and (max-width: 56rem){
    grid-column: 1 / span 8;
}
@media screen and (max-width: 48rem){
    grid-column: 1  / span 6;
}
@media screen and (max-width: 40rem){
    grid-column: 1 / span 6;
    text-align: left;
    margin: 4.5rem 0;
    font-size: 2.5rem;
}
`

export default BigStatement;