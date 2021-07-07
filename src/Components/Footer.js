import React from 'react'
import styled from 'styled-components'
import {Link, useStaticQuery, graphql} from 'gatsby'


const Footer = ()=>{
    const offices = useStaticQuery(graphql`
        query offices {allContentfulOfficeAddress {edges {node {id office street zip city country}}}}
    `)
    return (
        <FooterContainer>
            <div className='line'/>
            <div className='cta'>
                <h3>Let’s create something great <span>together</span>!</h3>
            </div>
            <div className='office-addresses'>
                {offices.allContentfulOfficeAddress.edges.map((edge)=>(
                    <div key={edge.node.id}>
                        <h3>{edge.node.office}</h3>
                            <address>
                                {edge.node.street} <br/>
                                {edge.node.zip} {edge.node.city},{edge.node.country}
                            </address>
                    </div>
                            

                ))}
            </div>
            <div className='social-media'>
                <h3>Connect & Follow Us</h3>
                <div className="social_media_links">
                    <a href="https://www.linkedin.com/company/4999506/admin/" title="Official Quercus Group Account on Linkedin">Linkedin</a>
                    <a href="https://twitter.com/QuercusGroup" title="Official Quercus Group Account on Twitter">Twitter</a>
                    <a href="https://medium.com/@quercus_group" title="Offical Quercus Group Blog on Medium">Medium</a>
                </div>
            </div>
            <div className='disclaimer'>
                <Link style={{color: '#8189a5'}}to="/privacypolicy">Privacy Policy</Link>
                <div className='copyright'> &copy;{new Date().getFullYear()} Quercus Group</div>
            </div>
            </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    grid-column: 2 / span 12;
    padding: 2rem 0rem;
    color: ${props => props.theme.colors.primary900};
    h3 {
        color: ${props => props.theme.colors.primary900};
        font-size: 1.5rem;
    }
    .line {
        width: 100%;
        height: 0.05rem;
        background-color: ${props => props.theme.colors.primary900};
        margin-bottom: 4rem;
    }
    .cta {
        margin-bottom: 2rem;
        h3 {
            font-size: 2rem;
        }
        span {
            color: ${props => props.theme.colors.highlight600}
        }
    }
    .office-addresses {
        h3 {
            margin-bottom: 0rem;
        }
        address {
            font-style: normal;
            margin-bottom: 1rem;
            line-height: 1.5;
            color: ${props => props.theme.colors.primary700};
        }
    }
    .social-media {
        margin-top: 2rem;
        h3 {
            margin-bottom: 1rem;
        }
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
    }
    .disclaimer {
        margin-top: 4rem;
        padding-top: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        color: ${props => props.theme.colors.primary300};
        p {
            margin-bottom: 0;
            line-height: 0;
            font-size: 1rem;
        }
        * {
            margin-right: 2rem;
        }
    }
    @media screen and (min-width: 37rem){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2rem;
        .line, .cta, .disclaimer {
            grid-column: 1 / span 2;
        }
        .cta {
            grid-column: 1 / span 2;
        }
        .office-addresses {
            grid-column: 1 / span 1;
        }
        .social-media {
            margin-top: 0;
            grid-column: 2 / span 1;
        }
        .disclaimer {
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        }
    }
    @media screen and (min-width: 56rem){
        grid-template-columns: repeat(3, 1fr);
        .line, .disclaimer {
            grid-column: 1 / span 3;
        }
        .cta {
            grid-column: 1 / span 1;
        }
        .office-addresses {
            grid-column: 2 / span 1;
        }
        .social-media {
            grid-column: 3 / span 1;
        }
        .disclaimer {
            justify-content: flex-end;
            * {
            margin-right: 0rem;
            margin-left: 2rem;
            }
        }
    }
    @media screen and (max-width: 56rem){
        grid-column: 2 / span 8;
    }
    @media screen and (max-width: 40rem){
        grid-column: 2 / span 6;
    }
`


export default Footer