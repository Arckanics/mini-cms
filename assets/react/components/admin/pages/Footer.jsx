import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushData } from "../redux/reducers/ajaxSlice";
import axios from "axios";
import { PagesContainer } from "../ui";
import { IconSelector, SocialCard } from "../ui/Inputs";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faYoutubeSquare,
  faTwitterSquare,
  faInstagramSquare,
  faTelegram,
  faGithubSquare,
  faMicrosoft,
  faApple,
  faLinux,
  faTwitch,
  faSteamSquare,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Expand } from "../../../icon/icon-ui";
import { FontAwesomeIcon as Faw } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const axiosSet = useSelector(state => state.ajax.axios);
  const ajax = axios.create({ ...axiosSet, params: { page: "footer" } });
  const dispatch = useDispatch();
  const data = useSelector(state => state.ajax.data.footer);
  const [cardMake, setCardMake] = useState(false);
  const [title, setTitle] = useState("créer")

  const iconNames = {
    facebook: "fa-square-facebook",
    youtube: "fa-square-youtube",
    twitter: "fa-square-twitter",
    instagram: "fa-square-instagram",
    telegram: "fa-telegram",
    github: "fa-square-github",
    microsoft: "fa-microsoft",
    apple: "fa-apple",
    linux: "fa-linux",
    twitch: "fa-twitch",
    steam: "fa-square-steam",
    discord: "fa-discord",
  };

  library.add(
    faFacebookSquare,
    faYoutubeSquare,
    faTwitterSquare,
    faInstagramSquare,
    faTelegram,
    faGithubSquare,
    faMicrosoft,
    faApple,
    faLinux,
    faTwitch,
    faSteamSquare,
    faDiscord,
    faAdd
  );

  useEffect(() => {
    ajax
      .get("/request")
      .then(res => {
        dispatch(pushData({ name: "footer", data: [...res.data] }));
      })
      .catch(res => {
        const status = res.response.status;
        if (status === 302) {
          location.replace("/mini-admin/logout");
        }
      });
  }, []);

  const createCard = e => {
    setCardMake(true);
  };

  return (
    <PagesContainer title="Pied de page" inDesign={false}>
      <div className={"card-nav" + (cardMake ? " card-making" : "")}>
        {data
          ? data.map(({ name, icon, url }, k) => (
              <SocialCard
                key={k}
                icon={icon}
                name={name}
                url={url}
                iconList={iconNames}
              />
            ))
          : null}
        {!cardMake ? (
          <div className="card new" onClick={createCard}>
            <Faw icon="add" className="add-icon" />
          </div>
        ) : (
          <div className="card-maker">
            <div className="card-edit-title">
              <h2 className="txt">{title}</h2>
            </div>
            <IconSelector list={{...iconNames}} active={"facebook"} item={Faw} cls={'secondary inline-block gap-2'} >
              <h2 className="py-2">Icône</h2>
            </IconSelector>
          </div>
        )}
      </div>
    </PagesContainer>
  );
};

export default Footer;
