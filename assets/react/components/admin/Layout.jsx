import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import { cleanPath } from "../../Functions/app";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "./ui";
import { clearData, setUrl } from "./redux/reducers/ajaxSlice";
import { Pages, Settings, Articles, Login, Social } from "./pages";

const Layout = () => {
  const url = useSelector(state => state.ajax.url);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const Menu = [
    { name: "Paramètres", path: "/", Page: Settings },
    { name: "Social", path: "/social", Page: Social },
    { name: "Pages", path: "/pages", Page: Pages },
    { name: "Articles", path: "/articles", Page: Articles },
  ];

  useEffect(() => {
    console.log();
    url === "" ? dispatch(setUrl("")) : null;
    location.pathname.match(/\/$/, "")
      ? nav(cleanPath(location.pathname))
      : undefined;
    window.onbeforeunload = e => {
      dispatch(clearData());
    };
  }, []);

  return (
    <section id="layout">
      {!location.pathname.match(/login$/) ? (
        <>
          <Navbar Pages={Menu} />
          <Content menu={Menu} />
        </>
      ) : (
        <Routes>
          <Route path="mini-admin/login" element={<Login />} />
        </Routes>
      )}
      <Toast />
    </section>
  );
};

export default Layout;
