import React, { useState } from "react";



import { FontAwesomeIcon as Faw } from "@fortawesome/react-fontawesome";
import { Edit } from "../../../../icon/icon-ui";


const SocialCard = ({ icon, name, url, update, remove, iconList, opened = false, children }) => {
  const [editable, setEditable] = useState(opened);
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
        <button className="btn info" onClick={(e) => setEditable(true)}><Edit cls="icon w-7" /></button>
      </div>
    </>
    : children
    }
  </div>;
};

export default SocialCard;
