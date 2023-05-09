import '../../styles/guest/app.scss';
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Guest from '../components/guest/index';

// Index Root Component

const Main = () => <Router>
  <Guest />
</Router>

export default Main