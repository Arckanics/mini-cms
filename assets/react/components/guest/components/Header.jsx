import React from "react";

const Header = ({ children }) => {
  return (
    <header id="header">
      <div className="container flex justify-between mx-auto p-2">
        
        { children }
        
      </div>
    </header>
  );
};

export default Header;
