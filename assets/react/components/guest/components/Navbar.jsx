import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setData } from "../redux/slices/fetcher";
import axios from "axios";

const Navbar = ({ links, landing }) => {

  const dispatch = useDispatch()
  const xml = axios.create({
    baseURL: '/request'
  })
  const fetchData = (id, Title) => {
    xml.get(`page`, {
      params: {
        id
      }
    })
  }

  const renderLink = l => 
    !l 
    ? null
    : l.map((l,i) => <li key={l.id} className="p-0 text-center nav-container" onClick={() => fetchData(l.id, l.Title)}>
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
