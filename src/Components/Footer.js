import React from 'react'
import styled from 'styled-components'
import {Link, useStaticQuery, graphql} from 'gatsby'


const Footer = ()=>{
    const offices = useStaticQuery(graphql`
        query offices {allContentfulOfficeAddress {edges {node {id office street zip city country}}}}
    `)
    return (
        <FooterContainer>
            <CTA>
                <h3>Let’s create something great together!</h3>
            </CTA>
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
                <p> &copy;{new Date().getFullYear()} Quercus Group.</p>
                <Link to="/">Privacy Policy</Link>
                <p>website by Wadim Baslow</p>
                <p>logo designed by Bogna Anna Gebalska</p>
            </Disclaimer>
            </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    grid-column: 1 / span 14;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.5rem)) 1fr;
    column-gap: 2rem;
    background-color: ${props => props.theme.colors.blue2};
    margin: 0 1rem 1rem 1rem;
    padding: 2rem 0rem;
    border-radius: 1rem;
    color: ${props => props.theme.colors.blue4};
    h3 {
        color: ${props => props.theme.colors.neutral900};
        margin-bottom: 1rem;
    }

`

const CTA = styled.div`
    grid-column: 2 / span 4;
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
    }
`
const SocialMedia = styled.div`
    grid-column: span 4;
    a {
        color: ${props => props.theme.colors.yellow1};
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
    border-top: solid 0.1rem ${props => props.theme.colors.blue4};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    * {
        margin-left: 2rem;
    }
`


export default Footer