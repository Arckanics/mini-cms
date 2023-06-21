import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushData } from "../redux/reducers/ajaxSlice";
import axios from "axios";
import { PagesContainer } from "../ui";
import { Button, IconSelector, SocialCard, TxtLabelInput } from "../ui/Inputs";
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
import { FontAwesomeIcon as Faw } from "@fortawesome/react-fontawesome";
import SocialCardEditor from "../ui/Inputs/SocialCardEditor";

const Footer = () => {
  const axiosSet = useSelector(state => state.ajax.axios);
  const ajax = axios.create({ ...axiosSet, params: { page: "footer" } });
  const dispatch = useDispatch();
  const data = useSelector(state => state.ajax.data.footer);
  const [cardMake, setCardMake] = useState(false);
  const [makerState, setMakerState] = useState({
    icon: "",
    name: "",
    url: "",
  });

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
    e.stopPropagation();
    setCardMake(true);
  };
  const closeCard = e => {
    e.stopPropagation();
    setCardMake(false);
  };
  return (
    <PagesContainer title="Pied de page" inDesign={false}>
      <div className="card-nav">
        {data
          ? data.map(({ name, icon, url, id }, k) => (
              <SocialCard
                key={k}
                uid={id}
                icon={icon}
                name={name}
                url={url}
                iconList={iconNames}
              >
                <SocialCardEditor 
                  icon={icon}
                  id={id}
                  name={name}
                  url={url}
                  updating={true}
                  iconList={iconNames}
                  title={'éditer'}
                  faw={Faw}
                />
              </SocialCard>
            ))
          : null}
        <div className="card new" onClick={createCard}>
          {!cardMake ? (
            <Faw icon="add" className="add-icon" />
          ) : (
            <SocialCardEditor
              icon={makerState.icon}
              name={makerState.name}
              url={makerState.url}
              iconList={iconNames}
              title={'créer'}
              faw={Faw}
            />
          )}
        </div>
      </div>
    </PagesContainer>
  );
};

export default Footer;
