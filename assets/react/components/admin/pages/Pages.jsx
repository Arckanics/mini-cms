import React, { useEffect, useState } from "react";
import { PagesContainer, ContentNav } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { pushData } from "../redux/reducers/ajaxSlice";
import { ModalEditor } from "../ui"
import axios from "axios";

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

  const updatePage = id => {
    const nData = { ...data };
    const page = Object.values(nData).find(p => p.id == id);
    setModal({
      ...modal,
      enable: true,
      data: {...page},
      title: "Modifier",
    })
  };

  const removePage = id => {
    console.log(id);
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
        />
      ) : null}
      {modal.enable ? (
        <ModalEditor
          data={modal.data}
          title={modal.title}
          close={null}
          command={null}
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
