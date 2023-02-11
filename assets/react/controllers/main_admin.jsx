import React from "react"
import Navbar from "../components/admin/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/admin/Layout";
import Content from "../components/admin/Content";

function MainAdmin() {
  return <Router>
    <Layout>
      <Navbar/>
      <Content>
        <h1>Test</h1>

      </Content>
    </Layout>
  </Router>
}

export default MainAdmin