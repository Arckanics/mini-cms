import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Close } from '../../../../icon/icon-ui'
const ImgExplorer = ({ label , labelCls, divCls, id, value }) => {

  const [target, setTarget] = useState(null)
  const [list, setList] = useState(null)
  const [path, setPath] = useState(null)
  const axiosSet = useSelector(state => state.ajax.axios);
  const ajax = axios.create({ ...axiosSet });

  useEffect(() => {
    if (target) {
      ajax.get('/logobrowser').then(({data}) => {
        setList([...data.files])
        setPath(data.path)
      })
    }
  }, [target])

  return (
    <div className={divCls + ' img-explorer-container'}>
      {
        label 
        ? <label htmlFor={(id ? id : null)} className={labelCls}>{label}</label>
        : null
      }
      <div tabIndex={-1} id={(id ? id : null)} 
        className='relative flex items-stretch gap-3' 
        onFocus={(e) => setTarget(e.target)}
        // onBlur={(e) => setTarget(null)}
      >
        
        {
          target 
            ? <div className='window-title'>
              <div>Images</div>
              <div className='close-explorer' onClick={() => {target.blur(); setTarget(null)}}><Close cls={'icon'}/></div>
            </div>
            : <div 
              className={'btn secondary relative grow-1 w-full'}>
              Choisir une image
            </div>
        }
        
        {
          value && !target
          ? <img src={value} />
          : null
        }
        {
          target 
          ? <div className='img-explorer'>
            <div className='drop-zone secondary'>
              <label className="drop-zone-label" htmlFor='dropIn'>Glissez une image ou cliquez ici ...</label>
              <input type="file" id="dropIn" className='hidden' name="dropIn"
                accept="image/jpeg, image/png, image/svg+xml, image/tiff, image/webp"/>
            </div>
          </div>
          : null
        }
      </div>
    </div>
  )
}

export default ImgExplorer