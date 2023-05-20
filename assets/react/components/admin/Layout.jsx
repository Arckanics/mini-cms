import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import { cleanPath } from "../../Functions/app";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "./ui";
import { clearData, setUrl } from "./redux/reducers/ajaxSlice";
import { Pages, Settings, Articles, Login } from "./pages";

const Menu = [
  { name: "Parametres", path: "/", Page: Settings },
  { name: "Pages", path: "/pages", Page: Pages },
  { name: "Articles", path: "/articles", Page: Articles },
];

const Layout = () => {
  const url = useSelector(state => state.ajax.url);
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
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
      <Navbar Pages={Menu} />
      <Routes>
        <Route path="mini-admin/login" element={<Login />} />
        {Menu.map(({ path, Page }, i) => {
          return (
            <Route
              key={i}
              path={`mini-admin${path}`}
              element={
                <Content>
                  <Page url={path} />
                </Content>
              }
            />
          );
        })}
      </Routes>
      <Toast />
    </section>
  );
};

export default Layout;
