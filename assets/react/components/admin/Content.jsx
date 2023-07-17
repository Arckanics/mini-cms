import React from "react";
import { Routes, Route } from "react-router-dom";

const Content = ({ menu, children }) => {
  const routes = menu ? menu : undefined;

  return (
    <>
      <section id="content">
        {children}
        {routes ? (
          <Routes>
            {routes.map(({ path, Page }, i) => (
              <Route
                key={i}
                path={`mini-admin${path}`}
                element={<Page url={path} />}
              />
            ))}
          </Routes>
        ) : null}
      </section>
      <footer id="admin-footer">
        <div className="link-group">
          <div className="link-prev">Créateur : </div>
          <a
            target="_blank"
            className="link"
            href="https://github.com/Arckanics"
          >
            GitHub.
          </a>
        </div>
        <div className="link-group">
          <a
            target="_blank"
            className="link"
            href="https://github.com/Arckanics/mini-cms"
          >
            à propos
          </a>
        </div>
      </footer>
    </>
  );
};

export default Content;
