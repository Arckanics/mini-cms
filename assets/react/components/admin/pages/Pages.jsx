import React, { useEffect, useState } from "react";
import { PagesContainer, ContentNav } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { pushData } from "../redux/reducers/ajaxSlice";
import { notify, notifyClose } from "../redux/reducers/notificationSlice";
import { ModalEditor } from "../ui"
import axios from "axios";
import { strNormalize } from "../../../Functions/app";

// CRUD Complet pour les Pages

const Pages = () => {
  const axiosSet = useSelector(state => state.ajax.axios);
  const ajax = axios.create({ ...axiosSet, params: { page: "pages" } });
  const data = useSelector(state => state.ajax.data.pages);
  const [modal, setModal] = useState({
    enable: false,
    data: null,
    title: "",
    type: null,
    small: true,
    where: "pages",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    ajax
      .get("/request")
      .then(res => {
        dispatch(pushData({ name: "pages", data: [...res.data] }));
      })
      .catch(res => {
        const status = res.response.status;
        if (status === 302) {
          location.replace("/mini-admin/logout");
        }
      });
  }, []);
  const sendData = data => {
    const {where,type} = modal
    if (type !== "delete") {
      data.url = strNormalize(data.title).replace(/ /gi, '_');
    }
    const sendField = { where, data: data };
    switch (type) {
      case "put":
        return ajax.put("/request", sendField).then(res => {
          dispatch(pushData({ name: where, data: res.data }));
          dispatch(
            notify({
              type: "success",
              msg: "Page mise à jour!",
              timeout: setTimeout(() => {
                dispatch(notifyClose());
              }, 2500),
            })
          );
        });
      case "post":
        return ajax.post("/request", sendField).then(res => {
          dispatch(pushData({ name: where, data: res.data }));
          dispatch(
            notify({
              type: "success",
              msg: "Page créée!",
              timeout: setTimeout(() => {
                dispatch(notifyClose());
              }, 2500),
            })
          );
        }).catch(res => {
          dispatch(
            notify({
              type: "danger",
              msg: res.response.data.error,
              timeout: setTimeout(() => {
                dispatch(notifyClose());
              }, 2500),
            })
          )
        })
        case "delete":
          return ajax.delete("/request", {data: {...sendField}})
            .then(res => {
              dispatch(pushData({ name: where, data: res.data }));
              dispatch(
                notify({
                  type: "warning",
                  msg: "Page supprimée!",
                  timeout: setTimeout(() => {
                    dispatch(notifyClose());
                  }, 2500),
                })
              );
            })
            .catch(res => {
              const response = res.response;
              const msg = response.data;
              dispatch(notify({
                type: "danger",
                msg: msg.error,
                timeout: setTimeout(() => {
                  dispatch(notifyClose());
                }, 2500),
              }))
            })
    }
  }

  const createPage = () => {
    setModal({
      ...modal,
      enable: true,
      data: null,
      type: "post",
      title: "Créer",
    })
  };

  const updatePage = id => {
    const nData = { ...data };
    const page = Object.values(nData).find(p => p.id == id);
    setModal({
      ...modal,
      enable: true,
      data: {...page},
      type: "put",
      title: "Modifier",
    })
  };

  const removePage = id => {
    modal.type = "delete"
    sendData(id)
  };

  const header = [
    { tag: "title", name: "titre", draw: "string", colSize: 4 },
    { tag: "sort", name: "ordre", draw: "number", colSize: "1-5" },
    { tag: "settings", name: "landing", draw: "bool", colSize: 2 },
  ];

  return (
    <PagesContainer title={"Pages"}>
      {data ? (
        <ContentNav
          data={data}
          header={header}
          update={updatePage}
          remove={removePage}
          create={createPage}
        />
      ) : null}
      {modal.enable ? (
        <ModalEditor
          data={modal.data}
          title={modal.title}
          close={() => setModal({...modal, enable: false})}
          command={sendData}
          small={modal.small}
          schema={{
            title: { type: "string", name: "Titre" },
          }}
        />
      ) : null}
    </PagesContainer>
  );
};

export default Pages;
