import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div id="begin">
  <Layout>
    <SEO title="Home" />
    <h1>
      <font face = "Jost">Under Construction (Will be adding links to social media soon!)</font>
        </h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`
 }}>
      <Image />
    </div>
  </Layout>

  </div>
)

export default IndexPage
