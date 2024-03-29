import React from 'react'
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Hero from './Hero';
import ProductSection from './ProductSection';

const FrontPage = () => {
    return (
        <> 
            <Hero/>
            <ProductSection/>
            <AboutSection/>
            <ContactSection/>
        </>
     );
}

export default FrontPage;