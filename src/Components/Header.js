import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../images/QuercusGroupLogo.svg'
import {Link} from 'gatsby'
import { IconMenu2 } from '@tabler/icons'
import NavigationLinks from './NavigationLinks'
import ToggleMenu from './ToggleMenu'

const Header = ()=>{
    const [open, setOpen] = useState(false)
    const openMenuHandler = ()=>{
        setOpen(!open)
    }

    return (
        <HeaderContainer>
            <Link to="/">
                <LogoImage src={Logo} alt="Quercus Group Logo"/>
            </Link>
            <NavigationLinks/>
            {
                <button className='menu-button' onClick={openMenuHandler}>
                    <IconMenu2 size={32}/>
                </button>
            }
            {open ? <ToggleMenu openMenuHandler={openMenuHandler}/> : null }
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