import React, { useEffect, useState } from "react";
import { PagesContainer, ContentNav, ModalEditor } from "../ui";
import { useSelector, useDispatch } from "react-redux";
import { clearData, pushData } from "../redux/reducers/ajaxSlice";
import axios from "axios";
import { prepareForSend } from "../../../Functions/app";
import { notify, notifyClose } from "../redux/reducers/notificationSlice";
import { orderUpdate } from "../Functions/Data";

// CRUD Complet pour les Articles

const Articles = () => {
  const axiosSet = useSelector(state => state.ajax.axios);
  const ajax = axios.create({ ...axiosSet, params: { page: "articles" } });
  const articles = useSelector(state => state.ajax.data.articles);
  const pages = useSelector(state => state.ajax.data.pages);
  const dispatch = useDispatch();
  const [modal, setModal] = useState({
    enable: false,
    data: null,
    title: "",
    type: null,
    where: "articles",
  });

  useEffect(() => {
    const controller = new AbortController();
    !articles && ajax
        .get("/request", { ...axiosSet, signal: controller.signal })
        .then(res => {
          dispatch(pushData({ name: "articles", data: res.data }));
        })
        .catch(res => {
          const status = res.response.status;
          if (status === 302) {
            location.replace("/mini-admin/logout");
          }
        });

    ajax
      .get("/request", { ...axiosSet, signal: controller.signal, params: { page: "pages" } })
      .then(res => {
        dispatch(pushData({ name: "pages", data: res.data }));
      })
      .catch(res => {
        const status = res.response.status;
        if (status === 302) {
          location.replace("/mini-admin/logout");
        }
      });
    return () => {
      controller.abort();
      dispatch(clearData());
    };
  }, []);

  const reordering = res => {
    orderUpdate("articles", ajax, res).then(res => {
      const { data } = res;
      dispatch(pushData({ name: "articles", data: [...data.data] }));
      dispatch(
        notify({
          type: "success",
          msg: data.msg,
          timeout: setTimeout(() => dispatch(notifyClose()), 2000),
        })
      );
      
    });
  };

  const closeModal = () => {
    setModal({ ...modal, enable: false });
  };
  // envoie des données
  const sendData = data => {
    const { type, where } = modal;
    data = type !== "delete" ? (data = prepareForSend(data)) : data;
    const sendField = { where, data: data };
    switch (type) {
      case "put":
        return ajax.put("/request", sendField).then(res => {
          dispatch(pushData({ name: where, data: res.data }));
          dispatch(
            notify({
              type: "success",
              msg: "article mis à jour!",
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
              msg: "article enregistré!",
              timeout: setTimeout(() => {
                dispatch(notifyClose());
              }, 2500),
            })
          );
        });
      case "delete":
        return ajax.delete("/request", { data: { ...sendField } }).then(res => {
          dispatch(pushData({ name: where, data: res.data }));
          dispatch(
            notify({
              type: "warning",
              msg: "article supprimé!",
              timeout: setTimeout(() => {
                dispatch(notifyClose());
              }, 2500),
            })
          );
        });
    }
  };
  // nouvel article
  const createArticle = () => {
    setModal({
      ...modal,
      enable: true,
      title: "Créer",
      data: null,
      type: "post",
    });
  };

  // ouvre l'édition d'articles
  const updateArticle = id => {
    const article = { ...articles.find(a => a.id == id) };
    const convert = {};
    for (let [k, v] of Object.entries(article)) {
      if (typeof v === "object") {
        if (v) {
          convert[k] = new Date(Date.parse(v.date.replace(/\.[0-9]+$/g, "")));
        } else {
          convert[k] = new Date();
        }
      } else {
        convert[k] = v;
      }
    }
    setModal({
      ...modal,
      enable: true,
      title: "Modifier",
      data: convert,
      type: "put",
    });
  };

  // supprime les articles
  const removeArticle = id => {
    modal.type = "delete";
    sendData(id);
  };

  const header = [
    { tag: "title", name: "titre", draw: "string", colSize: 2, mobile: true },
    {
      tag: "sort",
      name: "ordre",
      draw: "number",
      colSize: "1-5",
      mobile: false,
    },
    {
      tag: "page",
      name: "page",
      draw: "object.title",
      colSize: 2,
      mobile: true,
    },
    {
      tag: "published",
      name: "visible",
      draw: "bool",
      colSize: 1,
      mobile: false,
    },
    {
      tag: "isdynamic",
      name: "dynamique",
      draw: "bool",
      colSize: 1,
      mobile: false,
    },
  ];

  return (
    <PagesContainer title={"Articles"}>
      {typeof articles === "object" && typeof pages === "object" ? (
        !modal.enable ? (
          <ContentNav
            header={header}
            create={createArticle}
            update={updateArticle}
            remove={removeArticle}
            orderUpdate={reordering}
            dataName="articles"
          />
        ) : null
      ) : null}
      {
        // fenêtre d'édition et création des articles et pages
        modal.enable ? (
          <ModalEditor
            data={modal.data}
            title={modal.title}
            close={closeModal}
            command={sendData}
            schema={{
              title: { type: "string", name: "Titre" },
              page: {
                type: "select",
                name: "Page",
                draw: "title",
                list: pages,
              },
              published: { type: "bool", name: "Visible" },
              isdynamic: { type: "bool", name: "Dynamique" },
              publishbegin: { type: "date", name: "Début", draw: "title" },
              publishend: { type: "date", name: "Fin", draw: "title" },
              // sort: { type: "sorting", name: "Ordre", list: articles },
              content: { type: "text", name: "Contenu" },
            }}
          />
        ) : null
      }
    </PagesContainer>
  );
};

export default Articles;
