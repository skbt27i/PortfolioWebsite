/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'font-awesome/css/font-awesome.min.css';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Header from "./header"
import "./layout.css"
import About from "./About"

const Layout = ({ children }) => {

  
  return (
    <>
      <Header  />

      <div
      id ='test1'
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
          

        <main>{children}</main>
        
        <footer>
       <div className="arrow bounce">
          <a className="fa fa-chevron-down fa-4x"  href="javascript:void(0)" onClick={() => scrollTo('#test2')}></a>
        </div>
        </footer>
      </div>

      <div id ='test2' className="section2"> 
      <About />
      </div>
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
