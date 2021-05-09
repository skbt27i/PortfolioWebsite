import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Particles from 'react-particles-js';

const IndexPage = () => (
  <div id="begin" style={{ position: 'relative', overflow: "hidden" }}>


  <Layout>
    <SEO title="Home" />
    <h1>
      <font face = "Jost">Santosh Tirumala-       Not friendly to all resolutions/mobile yet
</font>
        </h1>
        <Particles
  params={{
    particles: {
      color: {
        value: "#BD10E0"
      },
      line_linked: {
        color: {
          value: "#000000"
        }
      },
      number: {
        value: 50
      },
      size: {
        value: 5
      }
    }
  }}
/>
   
  </Layout>

  </div>
)

export default IndexPage
