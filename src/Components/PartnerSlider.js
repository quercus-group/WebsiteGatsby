import React from 'react';
import styled from 'styled-components'
import partnerLogos from '../data/partnerLogos'
import {motion, useAnimation} from 'framer-motion'
import ArrowLeft from '../images/arrow-left.svg';
import ArrowRight from '../images/arrow-right.svg'


const PartnerSlider = () => {
    const controls = useAnimation()
    const slideHandler = (e)=>{
        const direction = e.target.alt
        controls.start({
            x:  direction === 'Arrow Right' ? '-50%' : '0',
            transition: {duration: 0.5, ease: 'easeInOut'}
        })
    }

    return ( 
        <Partner>
            <div className="slider_header">
            <h2>Our partners</h2>
                <SliderControls>
                    <button onClick={slideHandler}><img src={ArrowLeft} alt="Arrow Left" /></button>
                    <button onClick={slideHandler}><img src={ArrowRight} alt="Arrow Right" /></button>
                </SliderControls>
            </div>
            <motion.div initial={{x: '0'}}animate={controls} className="logo-track">
                {partnerLogos.map(logo => (
                        <div className="logo-container" key={logo.name}>
                                <img src={logo.url} alt={logo.name} title={logo.name} />
                        </div>
                    ))
                }
            </motion.div>
            </Partner>
     );
}

const Partner = styled.div`
    grid-column: 1 / span 12;
    overflow-x: hidden;
    .slider_header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        button {
            background: none;
            outline: none;
            border: none;
            cursor: pointer;
        }
    }
    .logo-track {
        margin-top: 2rem;
        width: ${partnerLogos.length * 20 + '%'};
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateX(-50%);
        
    }
    .logo-container {
        width: 20%;
        margin: 0rem 2rem;
        img {
            object-fit: cover;
            width: 90%;
            filter: saturate(0%);
        }
        
    }
    @media ${props => props.theme.breakpoints.medium} {
        grid-column: 1 / span 6;
    }
`
const SliderControls = styled.div`
    display: flex;
`
 
export default PartnerSlider;