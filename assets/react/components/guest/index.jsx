import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, Navbar, Content, Footer } from "./components";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Faw } from "../main/ui/Faw";
import Legal from "./ui/Legal";

const index = () => {
  const [linkLoad, setLinkLoad] = useState(undefined);
  const [landing, setLanding] = useState(1);
  const [socials, setSocials] = useState(null);
  const ajax = axios.create({
    headers: {
      XmlHttpRequest: true,
    },
  });
  useEffect(() => {
    !linkLoad
      ? ajax.get("/request/page-list").then(res => {
          setLanding(res.data.landing);
          setLinkLoad([...res.data.data]);
        })
      : null;
    !socials
      ? ajax.get("/request/socials").then(res => {
          setSocials(res.data);
        })
      : null;
  }, [linkLoad, socials]);

  return (
    <Provider store={store}>
      <Header>
        {linkLoad && <Navbar links={linkLoad} landing={landing} />}
      </Header>
      {linkLoad && <Content />}
      <Footer>
        {socials ? (
          <ul className="socials">
            {socials.map((item, k) => {
              const { icon, url, name } = item;
              return (
                <li className="social-link" key={k}>
                  <a target="_blank" href={url}>
                    <Faw icon={icon} cls="icon" />
                  </a>
                </li>
              );
            })}
          </ul>
        ) : null}
        <span className="align-middle text-center">
            <span className="page-name">mini-cms&nbsp;-&nbsp;</span><Legal/>

        </span>
        <div className="source-link">
          <a target="_blank" href="https://github.com/Arckanics/mini-cms#readme">
            <Faw icon="github" cls="icon" />
          </a>
        </div>
      </Footer>
    </Provider>
  );
};

export default index;
