import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { cleanPath } from "../../../Functions/app";

const Navbar = ({ links, landing }) => {
  const nav = useNavigate()

  const cleanUrl = () => {
    location.pathname.match(/\/$/)
    ? nav (cleanPath(location.pathname))
    : undefined
  }

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
