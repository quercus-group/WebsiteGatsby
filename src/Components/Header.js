import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../images/QuercusGroupLogo.svg'
import {Link} from 'gatsby'
import { IconMenu2 } from '@tabler/icons'
import ToggleMenu from './ToggleMenu';

const Header = ()=>{
    
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenuHandler = ()=> {
        setIsOpen(!isOpen)
    }
    console.log(isOpen)
    return (
        <HeaderContainer>
            <Link to="/">
                <LogoImage src={Logo} alt="Quercus Group Logo"/>
            </Link>
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
            {
                <button className='menu-button' onClick={toggleMenuHandler} >
                    <IconMenu2 size={32}/>
                </button>
            }
            <ToggleMenu cname={ isOpen ? 'open-menu' : 'close-menu'} toggleMenuHandler={toggleMenuHandler}/>
        </HeaderContainer>
    )
}

export default Header

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
    @media screen and (max-width: 56rem){
        grid-column: 2 / span 8;
        padding: 1rem 0;
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

const Navigation = styled.nav`
    ul {
        display: flex;
        list-style: none;
    }
    li {
        margin-left: clamp(2rem,3vw, 4rem);
        padding-bottom: 0.2rem;
        text-transform: uppercase;
        font-weight: 400;
        .nav-link {
            color: ${props => props.theme.colors.primary500};
            font-size: 1.125rem;
            font-weight: 700;
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

