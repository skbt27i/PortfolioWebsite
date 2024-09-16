import React from "react"
import Layout from "../components/layout"
import { TypeAnimation } from 'react-type-animation';

const IndexPage = () => (
  <div id="begin" style={{ position: "relative", overflow: "hidden" }}>
    <Layout>
      <br />
      <div>
        <TypeAnimation
        sequence={[
          'Santosh Tirumala'
        ]}
        wrapper="span"
        cursor={true}
        style={{ fontSize: '3em', display: 'inline-block' }}
      />
      </div>
    </Layout>
  </div>
)

export default IndexPage
