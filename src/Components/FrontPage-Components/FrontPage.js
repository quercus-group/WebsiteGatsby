import React from 'react'
import Seo from '../SEO';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Hero from './Hero';
import ProductSection from './ProductSection';

const FrontPage = () => {
    return (
        <> 
            <Seo/>
            <Hero/>
            <ProductSection/>
            <AboutSection/>
            <ContactSection/>
        </>
     );
}

export default FrontPage;