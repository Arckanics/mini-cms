import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { setData } from "../redux/slices/fetcher";
import axios from "axios";

const Navbar = ({ links, landing }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const xml = axios.create({
    baseURL: "/request",
  });

  useEffect(() => {
    // obtenir la page par rapport à l'url
    const where = () => {
      const path = location.pathname;
      if (path === "/") {
        return links.find(l => l.id == landing);
      }
      return links.find(l => l.url.match(path.replace(/^\//)));
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
    }
  }, [location]);

  const renderLink = l =>
    !l
      ? null
      : l.map((l, i) => (
          <li key={l.id} className="p-0 text-center nav-container">
            <NavLink to={!(landing == l.id) ? l.url : ""} className="navLink">
              {l.Title}
            </NavLink>
          </li>
        ));

  return (
    <>
      <div id="logo"></div>
      <nav>
        <ul className="wrapper">{renderLink(links)}</ul>
      </nav>
    </>
  );
};

export default Navbar;
