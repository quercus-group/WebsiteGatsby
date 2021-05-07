import React from 'react'
import styled from 'styled-components'
import Logo from '../images/QuercusGroupLogo.svg'
import {Link} from 'gatsby'

const Header = ()=>{
 

    return (
        <HeaderContainer>
            <Link to="/">
                <LogoImage src={Logo} alt="Quercus Group Logo"/>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/projects" activeClassName="active_nav">Projects</Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active_nav">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="contact_cta" activeClassName="active_nav">Contact</Link>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    grid-column: 1 / span 14;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    ul {
        display: flex;
        list-style: none;
    }
    li {
        margin-left: 2vw;
        padding-bottom: 0.2rem;
        text-transform: uppercase;
        font-weight: 400;
    }
    @media ${props => props.theme.breakpoints.medium} {
        grid-column: 1 / span 8;
        nav {
            display: none;
        }
    }
`

const LogoImage = styled.img`
    max-width: 12.5rem;
`

export default Header