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
                    <img src={ArrowLeft} alt="Arrow Left" onClick={slideHandler}/>
                    <img src={ArrowRight} alt="Arrow Right" onClick={slideHandler}/>
                </SliderControls>
            </div>
            <motion.div initial={{x: '0'}}animate={controls} className="logo-track">
                {partnerLogos.map(logo => (
                        <div className="logo-container" key={logo.name}>
                                <img src={logo.url} alt={logo.name} />
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
        cursor: pointer;
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
            width: 100%;
            filter: saturate(0%);
            
        }
    }
`
const SliderControls = styled.div`
    display: flex;
`
 
export default PartnerSlider;