import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Close, Success, Danger, Warning } from "../../../../icon/icon-ui";
import { isArray } from "../../../../Functions/app";
const ImgExplorer = ({ label, labelCls, divCls, id, value }) => {
  const [target, setTarget] = useState(null);
  const [content, setContent] = useState(null);
  const types = [
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
  ];
  const [isOver, setIsOver] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const axiosSet = useSelector(state => state.ajax.axios);
  const ajax = axios.create({ ...axiosSet });

  const prevent = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  const dropEffect = e => (e.dataTransfer.dropEffect = "copy");
  const dragOver = e => {
    prevent(e);
    dropEffect(e);
    if (e.type == "dragenter") {
      setIsOver(true);
      if (e.dataTransfer.types.includes("Files")) {
        const file = e.dataTransfer.items[0];
        if (types.includes(file.type)) {
          setAccepted(true);
        }
      }
    }

    if (e.type == "dragleave") {
      setIsOver(false);
      setAccepted(false);
    }
  };

  const handleDrop = e => {
    prevent(e);
    console.log(e.dataTransfer.files);
  };

  useEffect(() => {
    if (target) {
      ajax.get("/logobrowser").then(({ data }) => {
        setContent({items: [...data.files], path: data.path});
      });
    }
  }, [target]);

  return (
    <div className={divCls + " img-explorer-container"}>
      {label ? (
        <label htmlFor={id ? id : null} className={labelCls}>
          {label}
        </label>
      ) : null}
      <div
        tabIndex={-1}
        id={id ? id : null}
        className="relative flex items-stretch gap-3"
        onFocus={e => setTarget(e.target)}
      >
        {target ? (
          <div className="window-title">
            <div>Images</div>
            <div
              className="close-explorer"
              onClick={() => {
                target.blur();
                setTarget(null);
              }}
            >
              <Close cls={"icon"} />
            </div>
          </div>
        ) : (
          <div className={"btn secondary relative grow-1 w-full"}>
            Choisir une image
          </div>
        )}

        {value && !target ? <img src={value} /> : null}
        {/* drop files zone */}
        {target ? (
          <div className="img-explorer">

            
            <div
              className={
                "drop-zone secondary" +
                (isOver ? (accepted ? " success" : " danger") : "")
              }
            >
              <label
                className="drop-zone-label"
                htmlFor="dropIn"
                onDragEnter={dragOver}
                onDragOver={dragOver}
                onDragLeave={dragOver}
                onDrop={handleDrop}
              >
                {!isOver ? (
                  "Glissez une image ou cliquez ici ..."
                ) : accepted ? (
                  <Success cls="icon success" />
                ) : (
                  <Danger cls="icon false" />
                )}
              </label>
              <input
                type="file"
                id="dropIn"
                className="hidden"
                name="dropIn"
                accept={types.join(", ")}
              />
            </div>
            <div className="img-content-explore">
              {
                isArray(content)
                ? content.map(() => <></>)
                : <div
                  className="no-files-content"
                >
                  <Warning cls="icon" />
                  Aucuns fichers..., pensez à en importer !
                  <Warning cls="icon" />
                </div>
              }
            </div>
          </div>
        ) : null}
        
      </div>
    </div>
  );
};

export default ImgExplorer;
