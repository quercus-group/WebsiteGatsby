import React from 'react'
import styled from 'styled-components'
import Logo from '../images/QuercusGroupLogo.svg'
import {Link} from 'gatsby'
import { IconMenu2 } from '@tabler/icons'

const Header = ()=>{
 

    return (
        <HeaderContainer>
            <Link to="/">
                <LogoImage src={Logo} alt="Quercus Group Logo"/>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/projects" className='nav-link' activeClassName="active_nav">Projects</Link>
                    </li>
                    <li>
                        <Link to="/about" className='nav-link' activeClassName="active_nav">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className=" nav-link contact_cta" activeClassName="active_nav">Contact</Link>
                    </li>
                </ul>
            </nav>
            <button className='menu-button'>
                <IconMenu2 size={32}/>
            </button>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    grid-column: 1 / span 14;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    .menu-button {
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        svg {
            stroke: ${props => props.theme.colors.primary900};
        }
    }
    @media screen and (max-width: 83rem){
        padding: 1rem 2rem;
    }
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
    }
    @media screen and (max-width: 56rem){
        grid-column: 2 / span 8;
        padding: 1rem 0;
        nav {
            display: none;
        }
    }
    @media screen and (min-width: 56rem){
        .menu-button {
            display: none;
        }
    }
    @media screen and (max-width: 40rem){
        grid-column: 2 / span 6;
    }
`

const LogoImage = styled.img`
    max-width: 12.5rem;
    @media screen and (max-width: 48rem) {
        max-width: 11rem;
    }
`

export default Header