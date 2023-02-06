import React from "react"
import Navbar from "../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/Layout";
import Content from "../components/Content";

// Admin Root Component

function MainAdmin() {
  return <Router>
    <Layout>
      <Navbar/>
      <Content/>
    </Layout>
  </Router>
}

export default MainAdmin