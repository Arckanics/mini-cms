import React, { useState } from "react";



import { FontAwesomeIcon as Faw } from "@fortawesome/react-fontawesome";


const SocialCard = ({ icon, name, url, update, remove, iconList }) => {
  const [editable, setEditable] = useState(false);
  return <div className="card">
    {
    !editable
    ? <>
      <div className="card-icon" >
        <Faw icon={"fa-brands "+iconList[icon]} className="card-icon-svg"/>
      </div>
      <div className="card-name" >
        {name}
      </div>
      <div className="opt" >

      </div>
    </>
    : <></>
    }
  </div>;
};

export default SocialCard;
