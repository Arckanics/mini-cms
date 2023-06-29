import React from "react";

import { Edit } from "../../../../icon/icon-ui";
import SocialCardEditor from "./SocialCardEditor";
import { useDispatch, useSelector } from "react-redux";
import { pushData } from "../../redux/reducers/ajaxSlice";
import { Faw } from "../../../main/ui/Faw";


const SocialCard = ({ icon, name, url, id, edit, action, iconList }) => {
  const cards = useSelector(state => state.ajax.data.footer)
  const dispatch = useDispatch()


  const openEditable = () => {
    const remap = [...cards].map(c => ({...c}))
    remap.map(c => {
      c.id == id
      ? c.edit = !edit
      : c.edit = false
      return c
    })
    action({type: 'edit'})
    dispatch(pushData({ name: "footer", data: remap }))
  }

  const getAction = (e) => {
    e.type === 'close'
    ? openEditable()
    : action(e)
  }

  return <div className={"card" + (edit ? ' edit-mode' : '')}>
    {
    !edit
    ? <>
      <div className="card-icon" >
        <Faw icon={icon} cls={"card-icon-svg"}/>
      </div>
      <div className="card-name" >
        {name}
      </div>
      <div className="btn-group" >
        <button className="btn info" onClick={openEditable}><Edit cls="icon w-6" /></button>
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
