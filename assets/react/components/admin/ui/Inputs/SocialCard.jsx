import React, { useState } from "react";
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
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Faw } from "@fortawesome/react-fontawesome";

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
  faDiscord
);

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

const SocialCard = ({ icon, name, url, update }) => {
  const [editable, setEditable] = useState(false);
  return <div className="card">
    {
    !editable
    ? <>
      <div className="card-icon" >
        <Faw icon={"fa-brands "+iconNames[icon]} className="card-icon-svg"/>
      </div>
      <div className="card-name" >
        {name}
      </div>
      <div className="opt" >

      </div>
    </>
    : <></>
    }
  </div>;
};

export default SocialCard;
