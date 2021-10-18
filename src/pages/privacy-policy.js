import React from 'react';
import Layout from '../Components/Layout';
import Seo from '../Components/SEO';
import styled from "styled-components"
import {Link} from 'gatsby'
import GridContainer from '../Components/Basic-Components/GridContainer';
import PageTitle from '../Components/Basic-Components/PageTitle';

const PrivayPolicy = () => {
    return (  

        <Layout>
            <Seo
                title="Privacy Policy"
                robotParam="nofollow, noindex"
            />
            <PrivacyPolicyContainer>
                <PageTitle>Privacy Policy</PageTitle>
                    <p><Link to="/">https://quercus-group.com</Link> is run by Quercus Group Aps (hereafter as "we"), Dantes Plads 1, 1557 København V. Email: info@quercus-group.com.</p>
                    <p>The website's purpose is to provide a digital overview of Quercus Group as company including its services, projects, team and relevant contact information.</p>
                <h2>What data do we collect?</h2>
                    <p>We collect statistical usage data of our website such as page visitors, views, average time on site, bounce rate, referrals, visitor's browser and device types, as well as georgaphic location of the visitor.</p>
                    <p>We collect the name, email address, in certain cases the organization's name (when submitting a message using the contact form), and the conversation when interacting or communicating with our team or our service.</p>
                <h2>How do we collect your data?</h2>
                    <p>We typically process personal data on potential or existing customers, website visitors and vendors and collaboration partners.</p>
                    <p>We use <a href="https://usefathom.com/">fathom</a> to collect and process website statistics. Fathom puts digital privacy first and is compliant to GDPR, CCPA, ePrivacy, and others. Read more about the data journey using fathom <a href="https://usefathom.com/data">here</a> and fathom's privacy policy <a href="https://usefathom.com/privacy">here</a></p>
                    <p>When contacting us via the contact form, the data will be send to the Client Relationship Management Software Hubspot. Read about Hubspot's security <a href="https://legal.hubspot.com/security">here</a> and privacy policy <a href="https://www.hubspot.com/data-privacy/privacy-shield">here</a>.</p>
                    <p>If you interact with us via e-mail, your name and email address as well as the communication's content will be stored as part of the cloud-based platform Microsoft Office 365.</p>
                    <p>We do not rent, buy or sell personal data from or to others, use automated decisions or profiling in the processing of your personal data, or process any special category data.</p>
                <h2>How will we use your data?</h2>
                    <p>We use the website's statistics in order to improve the user experience on website and optimize the website's content.</p>
                    <p>We use the contact information from email or the contact form to make sure that we are relevant and timely in our communication with our clients, partners and those we interact as business. </p>
                    <p>We do not share data with any third parties.</p>
                <h2>How do we store your data?</h2>
                    <p>Our data is stored in cloud-based platforms such as Microsoft 365, Hubspot and fathom.</p>
                <h2>Cookies</h2>
                    <p>Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information.</p>
                    <p>The use of fathom for our website's statistic allows us to operate our website without cookies. We do not make use of cookies on our website to enable other services.</p>
                <h2>Changes to our privacy policy</h2>
                    <p>Our Company keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on 18 October 2021.</p>
                <h2>How to contact us</h2>
                    <p>If you have any questions about Our Company’s privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.</p>
                    <p>Email us at: info@quercus-group.com</p>
                    <p>Or write to us at: Dantes Plads 1, 1556 København V, Denmark</p>


            </PrivacyPolicyContainer>

        </Layout>

    );
}

const PrivacyPolicyContainer = styled(GridContainer)`
    p, h2 {
        grid-column: 3  / span 8 ;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 1rem 0 0.5rem 0;
    }
    a {
        color: ${props => props.theme.colors.primary900};
        text-decoration: underline;
    }
    @media screen and (max-width: 68rem){
        grid-template-columns: repeat(8, minmax(0, 6rem));
        p, h2 {
            grid-column: 2 / span 6;
        }
    }
    @media screen and (max-width: 56rem){
        p, h2 {
            grid-column: 1 / span 8;
        }
    }
    @media screen and (max-width: 48rem){
        grid-template-columns: repeat(6, 1fr);
        .p, h2 {
            grid-column: 1 / span 6;
        }
    }
    @media screen and (max-width: 48rem){
        grid-template-columns: repeat(6, 1fr);
        p, h2 {
            grid-column: 1 / span 6;
        }
    }
    @media screen and (max-width: 48rem){
        p, h2 {
            text-align: left;
        }
    }
`
 
export default PrivayPolicy;