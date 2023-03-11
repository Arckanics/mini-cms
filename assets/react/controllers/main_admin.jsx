import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Layout from "../components/admin/Layout"
import store from '../components/admin/redux'
import { Provider } from "react-redux"

function MainAdmin() {
  return <Provider store={store}>
    <Router>
      <Layout/>
    </Router>
  </Provider>
}

export default MainAdmin