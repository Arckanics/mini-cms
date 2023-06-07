import React from 'react'

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