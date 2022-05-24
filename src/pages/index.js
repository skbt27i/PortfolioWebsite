import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import Particles from "react-particles-js";

const IndexPage = () => (
  <div id="begin" style={{ position: "relative", overflow: "hidden" }}>
    <Layout>
      <br />
      <div>
        <h1>
          <font face="Jost">Santosh Tirumala</font>
        </h1>
      </div>
      <Particles
        params={{
          particles: {
            color: {
              value: "#BD10E0",
            },
            interactivity: {
              events: {
                onresize: {
                  enable: true,
                  density_auto: true,
                  density_area: 400 
                }
              }
            },
            line_linked: {
              color: {
                value: "#000000",
              },
            },
            number: {
              value: 20,
            },
            size: {
              value: 5,
            },
          },
        }}
      />
    </Layout>
  </div>
);

export default IndexPage;
