import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Close, Success, Danger, Warning, Delete } from "../../../../icon/icon-ui";
import { isArray } from "../../../../Functions/app";
import { notify, notifyClose } from "../../redux/reducers/notificationSlice";
const ImgExplorer = ({ label, labelCls, divCls, id, value, action }) => {
  // settings
  const types = [
    "image/jpeg",
    "image/png",
    "image/tiff",
    "image/webp",
  ];
  const [target, setTarget] = useState(null);
  // D'nD
  const [isOver, setIsOver] = useState(false);
  const [accepted, setAccepted] = useState(false);

  // xhr
  const [content, setContent] = useState({});
  const [uploading, setUploading] = useState([]);
  const axiosSet = useSelector(state => state.ajax.axios);
  const ajax = axios.create({ ...axiosSet });
  // ui
  const dispatch = useDispatch();

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

  const notifyError = file =>
    dispatch(
      notify({
        msg: `type de fichier ${
          file.type !== "" ? `(${file.type})` : ""
        } n'est pas accepté !`,
        type: "warning",
        timeout: setTimeout(() => dispatch(notifyClose()), 3000),
      })
    );

  const handleDrop = e => {
    prevent(e);
    dropEffect(e);
    const file = e.dataTransfer.files[0];
    if (isOver && accepted) {
      setIsOver(false);
      setAccepted(false);
      setUploading([...uploading, file]);
    } else {
      notifyError(file);
      setIsOver(false);
      setAccepted(false);
    }
  };

  const inputFile = e => {
    const file = e.target.files[0];
    if (types.includes(file.type)) {
      setUploading([...uploading, e.target.files[0]]);
    } else {
      notifyError(file);
    }
  };

  useEffect(() => {
    if (target) {
      ajax.get("/logobrowser").then(({ data }) => {
        setContent({ files: [...data.files], path: data.path });
      });
    }
    if (uploading.length > 0) {
      const newFiles = uploading.filter(file => !file.isUploading);
      newFiles.map((file, i) => {
        const data = new FormData();
        data.append("image", file);
        file.isUploading = true;
        file.upStatus = 0;
        file.ajax = ajax.post("/logobrowser", data, {
          onUploadProgress: e => {
            const state = Math.round(10000 * (e.loaded / e.total)) / 100;
            file.upStatus = state;
            const copy = [...uploading];
            copy[uploading.indexOf(file)] = file;
            setUploading(copy);
          },
        }).then(r => {
          const {data} = r
          dispatch(
            notify({
              msg: `fichier ${file.name} importé !`,
              type: "success",
              timeout: setTimeout(() => dispatch(notifyClose()), 2600),
            })
          );
          const copy = [...uploading];
          copy.splice(uploading.indexOf(file), 1)
          setUploading(copy)
          setContent({...data})
        })
      });
    }
  }, [target, uploading]);

  return (
    <div className={divCls + " img-explorer-container" + ( target ? ' opened' : '')}>
      {label ? (
        <label htmlFor={id ? id : null} className={labelCls}>
          {label}
        </label>
      ) : null}
      <div
        tabIndex={-1}
        id={id ? id : null}
        className={"img-explorer-buttons" + (target ? ' inner-window' : ' gap-3')}
        onFocus={e => setTarget(e.target)}
      >
        {target ? (
          <div className="window-title">
            <div className="shrink">Images</div>
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
          <div className={"btn secondary"}>
            Choisir une image
          </div>
        )}

        {value && !target ? <div className="img-current"><img src={"/uploads/logo/"+value} /></div> : null}
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
                onChange={inputFile}
                accept={types.join(", ")}
              />
            </div>
            <div className="img-uploading">
              {isArray(uploading)
                ? uploading.map((file, k) => (
                    <div key={k} className="upload">
                      <img
                        src={URL.createObjectURL(file)}
                        className="upload-preview"
                      />
                      <div className="upload-status">
                        <hr className="hr" />
                        <div className="upload-name">{file.name}</div>
                        <div className="upload-progress">
                          <div
                            className="progress-bar"
                            data-state={file.upStatus}
                          >
                            <div
                              className="progress-bar-thumb"
                              style={{
                                width: file.upStatus + "%",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <div className="img-content-explore">
              {isArray(content.files) ? (
                content.files.map((file, k) => <div key={k} className={"img-file-view" + (file === value ? " active" : "")}>
                  <figure className="img-view-container">
                    <img src={`${content.path}/${file}`} className="img-view" />
                    <figcaption className="img-label">
                      {file.replace(/^\[.+\]-/gi,'')}
                    </figcaption>
                  </figure>
                  { file === value 
                    ? <div className="btn-group p-2 gap-2">
                      <div className="btn info static"> Actif </div>
                    </div>
                    : <div className="btn-group p-2 gap-2">
                      <button className="btn success" onClick={ () => action(file) }> <Success cls='icon h-6' /> </button>
                      <button className="btn danger"> <Delete cls='icon h-6'/> </button>
                    </div>
                  }
                </div>)
              ) : (
                <div className="no-files-content">
                  <Warning cls="icon" />
                  Aucuns fichers..., pensez à en importer !
                  <Warning cls="icon" />
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImgExplorer;
