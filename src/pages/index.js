import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainBlock from "../components/main-block"
import Img from "gatsby-image"
import MainImage from "../images/main.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainBlock></MainBlock>
    <Img fluid="{MainImage}}"></Img>
  </Layout>
)

export default IndexPage
