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
                        <Link to="/services" activeClassName="active_nav">Services</Link>
                    </li>
                    <li>
                        <Link to="/company" activeClassName="active_nav">Company</Link>
                    </li>
                    <li>
                        <Link to="/team" activeClassName="active_nav">Team</Link>
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
        margin-left: 5rem;
        padding-bottom: 0.2rem;
        
    }
    .contact_cta {
        color: ${props => props.theme.colors.yellow1};
        font-weight: 900;
    }
`

const LogoImage = styled.img`
    max-width: 12.5rem;
`

export default Header