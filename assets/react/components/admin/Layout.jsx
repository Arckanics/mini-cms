import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import { cleanPath } from "../../Functions/app";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "./ui";
import { clearData, setUrl } from "./redux/reducers/ajaxSlice";
import { Pages, Settings, Articles, Login, Social, ResetPass, NewPassword } from "./pages";

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
    url === "" ? dispatch(setUrl("")) : null;
    location.pathname.match(/\/$/, "")
      ? nav(cleanPath(location.pathname))
      : undefined;
    return window.onbeforeunload = e => {
      dispatch(clearData());
    };
  }, []);

  return (
    <section id="layout">
      {!location.pathname.match(/login$|reset-p|password$/gi) ? (
        <>
          <Navbar Pages={Menu} />
          <Content menu={Menu} />
        </>
      ) : (
        <Routes>
          <Route path="mini-admin/login" element={<Login />} />
          <Route path="mini-admin/reset-pass" element={<ResetPass />} />
          <Route path="mini-admin/new-password" element={<NewPassword />} />
        </Routes>
      )}
      <Toast />
    </section>
  );
};

export default Layout;
