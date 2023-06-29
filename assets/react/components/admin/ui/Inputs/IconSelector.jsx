
import React, { useState } from "react";
import { Expand } from "../../../../icon/icon-ui";
import { Faw } from "../../../main/ui/Faw";

const IconSelector = ({ cls, list, active, children, action }) => {
  const [toggle, setToggle] = useState(false);
  const [lastEvent, setLastEvent] = useState(null);
  // mise en place de l'élément actif par défaut (prop active obligatoire)
  if (!list) {
    return null;
  }
  const landing = active;

  const toggleSelect = e => {
    e.stopPropagation();
    let $el = e.target;
    while ($el.classList.contains("selector") == false) {
      $el = $el.parentNode;
    }
    if ((e.type === "click" && lastEvent === "click") || e.type !== "click") {
      setToggle(!toggle);
      lastEvent === "click" && toggle === true ? $el.blur() : null;
    }
    setLastEvent(e.type);
  };

  const changeValue = (e, v) => {
    e.preventDefault();
    toggleSelect(e);
    action(v);
  };

  return (
    <div
      className={
        (cls ? "selector icon " + cls : "selector icon") + (toggle ? " opened" : "")
      }
      onFocus={toggleSelect}
      onBlur={toggleSelect}
      tabIndex={-1}
    >
      {children}
      <div
        className="opt active"
        value={active}
        onClick={toggle ? toggleSelect : null}
      >
        <Faw icon={landing} cls="icon-value" />
        <Expand cls="icon indicate" />
      </div>
      {toggle ? (
        <div className="opt-wrapper">
          {Object.entries(list).map(([key, icon], k) => (
            
            // l'id de l'élément choisi est directement envoyé dans "action" (function à passer en prop)
            <div
              key={k}
              className="opt"
              onClick={e => changeValue(e,key)}
            >
              <Faw icon={"fa-brands "+icon} className="icon-value"/>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default IconSelector;
