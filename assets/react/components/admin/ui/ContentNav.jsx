import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { capitalize, getPropsBoolStatus, isArray, strNormalize } from '../../../Functions/app'
import Success from '../../../icon/icon-ui/Success'
import Close from '../../../icon/icon-ui/Close'
import {
NumberInput,
Checkbox,
SwitchInput,
Selector} from './Inputs'
import { ActionsRow } from './'


const ContentNav = ({ header, data, update, remove, create }) => {
  const [search, updateSearch] = useState(null);
  const ajaxData = useSelector((state) => state.ajax.data)


  useEffect(() => {
    // initiation des filtres
    const sFields = {}
    header.map((h) => 
      sFields[h.tag] = h.tag !== "page" ?
      { value: h.draw === "number" ? 0 : h.draw.match(/^bool/) ? false : "", active: false } :
      { value: [...ajaxData[h.tag+"s"]].map((el,i) => ({...el, filtered: i == 0 ? true : false})), active: false }
      )
    updateSearch({ ...sFields });
  }, [])

  // format les donnée pour affichage
  const setView = (value, set = 'value', tag) => {
    switch (true) {
      case new RegExp(/^object\..+/g).test(set):
        let name = set.split('.')[set.split('.').length - 1]
        return capitalize(ajaxData[`${tag}s`][Number(value) - 1][name])
      case new RegExp(/^bool/g).test(set):
        return value ? <Success cls='h-6 w-6 m-auto icon success' /> : <Close cls='h-6 w-6 m-auto icon false' />
      case new RegExp(/^num/g).test(set):
      case new RegExp(/^str/g).test(set):
      default:
        return typeof value === 'string' ? capitalize(value) : value
    }
  }


  // update des filtres de recherches
  const searchHandleChange = (e, field, value) => {
    e.stopPropagation()
    switch (field) {
      case 'sort':
        value = value < 0 || value == '' ? 0 : value > data.length - 1 ? data.length - 1 : value
        break;
      default:
        break;
    }
    updateSearch({ ...search, [field]: { ...search[field], value: value } })
  }

  // update des filtres de recherches ( spécifique à une liste d'élément attribut "filtered")
  const updateArrayFilter = (value, tag) => {
    const array = [...search[tag].value];
    updateSearch(
      {
        ...search,
        [tag]: {
          ...search[tag],
          value : array.map(el => ({...el, filtered : el.id === value ? true : false}))
        }
      }
    )

  }

  // rendu sans filtres
  const basicRender = (data) => data.map((field, k) => <div key={k} className='content-row'>
    {
      header.map(({ tag, draw, colSize }, k) => <div key={k} className={`row-field colsize-${colSize}`}>{setView(field[tag], draw, tag)}</div>)
    }
    <div className={`row-field action-field colsize-2`}><ActionsRow id={k} update={() => update(field.id)} remove={remove} /></div>
  </div>
  )

  // rendu avec filtres
  const filterRender = (data) => {

    const searchFilter = {}

    for (const [k, v] of Object.entries(search)) {
      if (v.active) {
        searchFilter[k] = v.value
      }
    }

    return data.map((field, k) => {
      for (const [k, v] of Object.entries(searchFilter)) {
        
        switch (typeof v) {
          case 'string':
            if (!strNormalize(field[k]).match(strNormalize(v)) && v.length > 0) {
              return null
            }
            break;
          case "number":
            if (v !== field[k]) {
              return null
            }
            break;
          case "boolean":
            if (v === true && !field[k]) {
              return null
            }
            if (v === false && field[k]) {
              return null
            }
          case "object":
            if (isArray(v)) {
              const filter = v.find(el => el.filtered).id
              if (field[k] !== filter) {
                return null
              }
            }
          default:
            break;
        }
      }

        return <div key={k} className='content-row'>
          {
            header.map(({ tag, draw, colSize }, k) => <div key={k} className={`row-field colsize-${colSize}`}>{setView(field[tag], draw, tag)}</div>)
          }
          <div className={`row-field action-field colsize-2`}><ActionsRow id={k} update={() => update(field.id)} /></div>
        </div>
      }
    )
  }

  // active un filtre (selon cible utilisateur)
  const toggleFilter = (e, checked) => {
    e.stopPropagation();
    updateSearch({ ...search, [checked]: { ...search[checked], active: !search[checked].active } })
  }

  return (
    <section className='content-nav'>
      <div className='content-nav-header'>
        {
          header.map((h, k) => <div key={k} className={`header-field colsize-${h.colSize}`}>{capitalize(h.name)}</div>)
        }
        <div className={`header-field colsize-2`}>{capitalize('actions')}</div>
      </div>
      <div className='content-nav-search'>
        {
          search ?
            header.map((h, k) => {
              let Input;
              switch (true) {
                case new RegExp(/^num/gi).test(h.draw):
                  Input = <NumberInput cls={`secondary colsize-10`} inpCls="input-number secondary"
                    change={(e, value) => searchHandleChange(e, h.tag, value)}
                    value={Number(search[h.tag].value)}
                    name={h.name}
                  />
                  break;
                case new RegExp(/^bool/gi).test(h.draw):
                  Input = <SwitchInput  cls='secondary' value={search[h.tag].value} 
                  change={(e) => searchHandleChange(e, h.tag, !search[h.tag].value)} 
                  />
                  break;
                case new RegExp(/^obj/gi).test(h.draw):
                  Input = <Selector cls='secondary' 
                    list={search[h.tag].value} active={search[h.tag].value.find(el => el.filtered).id} 
                    action={(value) => updateArrayFilter(value, h.tag)}
                  />
                  break;
                default:
                  Input = <input type='text' 
                    className='input-txt secondary colsize-10' 
                    onChange={(e) => searchHandleChange(e, h.tag, e.target.value)} 
                    placeholder={capitalize(h.name)} value={search[h.tag].value} 
                  />
              }
              return <div key={k} className={`search-field colsize-${h.colSize} flex justify-items-stretch flex-nowrap`}>
                <Checkbox cls='secondary' checked={search[h.tag].active} change={(e) => toggleFilter(e, h.tag)} />
                {Input}
              </div>
            }) :
            null
        }
        <div className={`header-field colsize-2`}></div>
      </div>

      <div className='content-inner '>
        {

          !search || search && !getPropsBoolStatus(search, "active", true) 
            ? data && isArray(data) ? basicRender(data) : null 
            : data && isArray(data) ? filterRender(data) : null
        }
      </div>
    </section>
  )
}

export default ContentNav