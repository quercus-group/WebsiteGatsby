import React from 'react'
import styled from 'styled-components'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {Button} from './index'

const Footer = ()=>{
    const offices = useStaticQuery(graphql`
        query offices {allContentfulOfficeAddress {edges {node {id office street zip city country}}}}
    `)
    return (
        <FooterContainer>
            <FooterContent>
                <div className="footer_main">
                    <div className="contact_part">
                        <h3>Let’s create something great together!</h3>
                        <Button buttonText="Get in touch"/>
                    </div>
                    <div className="addresses">
                        {offices.allContentfulOfficeAddress.edges.map((edge)=>(
                            <div id={edge.node.id}>
                                <h3>{edge.node.office}</h3>
                                <address>
                                    {edge.node.street} <br/>
                                    {edge.node.zip} {edge.node.city},{edge.node.country}
                                </address>
                            </div>
                            

                        ))}
                    </div>
                    <div className="social_media">
                        <h3>Connect & Follow Us</h3>
                        <div className="social_media_links">
                        <a href="https://www.linkedin.com/company/4999506/admin/" title="Official Quercus Group Account on Linkedin">Connect on Linkedin</a>
                        <a href="https://twitter.com/QuercusGroup" title="Official Quercus Group Account on Twitter">Follow on Twitter</a>
                        <a href="https://medium.com/@quercus_group" title="Offical Quercus Group Blog on Medium">Follow on Medium</a>
                        </div>
                    </div>
                </div>
                <div className="footer_disclaimer">
                    <p> &copy;{new Date().getFullYear()} Quercus Group.</p>
                    <Link to="/">Privacy Policy</Link>
                    <p>website by Wadim Baslow</p>
                    <p>logo designed by Bogna Anna Gebalska</p>
                </div>
            </FooterContent>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    grid-column: 1 / span 14;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 5rem)) 1fr;
    column-gap: 2rem;
    background-color: ${props => props.theme.colors.primary500};
`
const FooterContent = styled.div`
    grid-column: 2 / span 12;
    padding: 3rem 0rem;
    h3 {
        color: ${props => props.theme.colors.neutral900};
        margin-bottom: 1rem;
    }

    p, address {
        color:  ${props => props.theme.colors.primary900};
    }
    address {
        font-style: normal;
        line-height: 1.75;
        margin-bottom: 1rem;
    }
    .footer_main {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2rem;
    }
    .social_media_links {
        display: flex;
        flex-direction: column;
        a {
            color: ${props => props.theme.colors.secondary500};
            font-size: 1.563rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
    }
    .footer_disclaimer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top: solid 0.1rem ${props => props.theme.colors.primary900};
        padding-top: 1rem;
        margin-top: 3rem; 
        * {
            margin-left: 3rem;
        }
    }
    
`

export default Footer