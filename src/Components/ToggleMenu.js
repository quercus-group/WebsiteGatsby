import { IconX } from '@tabler/icons';
import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Link} from 'gatsby'

const ToggleMenu = ({openMenuHandler}) => {
    return ( 
        <ToggleMenuContainer>
            <button onClick={openMenuHandler}>
                <IconX className='icon'/>
            </button>
            <nav>
                <ul>
                    <li >
                        <Link to="/" className='nav-link' activeClassName='active-nav' onClick={openMenuHandler}>Home</Link>
                    </li>
                    <li >
                        <Link to="/projects" className='nav-link' activeClassName='active-nav' onClick={openMenuHandler}>Projects</Link>
                    </li>
                    <li >
                        <Link to="/about" className='nav-link' activeClassName='active-nav' onClick={openMenuHandler}>About</Link>
                    </li>
                    <li >
                        <Link to="/contact" className=" nav-link contact_cta" activeClassName='active-nav' onClick={openMenuHandler}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </ToggleMenuContainer>
     );
}
 
export default ToggleMenu;

const animation = keyframes`
  0% {
    clip-path: circle(0% at 100% 0);
  }

  100% {
    clip-path: circle(150% at 100% 0);
  }
`;

const ToggleMenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.primary900};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: ${animation} 1s ease;
    p {
        color: ${props => props.theme.colors.white50};
    }
    button {
        height: fit-content;
        width: fit-content;
        background: none;
        outline: none;
        border: none;
        margin: 1rem;
        padding: 1rem;
        align-self: flex-end;
    }
    button .icon {
        stroke: ${props => props.theme.colors.white50};
        width: 2rem;
        height: 2rem;
    }
    nav {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        padding: 2rem 2rem;
    }
    nav ul {
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between ;
    }
    nav ul li .nav-link{
        color: ${props => props.theme.colors.white50};
        font-size: 2.5rem;
        font-weight: 900;
        cursor: pointer;
        
    }
    nav ul li {
        text-align: right;
    }
`

