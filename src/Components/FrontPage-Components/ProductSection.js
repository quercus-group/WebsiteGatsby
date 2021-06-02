import React from 'react';
import styled from 'styled-components';
import Products from '../../data/products';
import ProductCard from './ProductCard';
import TopicsOverview from './TopicsOverviews';


const ProductSection = () => {
     return ( 
        <SectionContainer>
            <h2 className='sectionTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className='sectionSubtitle'>Quercus Group employs a combination of approaches, methods and practices aimed to advance sustainability, collaboration and innovation.  Our services help get a better understanding of what is going on, how to navigate rapid, far-reaching and unprecedented changes in all aspects of society and how to create effective change by doing it in partnership.</p>
            {
                Products.map(product => (
                    <ProductCard 
                        title={product.title}
                        teaser={product.teaser}
                        icon={product.icon}
                        key={product.id}
                    />
                ))
            }
            <p className="topicIntro">We are not bound by the topic and seek synergies across sectors and themes. Our focus is driven by the challenge and its unique context. In past and recent projects, we tackled issues related to&hellip;</p>
            <TopicsOverview/>
            <BigStatement>
                A single project can be the beginning of a systemic shift. We help making changes beyond mere optimization.
            </BigStatement>
        </SectionContainer>
     );
}
 
export default ProductSection;

const SectionContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 4.5rem));
    grid-column-gap: 2rem;
    margin-top: 6rem;
    h2 {
        font-size: 2rem;
        width: 80%;
    }
    p {
        font-size: 1.25rem;
        line-height: 1.5;
    }
    .sectionTitle {
        grid-column: 4 / span 7;
        margin-bottom: 2rem;
        font-weight: 700;
        text-align: center;
    }
    .sectionSubtitle {
        grid-column: 3 / span 8;
        margin-bottom: 4.5rem;
        text-align: center;
    }
    .topicIntro {
        grid-column: 3 / span 8;
        margin: 4.5rem 0 3rem 0;
        text-align: center;
    }
`
const BigStatement = styled.h4`
    font-size: 3rem;
    color: ${props => props.theme.colors.secondary700};
    font-weight: 900;
    text-align: center;
    margin: 8rem 0rem;
    grid-column: 3 / span 8;
`