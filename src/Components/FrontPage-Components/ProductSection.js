import React from 'react';
import styled from 'styled-components';
import Products from '../../Data/products';
import ProductCard from './ProductCard';
import TopicsOverview from './TopicsOverviews';


const ProductSection = () => {
     return ( 
        <SectionContainer>
            <h2 className='sectionTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className='sectionSubtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur mollitia quae dolore minima ad vero ipsam quisquam obcaecati, aperiam maiores.</p>
            {
                Products.map(product => (
                    <ProductCard 
                        title={product.title}
                        teaser={product.teaser}
                        icon={product.icon}
                        key={product.title}
                    />
                ))
            }
            <p className="topicIntro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quod ea repellat ex blanditiis, harum animi eveniet, quaerat, aperiam perferendis quasi necessitatibus impedit voluptates inventore earum illum veritatis</p>
            <TopicsOverview/>
            <BigStatement>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, architecto eos. Laborum, aliquam! Deleniti, voluptatem!
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