import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { setData } from "../redux/slices/fetcher";
import axios from "axios";

const Navbar = ({ links, landing }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const xml = axios.create({
    baseURL: "/request",
  });

  useEffect(() => {
    // obtenir la page par rapport à l'url
    const path = location.pathname;
    const where = () => {
      if (path === "/") {
        return links.find(l => l.id == landing);
      }
      return links.find(l => l.url === path.replace(/^\//, ""));
    };

    const page = where();

    if (page !== undefined) {
      xml
        .get(`page`, {
          params: {
            id: page.id,
          },
        })
        .then(res => {
          dispatch(setData({ articles: res.data.data, page }));
        });
    } else {
      dispatch(setData({ articles: null }));
    }
  }, [location]);

  const renderLink = l =>
    !l
      ? null
      : l.map((l, i) => (
          <li key={l.id} className="p-0 text-center nav-container" onClick={() => setToggle(false)}>
            <NavLink to={!(landing == l.id) ? l.url : ""} className="navLink">
              {l.Title}
            </NavLink>
          </li>
        ));

  return (
    <>
      <nav id="navigation" className={(toggle ? 'toggle' : '')}>
        <ul className="wrapper">{renderLink(links)}</ul>
      </nav>
      <div id="toggle-menu" className={(toggle ? 'toggle' : '')} onClick={() => setToggle(!toggle)}>
        <div className="toggle-wrapper">
        <div className="bar-top"></div>
        <div className="bar-mid"></div>
        <div className="bar-end"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
