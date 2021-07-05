import React from 'react';
import styled from 'styled-components'; 
import {Link} from 'gatsby'

const NavigationLinks = ({isOpen}) => {
    const navClass = !isOpen ? 'standard-nav' : 'popup-nav'
    const activeClass = !isOpen ? 'active_nav' : 'active_pop_nav'
    const ulClass = !isOpen ? 'standard-ul' : 'popup-ul'
    const liClass = !isOpen ? 'standard-li' : 'popup-li'
    return ( 
        <Navigation className={navClass}>
            <ul className={ulClass}>
                <li className={liClass}>
                    <Link to="/projects" className='nav-link' activeClassName={activeClass}>Projects</Link>
                </li>
                <li className={liClass}>
                    <Link to="/about" className='nav-link' activeClassName={activeClass}>About</Link>
                </li>
                <li className={liClass}>
                    <Link to="/contact" className=" nav-link contact_cta" activeClassName={activeClass}>Contact</Link>
                </li>
            </ul>
        </Navigation>
     );
}

const Navigation = styled.nav`
    .standard-ul {
        display: flex;
        list-style: none;
    }
    .standard-li {
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