import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../images/QuercusGroupLogo.svg'
import {Link} from 'gatsby'
import { IconMenu2, IconArrowUpRight } from '@tabler/icons'
import NavigationLinks from './NavigationLinks'

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenuHandler = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <HeaderContainer>
            <Link to="/">
                <LogoImage src={Logo} alt="Quercus Group Logo"/>
            </Link>
            <NavigationLinks isOpen={isOpen}/>
            {
                !isOpen && 
                <button 
                    className='menu-button open'
                    name='open-menu-button'
                    onClick={toggleMenuHandler}>
                    <IconMenu2 size={32}/>
                </button>
            } 
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
        &.open svg {
            stroke: ${props => props.theme.colors.primary900};
        }
        .close {
            position: absolute;
            top: 10%;
            right: 10%;
        }
        &.close svg {
            stroke: ${props => props.theme.colors.white50};
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

export default Header