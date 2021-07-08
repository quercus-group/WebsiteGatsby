import React from 'react';
import styled from 'styled-components'; 
import {Link} from 'gatsby'

const NavigationLinks = () => {
    return ( 
        <Navigation>
            <ul >
                <li >
                    <Link to="/projects" className='nav-link' activeClassName='active-nav'>Projects</Link>
                </li>
                <li >
                    <Link to="/about" className='nav-link' activeClassName='active-nav'>About</Link>
                </li>
                <li >
                    <Link to="/contact" className=" nav-link contact_cta" activeClassName='active-nav'>Contact</Link>
                </li>
            </ul>
        </Navigation>
     );
}

const Navigation = styled.nav`
    ul {
        display: flex;
        list-style: none;
    }
    li {
        margin-left: clamp(2rem,2vw, 3rem);
        padding-bottom: 0.2rem;
        text-transform: uppercase;
        font-weight: 400;
        .nav-link {
            color: ${props => props.theme.colors.primary900};
        }
        .active_nav {
            color: ${props => props.theme.colors.secondary700};
            font-weight: 700;
        }
    }
    @media screen and (max-width: 56rem){
        display: none;
        pointer-events: none;
    }
`
 
export default NavigationLinks;