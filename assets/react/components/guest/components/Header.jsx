import React from "react";

const Header = ({ children }) => {

  const icon = document.querySelector('link[rel=icon]')

  return (
    <header id="header">
      <div className="container flex justify-between mx-auto p-2">
        
        { icon && <div id="logo">
          <img className="logo-img" src={icon.getAttribute('href')} />
        </div> }

        { children }
        
      </div>
    </header>
  );
};

export default Header;
