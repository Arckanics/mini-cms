import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const ImgExplorer = ({ label , labelCls, divCls, id, value }) => {

  const [target, setTarget] = useState(null)
  const [list, setList] = useState(null)
  const axiosSet = useSelector(state => state.ajax.axios);
  const ajax = axios.create({ ...axiosSet });

  useEffect(() => {
    const path = '/logobrowser'
    if (target) {
      ajax.get(path).then((r) => {
        console.log(r);
      })
    }
  }, [target])

  return (
    <div className={divCls}>
      {
        label 
        ? <label htmlFor={(id ? id : null)} className={labelCls}>{label}</label>
        : null
      }
      <div tabIndex={-1} id={(id ? id : null)} 
        className='relative' 
        onFocus={(e) => setTarget(e.target)}
        onBlur={(e) => setTarget(null)}
      >
        { 
          !value 
          ? <div className='btn secondary' >Choisir une image</div>
          : null
        }
        {
          target 
          ? <div className='imgExplorer'>
            
          </div>
          : null
        }
      </div>
    </div>
  )
}

export default ImgExplorer