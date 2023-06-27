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

  const appendData = (data) => {
    data.map(card => card.edit = false)
    dispatch(pushData({ name: "footer", data: data }));
  }

  useEffect(() => {
    !data 
    ? ajax
        .get("/request")
        .then(res => {
          const data = [...res.data]
          appendData(data)
        })
        .catch(res => {
          const status = res.response.status;
          if (status === 302) {
            location.replace("/mini-admin/logout");
          }
        })
    : null
  }, [data]);

  const createCard = e => {
    e.stopPropagation();
    const remap = [...data].map(c => ({...c, edit: false}))
    appendData(remap)
    setCardMake(true)
  };
  const cardActions = (action) => {
    if (action.type == 'close' || 'edit')
    {
      return setCardMake(false);
    }
    if (action.type == 'put')
    {
      return ajax.put("/request", {
        where: 'footer',
        data: action.data
      })
    }
    console.log(action);
  }
  return (
    <PagesContainer title="Pied de page" inDesign={false}>
      <div className="card-nav">
        {data
          ? data.map(({ name, icon, url, id, edit }, k) => (
              <SocialCard
                key={k}
                id={id}
                icon={icon}
                name={name}
                url={url}
                iconList={iconNames}
                action={cardActions}
                edit={edit}
              />
            ))
          : null}
        <div className="card new" onClick={createCard}>
          {!cardMake ? (
            <Faw icon="add" className="add-icon" />
          ) : (
            <SocialCardEditor
              icon={'facebook'}
              name={''}
              url={''}
              iconList={iconNames}
              title={'créer'}
              faw={Faw}
              action={cardActions}
            />
          )}
        </div>
      </div>
    </PagesContainer>
  );
};

export default Footer;
