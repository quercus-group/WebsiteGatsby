import * as React from "react"
import {Layout, HeroSection} from '../Components'
import AboutSection from "../Components/AboutSection"
import ProjectSection from "../Components/ProjectSection"
import TeamSection from "../Components/TeamSection"
import ServiceSection from "../Components/ServiceSection"



const IndexPage = () => {
  
  return (
    <Layout>
      <HeroSection/>
      <ProjectSection/>
      <ServiceSection/>
      <AboutSection/>
      <TeamSection/>
    </Layout>
  )
}

export default IndexPage
