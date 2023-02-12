import React from "react"
import Navbar from "../components/admin/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/admin/Layout";
import Content from "../components/admin/Content";

import { Provider } from "react-redux";
import store from '../components/admin/store'

function MainAdmin() {
  return <Provider store={store}>
      <Router>
      <Layout>
        <Navbar/>
        <Content>
          <h1>Test</h1>

        </Content>
      </Layout>
    </Router>
  </Provider>
}

export default MainAdmin