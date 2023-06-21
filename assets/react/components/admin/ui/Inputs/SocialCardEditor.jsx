import React from "react";
import { Checked, Close, Delete } from "../../../../icon/icon-ui";
import {IconSelector, TxtLabelInput} from "./";
const SocialCardEditor = ({ name, icon, url, id, title, updating = false, iconList, faw }) => {
  const Faw = faw
  return (
    <div className="card-maker">
      <div className="card-edit-title">
        <h2 className="txt">{title}</h2>
      </div>
      <div className="card-body">
        <IconSelector
          list={{ ...iconList }}
          active={"facebook"}
          item={Faw}
          cls={"secondary"}
        ></IconSelector>
        <TxtLabelInput
          placeholder="Nom"
          divCls="input-wrap secondary"
          labelCls="label text-left"
          id="name"
          inputCls="input-txt secondary"
        />
        <TxtLabelInput
          placeholder="https://..."
          divCls="input-wrap secondary"
          labelCls="label text-left"
          id="url"
          inputCls="input-txt secondary"
        />
      </div>
      <div className="card-footer">
        <div className="btn-group">
          {updating ? (
            <>
              <button
                className="btn danger"
                onClick={() => action({ type: "delete", id })}
              >
                <Delete cls="icon w-6" />
              </button>
              <button className="btn grey" onClick={() => action({ type: "close" })}>
                <Close cls="icon w-6" />
              </button>
              <button
                className="btn success"
                onClick={() => action({ type: "put", data: {icon,name,id,url} })}
              >
                <Checked cls="icon w-6" />
              </button>
            </>
          ) : (
            <>
              <button className="btn danger" onClick={() => action({ type: "close" })}>
                <Close cls="icon w-6" />
              </button>
              <button
                className="btn success"
                onClick={() => action({ type: "post", data: {icon,name,id,url} })}
              >
                <Checked cls="icon w-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialCardEditor;
