import React, { useState } from "react";


import { FontAwesomeIcon as Faw } from "@fortawesome/react-fontawesome";
import { Edit } from "../../../../icon/icon-ui";
import SocialCardEditor from "./SocialCardEditor";


const SocialCard = ({ icon, name, url, id, action, iconList, children }) => {
  const [editable, setEditable] = useState(false);

  const getAction = (e) => {
    e.type === 'close'
    ? setEditable(false)
    : action(e)
  }

  return <div className={"card" + (editable ? ' edit-mode' : '')}>
    {
    !editable
    ? <>
      <div className="card-icon" >
        <Faw icon={"fa-brands "+iconList[icon]} className="card-icon-svg"/>
      </div>
      <div className="card-name" >
        {name}
      </div>
      <div className="btn-group" >
        <button className="btn info" onClick={(e) => setEditable(true)}><Edit cls="icon w-5" /></button>
      </div>
    </>
    : <SocialCardEditor 
    icon={icon}
    id={id}
    name={name}
    url={url}
    updating={true}
    iconList={iconList}
    title={'éditer'}
    faw={Faw}
    action={(e) => getAction(e)}
  />
    }
  </div>;
};

export default SocialCard;
