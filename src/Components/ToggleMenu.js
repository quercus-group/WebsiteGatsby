import { IconX } from '@tabler/icons';
import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby'

const ToggleMenu = ({cname, toggleMenuHandler}) => {
    return ( 
        <ToggleMenuContainer className={cname}>
            <button onClick={toggleMenuHandler} className='close-button'>
                <IconX  className='icon'/>
            </button>
            <nav>
                <ul >
                    <li >
                        <Link to="/" className='nav-link' activeClassName='active-nav' onClick={toggleMenuHandler}>Home</Link>
                    </li>
                    <li >
                        <Link to="/projects" className='nav-link' activeClassName='active-nav' onClick={toggleMenuHandler}>Projects</Link>
                    </li>
                    <li >
                        <Link to="/about" className='nav-link' activeClassName='active-nav' onClick={toggleMenuHandler}>About</Link>
                    </li>
                    <li >
                        <Link to="/contact" className=" nav-link" activeClassName='active-nav' onClick={toggleMenuHandler}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </ToggleMenuContainer>
     );
}
 
export default ToggleMenu;


const ToggleMenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1.5rem repeat(8, minmax(auto, 4.5rem)) 1.5rem;
    grid-column-gap: 2rem;
    background-color: ${props => props.theme.colors.primary900};
    transition: transform 0.5s ease;
    &.close-menu {
        transform: translateX(100%);
    }
    &.open-menu {
        transform: translateX(0);
    }
    nav {
        grid-column: 2 / span 8;
        grid-row: 1 / span 2;
        margin: 1rem 0;
        align-self: center;
        justify-self: flex-end;
        height: fit-content;
    }
    ul {
        list-style: none;
        height: fit-content;
    }
    li {
        text-align: right;
        margin-bottom: 2rem;
        .nav-link {
            font-size: 2.5rem;
            color: ${props => props.theme.colors.white100};
            font-weight: 900;
            padding: 1rem 0;
        }
        .active-nav {
            color: ${props => props.theme.colors.secondary500};
        }
    }
    .close-button {
        grid-column: 2 / span 8;
        grid-row: 1 / span 1;
        justify-self: flex-end;
        outline: none;
        background: none;
        border: none;
        height: fit-content;
        margin: 1rem 0;
        padding: 0.5rem;
        .icon {
            width: 2rem;
            height: 2rem;
            stroke:  ${props => props.theme.colors.white100};
        }
    }
    @media screen and (min-width: 56rem){
        display: none;
        pointer-events: none;
    }
    @media screen and (max-width: 40rem){
        grid-template-columns: 0.5rem repeat(6, minmax(auto, 4.5rem)) 0.5rem;
        nav {
        grid-column: 2 / span 6;
        }
        .close-button {
        grid-column: 2 / span 6;
        }
    }
`

