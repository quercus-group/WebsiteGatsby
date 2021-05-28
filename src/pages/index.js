import * as React from "react"
import FrontPage from "../Components/FrontPage-Components/FrontPage"
import Layout from '../Components/Layout'
import Seo from "../Components/SEO"



const IndexPage = () => {
  
  return (
    <Layout>
      <Seo/>
      <FrontPage/>
    </Layout>
  )
}

export default IndexPage
