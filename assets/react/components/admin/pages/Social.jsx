import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushData } from "../redux/reducers/ajaxSlice";
import axios from "axios";
import { PagesContainer } from "../ui";
import { Button, IconSelector, SocialCard, TxtLabelInput } from "../ui/Inputs";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Add } from "@fortawesome/react-fontawesome";
import SocialCardEditor from "../ui/Inputs/SocialCardEditor";
import { notify, notifyClose } from "../redux/reducers/notificationSlice";

const Social = () => {
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
    faAdd
  );

  const appendData = data => {
    data.map(card => (card.edit = false));
    setCardMake(false);
    dispatch(pushData({ name: "footer", data: data }));
  };

  useEffect(() => {
    !data
      ? ajax
          .get("/request")
          .then(res => {
            const data = [...res.data];
            appendData(data);
          })
          .catch(res => axiosError(res))
      : null;
  }, [data]);

  const axiosSuccess = (res,msg) => {
    const data = [...res.data];
    dispatch(notify({msg:msg,type:"success",timeout:setTimeout(() => dispatch(notifyClose()), 3000)}))
    appendData(data);
  }

  const axiosError = (res) => {
    const status = res.response.status;
    if (status === 302) {
      location.replace("/mini-admin/logout");
    }
  }

  const createCard = e => {
    e.stopPropagation();
    const remap = [...data].map(c => ({ ...c, edit: false }));
    appendData(remap);
    setCardMake(true);
  };


  const cardActions = action => {
    switch (action.type) {
      case "close":
      case "edit":
        return setCardMake(false);
      case "post":
        return ajax
          .post("/request", {
            where: "footer",
            data: action.data,
          })
          .then(res => axiosSuccess(res,'Lien social créé'))
          .catch(res => axiosError(res));
      case "put":
        return ajax
          .put("/request", {
            where: "footer",
            data: action.data,
          })
          .then(res => axiosSuccess(res,'Lien social mis à jour'))
          .catch(res => axiosError(res));
      case "delete":
        console.log(action);
        return ajax
          .delete("/request", { data: {where: 'footer', data: action.id}})
          .then(res => axiosSuccess(res,'Lien social supprimé'))
          .catch(res => axiosError(res));
    }
  };
  return (
    <PagesContainer title="Socials" inDesign={false}>
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
            <Add icon="add" className="add-icon" />
          ) : (
            <SocialCardEditor
              icon={"facebook"}
              name={""}
              url={""}
              iconList={iconNames}
              title={"créer"}
              action={cardActions}
            />
          )}
        </div>
      </div>
    </PagesContainer>
  );
};

export default Social;
