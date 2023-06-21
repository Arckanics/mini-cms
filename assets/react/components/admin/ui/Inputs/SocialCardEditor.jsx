import React, { useState } from "react";
import { Checked, Close, Delete } from "../../../../icon/icon-ui";
import {IconSelector, TxtLabelInput} from "./";
const SocialCardEditor = ({ name, icon, url, id, title, action, updating = false, iconList, faw }) => {
  const Faw = faw

  const [inputs, setInputs] = useState({name, icon, url})

  const preventDef = (e,req) => {
    e.stopPropagation();
    action(req)
  }

  return (
    <div className="card-maker">
      <div className="card-edit-title">
        <h2 className="txt">{title}</h2>
      </div>
      <div className="card-body">
        <IconSelector
          list={{ ...iconList }}
          active={inputs.icon}
          item={Faw}
          cls={"secondary"}
          action={(e) => setInputs({...inputs, icon: e})}
        ></IconSelector>
        <TxtLabelInput
          placeholder="Nom"
          divCls="input-wrap secondary"
          labelCls="label text-left"
          id="name"
          inputCls="input-txt secondary"
          value={inputs.name}
          onChange={e => setInputs({...inputs, name:e.target.value})}
        />
        <TxtLabelInput
          placeholder="https://..."
          divCls="input-wrap secondary"
          labelCls="label text-left"
          id="url"
          inputCls="input-txt secondary"
          value={inputs.url}
          onChange={e => setInputs({...inputs, url:e.target.value})}
        />
      </div>
      <div className="card-footer">
        <div className="btn-group">
          {updating ? (
            <>
              <button
                className="btn danger"
                onClick={(e) => preventDef(e, { type: "delete", id:id })}
              >
                <Delete cls="icon w-6" />
              </button>
              <button className="btn grey" onClick={(e) => preventDef(e, { type: "close" })}>
                <Close cls="icon w-6" />
              </button>
              <button
                className="btn success"
                onClick={(e) => preventDef(e, { type: "put", data: {icon:inputs.icon,name:inputs.name,id:id,url:inputs.url} })}
              >
                <Checked cls="icon w-6" />
              </button>
            </>
          ) : (
            <>
              <button className="btn danger" onClick={(e) => preventDef(e, { type: "close" })}>
                <Close cls="icon w-6" />
              </button>
              <button
                className="btn success"
                onClick={(e) => preventDef(e, { type: "post", data: {icon:inputs.icon,name:inputs.name,url:inputs.url} })}
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
