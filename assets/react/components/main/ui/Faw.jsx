import React, { useEffect } from 'react'
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
);

export const Faw = ({icon, cls}) => {
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

  useEffect(() => {
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
    );
    return () => {
      library.reset()
    }
  }, [])

  return (
    <FontAwesomeIcon icon={"fa-brands "+iconNames[icon]} className={cls} />
  )
}
