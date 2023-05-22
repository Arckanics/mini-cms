import React, { useEffect, useState } from "react";
import Close from "../../../icon/icon-ui/Close";
import { DatePicker, Selector, SwitchInput } from "./Inputs";
import { RichText } from "./";

const ModalEditor = ({ data, schema, title, close, command, small }) => {
  const [mData, setData] = useState(null);
  useEffect(() => {
    const empty = {};
    Object.entries(schema).map(([name, par]) => {
      let val;
      switch (par.type) {
        case "string":
        case "text":
          val = "";
          break;
        case "select":
          val = par.list[0].id;
          break;
        case "sorting":
          const last = par.list.length - 1
          val = par.list[last].id ;
          break;
        case "bool":
          val = false;
          break;
        case "date":
          val = new Date();
          val.setHours(0, 0, 0, 0);
          break;
        default:
          val = "";
          break;
      }
      empty[name] = val;
    });

    !data ? setData({ ...empty }) : setData({ ...data });
  }, [data]);

  return !mData ? null : (
    <section className={"modal-editor" + (small ? " small": "")}>
      <div className="title-bar">
        <div className="title-bar-txt">{title}</div>
        <div className="title-bar-close" onClick={close}>
          <Close cls="w-6 h-6" />
        </div>
      </div>
      <div className="modal-window">
        {mData
          ? Object.entries(schema).map(([key, value], i) => {
              let Input;
              switch (value.type) {
                case "string":
                  Input = (
                    <div className="flex gap-3">
                      <label className="input-label p-2 font-bold">
                        {value.name} :
                      </label>
                      <input
                        className="input-txt secondary"
                        type="text"
                        value={mData[key]}
                        placeholder={"..."}
                        onChange={e =>
                          setData({ ...mData, [key]: e.target.value })
                        }
                      />
                    </div>
                  );
                  break;
                case "bool":
                  Input = (
                    <div className="flex gap-3">
                      <label className="input-label p-2 font-bold">
                        {value.name} :
                      </label>
                      <SwitchInput
                        value={mData[key]}
                        change={() => setData({ ...mData, [key]: !mData[key] })}
                      />
                    </div>
                  );
                  break;
                case "sorting":
                case "select":
                  const reKey = key.replace(/s$/g, "");
                  Input = (
                    <div className="flex gap-3">
                      <label className="input-label p-2 font-bold">
                        {value.name} :
                      </label>
                      <Selector
                        cls={"secondary p-0"}
                        iconCls={"icon"}
                        list={value.list}
                        active={mData[reKey]}
                        action={v => setData({ ...mData, [reKey]: v })}
                        sortProp={reKey}
                      />
                    </div>
                  );
                  break;
                case "date":
                  const date = mData[key] || new Date();
                  Input = (
                    <div className="flex gap-3">
                      <label className="input-label p-2 font-bold">
                        {value.name} :{" "}
                      </label>
                      <React.StrictMode>
                      <DatePicker
                        value={date}
                        change={v => {
                          setData({ ...mData, [key]: v });
                        }}
                      />
                      </React.StrictMode>
                    </div>
                  );
                  break;
                default:
                  break;
              }

              return (
                <div key={i} className="modal-field">
                  {Input}
                </div>
              );
            })
          : null}
      </div>
      {Object.entries(schema).map(([k, v], i) => {
        return v.type === "text" ? (
           <RichText
              key={"editor-"+i}
              data={mData[k]}
              update={v => setData({ ...mData, [k]: v })}
            />
        ) : null;
      })}
      <div className="modal-end">
        <div className="btn secondary" onClick={() => {command({...mData}); close()}}>Sauver</div>
      </div>
    </section>
  );
};

export default ModalEditor;
