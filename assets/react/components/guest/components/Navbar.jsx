import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ links, landing }) => {

  const renderLink = l => 
    !l 
    ? null
    : l.map((l,i) => <li key={l.id} className="p-0 text-center nav-container" >
      <NavLink to={!(landing == l.id) ? l.url : ""} className='navLink'>{l.Title}</NavLink>
    </li>)

  return (
    <>
      <div id="logo">

      </div>
      <nav>
        <ul className="wrapper">
          {renderLink(links)}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
