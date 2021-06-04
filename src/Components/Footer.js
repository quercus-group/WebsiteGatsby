import React from 'react'
import styled from 'styled-components'
import {Link, useStaticQuery, graphql} from 'gatsby'


const Footer = ()=>{
    const offices = useStaticQuery(graphql`
        query offices {allContentfulOfficeAddress {edges {node {id office street zip city country}}}}
    `)
    return (
        <FooterContainer>
            <Line/>
            <Cta>
                <h3>Let’s create something great <span>together</span>!</h3>
            </Cta>
            <Addresses>
                {offices.allContentfulOfficeAddress.edges.map((edge)=>(
                    <div key={edge.node.id}>
                        <h3>{edge.node.office}</h3>
                            <address>
                                {edge.node.street} <br/>
                                {edge.node.zip} {edge.node.city},{edge.node.country}
                            </address>
                    </div>
                            

                ))}
            </Addresses>
            <SocialMedia>
                <h3>Connect & Follow Us</h3>
                <div className="social_media_links">
                    <a href="https://www.linkedin.com/company/4999506/admin/" title="Official Quercus Group Account on Linkedin">Linkedin</a>
                    <a href="https://twitter.com/QuercusGroup" title="Official Quercus Group Account on Twitter">Twitter</a>
                    <a href="https://medium.com/@quercus_group" title="Offical Quercus Group Blog on Medium">Medium</a>
                    </div>
            </SocialMedia>
            <Disclaimer>
                <Link style={{color: '#2C2D48'}}to="/">Privacy Policy</Link>
                <p> &copy;{new Date().getFullYear()} Quercus Group.</p>
            </Disclaimer>
            </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    grid-column: 1 / span 14;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.5rem)) 1fr;
    grid-column-gap: 2rem;
    margin: 0 1rem 1rem 1rem;
    padding: 2rem 0rem;
    color: ${props => props.theme.colors.primary900};
    h3 {
        color: ${props => props.theme.colors.primary900};
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
`
const Line = styled.div`
    grid-column: 2 / span 12;
    height: 0.05rem;
    background-color: ${props => props.theme.colors.primary900};
    margin-bottom: 4rem;
`
const Cta = styled.div`
    grid-column: 2 / span 4;
    h3 {
        font-size: 2rem;
    }
    span {
        color: ${props => props.theme.colors.highlight600}
    }
`
const Addresses = styled.div`
    grid-column: span 4;
    h3 {
        margin-bottom: 0rem;
    }
    address {
        font-style: normal;
        margin-bottom: 1rem;
        line-height: 1.5;
        color: ${props => props.theme.colors.primary700};
    }
`
const SocialMedia = styled.div`
    grid-column: span 4;
    a {
        color: ${props => props.theme.colors.secondary700};
        font-size: clamp(1.44rem, 1.73vw,1.563rem);
        font-weight: 700;
        line-height: 1.5;
    }
    .social_media_links {
        display: flex;
        flex-direction: column;
    }
` 
const Disclaimer = styled.div`
    grid-column: 2 / span 12;
    margin-top: 4rem;
    padding-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
        margin-bottom: 0;
        line-height: 0;
    }
    * {
        margin-left: 2rem;
    }
`


export default Footer