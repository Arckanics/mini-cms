import '../../styles/guest/app.scss';
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Guest from '../components/guest/index';

// Index Root Component

const Main = () => <React.StrictMode>
  <Router>
    <Guest />
  </Router>
</React.StrictMode>

export default Main