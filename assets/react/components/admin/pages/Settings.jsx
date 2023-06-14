import React, { useEffect, useState } from "react";
import { PagesContainer } from "../ui";
import { Button, Selector, TxtLabelInput, ImgExplorer } from "../ui/Inputs";
import { areEqual, capitalize } from "../../../Functions/app";
import { useDispatch, useSelector } from "react-redux";
import { pushData } from "../redux/reducers/ajaxSlice";
import axios from "axios";
import { notify, notifyClose } from "../redux/reducers/notificationSlice";

// Gestion des Settings

const Settings = () => {
  const axiosSet = useSelector(state => state.ajax.axios);
  const ajax = axios.create({ ...axiosSet });
  const data = useSelector(state => state.ajax.data.settings);
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  const [initialState, setInitialState] = useState({});

  useEffect(() => {
    ajax
      .get("/request")
      .then(res => {
        dispatch(pushData({ name: "settings", data: res.data }));
        setInitialState({ ...res.data });
      })
      .catch(res => {
        const status = res.response.status;
        if (status === 302) {
          location.replace("/mini-admin/logout");
        }
      });
  }, []);


  const makeDispatch = d => {
    dispatch(pushData({ name: "settings", data: d }));
    !areEqual(initialState, d) ? setChange(true) : setChange(false);
  }

  const handleChange = (e, prop) => makeDispatch({ ...data, [prop]: e.target.value })

  const setLanding = v => makeDispatch({ ...data, Landing: v })

  const setLogo = e => makeDispatch({ ...data, logo: e })

  const updateSettings = () => {
    ajax.put("/request", { where: "settings", data }).then(res => {
      dispatch(notify({ 
        msg: "options mises à jour", 
        type: "info",
        timeout: setTimeout(() => dispatch(notifyClose()), 2000)
      }));
      dispatch(pushData({ name: "settings", data: res.data }));
      setInitialState({ ...res.data });
      setChange(false)
    }).catch(r => {
      dispatch(notify({ 
        msg: "erreur de sauvegarde", 
        type: "danger",
        timeout: setTimeout(() => dispatch(notifyClose()), 2000)
      }))
    })
  };

  return (
    <PagesContainer title={"Paramètres"}>
      <div className="flex flex-col gap-3 py-3 overflow-hidden justify-between">
        {data ? (
          <>
            <TxtLabelInput
              type="text"
              onChange={e => handleChange(e, "Author")}
              label="Auteur"
              id="Author"
              value={data.Author}
              placeholder="Auteur"
              inputCls="input-txt w-full secondary"
              divCls="input-wrap p-2 secondary"
              labelCls="label"
            />
            <TxtLabelInput
              type="text"
              onChange={e => handleChange(e, "Description")}
              label="Description"
              id="Description"
              value={data.Description}
              placeholder="Description"
              inputCls="input-txt w-full secondary"
              divCls="input-wrap p-2 secondary"
              labelCls="label"
            />
            <TxtLabelInput
              type="text"
              onChange={e => handleChange(e, "SiteName")}
              label="Titre du site"
              id="SiteName"
              value={data.SiteName}
              placeholder="Titre du site"
              inputCls="input-txt w-full secondary"
              divCls="input-wrap p-2 secondary"
              labelCls="label"
            />
            <ImgExplorer 
              id={"getLogo"}
              divCls={"input-wrap p-2 secondary select-none"}
              label={"Logo"}
              labelCls={"label"}
              value={data.logo}
              action={setLogo}
            />
            <Selector
              cls="secondary"
              iconCls="icon"
              active={data.Landing}
              list={data.Pages}
              action={setLanding}
            >
              <h2 className="block py-2">Page d'accueil</h2>
            </Selector>
          </>
        ) : null}
        {change && (
          <Button
            btnCls={"btn secondary fadeInLeft"}
            divCls={"p-2 flex justify-end"}
            click={updateSettings}
          >
            Sauvegarder
          </Button>
        )}
      </div>
    </PagesContainer>
  );
};

export default Settings;
