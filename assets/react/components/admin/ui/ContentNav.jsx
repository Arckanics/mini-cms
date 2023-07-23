import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  capitalize,
  getPropsBoolStatus,
  isArray,
  strNormalize,
} from "../../../Functions/app";
import { NumberInput, Checkbox, SwitchInput, Selector } from "./Inputs";
import { ActionsRow } from "./";
import { Filter, Success, Close } from "../../../icon/icon-ui";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { pushData } from "../redux/reducers/ajaxSlice";

const ContentNav = ({ header, update, remove, create, dataName }) => {
  const [search, updateSearch] = useState(null);
  const ajaxData = useSelector(state => state.ajax.data);
  const dispatch = useDispatch()
  const [navSearch, setNavSearch] = useState(false);
  const dataState = useSelector(state => state.ajax.data[dataName])

  useEffect(() => {
    // initiation des filtres
    const sFields = {};
    header.map(
      h =>
        (sFields[h.tag] =
          h.tag !== "page"
            ? {
                value:
                  h.draw === "number" ? 0 : h.draw.match(/^bool/) ? false : "",
                active: false,
              }
            : {
                value: [...ajaxData[h.tag + "s"]].map((el, i) => ({
                  ...el,
                  filtered: i == 0 ? true : false,
                })),
                active: false,
              })
    );
    updateSearch({ ...sFields });
  }, []);

  // remise dans l'ordre après le drag n drop
  const ordering = (startIndex, endIndex) => {
    const results = [...dataState]
    const [removed] = results.splice(startIndex, 1)
    results.splice(endIndex, 0, removed)

    dispatch(pushData({ name: dataName, data: results }))
  }

  
  const dragEnd = (res) => {
    ordering(res.source.index, res.destination.index)
  }

  // format les donnée pour affichage
  const setView = (value, set = "value", tag) => {
    switch (true) {
      case new RegExp(/^object\..+/g).test(set):
        let name = set.split(".")[set.split(".").length - 1];
        return capitalize(ajaxData[`${tag}s`][Number(value) - 1][name]);
      case new RegExp(/^bool/g).test(set):
        return value ? (
          <Success cls="h-6 w-6 m-auto icon success" />
        ) : (
          <Close cls="h-6 w-6 m-auto icon false" />
        );
      case new RegExp(/^num/g).test(set):
      case new RegExp(/^str/g).test(set):
      default:
        return typeof value === "string" ? capitalize(value) : value;
    }
  };

  // update des filtres de recherches
  const searchHandleChange = (e, field, value) => {
    e.stopPropagation();
    switch (field) {
      case "sort":
        value =
          value < 0 || value == ""
            ? 0
            : value > data.length - 1
            ? data.length - 1
            : value;
        break;
      default:
        break;
    }
    updateSearch({ ...search, [field]: { ...search[field], value: value } });
  };

  // update des filtres de recherches ( spécifique à une liste d'élément attribut "filtered")
  const updateArrayFilter = (value, tag) => {
    const array = [...search[tag].value];
    updateSearch({
      ...search,
      [tag]: {
        ...search[tag],
        value: array.map(el => ({
          ...el,
          filtered: el.id === value ? true : false,
        })),
      },
    });
  };

  // rendu sans filtres
  const basicRender = data =>
    data.map((field, k) => {
      const id = `row-${field.id}`
      return (
        <Draggable key={id} draggableId={id} index={k}>
          {(provided, snapshot) => (
            <div>
              <div 
                className={"content-row" + (snapshot.isDragging ? " dragging" : "") + (snapshot.isDropAnimating ? " dropping" : "")}
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                {...provided.draggableProps}
              >
                {header.map(({ tag, draw, colSize, mobile }, k) => (
                  <div
                    key={k}
                    className={
                      `row-field colsize-${colSize}` +
                      (!mobile ? " mobile" : "")
                    }
                  >
                    {setView(field[tag], draw, tag)}
                  </div>
                ))}
                <div className={`row-field action-field colsize-2 mobile`}>
                  <ActionsRow
                    id={k}
                    update={() => update(field.id)}
                    remove={() => remove(field.id)}
                  />
                </div>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Draggable>
      );
    });

  // rendu avec filtres
  const filterRender = data => {
    const searchFilter = {};

    for (const [k, v] of Object.entries(search)) {
      if (v.active) {
        searchFilter[k] = v.value;
      }
    }

    return data.map((field, k) => {
      const id = `row-${field.id}`
      for (const [k, v] of Object.entries(searchFilter)) {
        switch (typeof v) {
          case "string":
            if (
              !strNormalize(field[k]).match(strNormalize(v)) &&
              v.length > 0
            ) {
              return null;
            }
            break;
          case "number":
            if (v !== field[k]) {
              return null;
            }
            break;
          case "boolean":
            if (v === true && !field[k]) {
              return null;
            }
            if (v === false && field[k]) {
              return null;
            }
          case "object":
            if (isArray(v)) {
              const filter = v.find(el => el.filtered).id;
              if (field[k] !== filter) {
                return null;
              }
            }
          default:
            break;
        }
      }

      return (
        <Draggable key={id} draggableId={id} index={k}>
          {(provided, snapshot) => (
            <div>
              <div 
                className={"content-row" + (snapshot.isDragging ? " dragging" : "") + (snapshot.isDropAnimating ? " dropping" : "")}
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                {...provided.draggableProps}
              >
                {header.map(({ tag, draw, colSize, mobile }, k) => (
                  <div
                    key={k}
                    className={
                      `row-field colsize-${colSize}` +
                      (!mobile ? " mobile" : "")
                    }
                  >
                    {setView(field[tag], draw, tag)}
                  </div>
                ))}
                <div className={`row-field action-field colsize-2 mobile`}>
                  <ActionsRow
                    id={k}
                    update={() => update(field.id)}
                    remove={() => remove(field.id)}
                  />
                </div>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Draggable>
      );
    });
  };

  // active un filtre (selon cible utilisateur)
  const toggleFilter = (e, checked) => {
    e.stopPropagation();
    updateSearch({
      ...search,
      [checked]: { ...search[checked], active: !search[checked].active },
    });
  };

  return (
    <section className="content-nav">
      <div className="content-nav-header">
        {header.map((h, k) => (
          <div
            key={k}
            className={
              `header-field colsize-${h.colSize}` + (!h.mobile ? " mobile" : "")
            }
          >
            {capitalize(h.name)}
          </div>
        ))}
        <div className={`header-field colsize-2 action-header mobile`}>
          {capitalize("actions")}
        </div>
      </div>
      <div className="relative">
        <div
          className={
            "btn btn-outline icon-btn secondary mobile-ui" +
            (navSearch ? " toggle" : "")
          }
          onClick={() => setNavSearch(!navSearch)}
        >
          <Filter cls="icon" />
        </div>
        <div className={"content-nav-search" + (navSearch ? " toggle" : "")}>
          {search
            ? header.map((h, k) => {
                let Input;
                const mobile = !h.mobile ? " mobile" : "";
                switch (true) {
                  case new RegExp(/^num/gi).test(h.draw):
                    Input = (
                      <NumberInput
                        cls={`secondary colsize-10 ${mobile}`}
                        inpCls="input-number secondary"
                        change={(e, value) =>
                          searchHandleChange(e, h.tag, value)
                        }
                        value={Number(search[h.tag].value)}
                        name={h.name}
                      />
                    );
                    break;
                  case new RegExp(/^bool/gi).test(h.draw):
                    Input = (
                      <SwitchInput
                        cls={"secondary" + mobile}
                        value={search[h.tag].value}
                        change={e =>
                          searchHandleChange(e, h.tag, !search[h.tag].value)
                        }
                      />
                    );
                    break;
                  case new RegExp(/^obj/gi).test(h.draw):
                    Input = (
                      <Selector
                        cls={"secondary" + mobile}
                        iconCls={"icon"}
                        list={search[h.tag].value}
                        active={search[h.tag].value.find(el => el.filtered).id}
                        action={value => updateArrayFilter(value, h.tag)}
                      />
                    );
                    break;
                  default:
                    Input = (
                      <input
                        type="text"
                        className={"input-txt secondary colsize-10" + mobile}
                        onChange={e =>
                          searchHandleChange(e, h.tag, e.target.value)
                        }
                        placeholder={capitalize(h.name)}
                        value={search[h.tag].value}
                      />
                    );
                }
                return (
                  <div
                    key={k}
                    className={`search-field colsize-${h.colSize} flex justify-items-stretch flex-nowrap ${mobile}`}
                  >
                    <Checkbox
                      cls={"secondary" + mobile}
                      checked={search[h.tag].active}
                      change={e => toggleFilter(e, h.tag)}
                    />
                    {Input}
                  </div>
                );
              })
            : null}
          <div className={`header-field colsize-2 action-search mobile`}></div>
        </div>
      </div>

      <DragDropContext onDragEnd={dragEnd}>
        <Droppable droppableId="content-sort">
          {(provided, snapshot) => (
            <div className="content-inner" ref={provided.innerRef}>
              {!search ||
              (search && !getPropsBoolStatus(search, "active", true))
                ? dataState && isArray(dataState)
                  ? basicRender(dataState)
                  : null
                : dataState && isArray(dataState)
                ? filterRender(dataState)
                : null}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="content-nav-action">
        <div className="btn success" onClick={create}>
          Créer
        </div>
      </div>
    </section>
  );
};

export default ContentNav;
