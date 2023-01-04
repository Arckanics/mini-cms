import React from 'react'
import Legal from "../ui/Legal";

const Footer = ({children}) => {
  return (
    <footer id="footer">
      <div className="footer-container">

        { children }

      </div>
    </footer>
  )
}

export default Footer