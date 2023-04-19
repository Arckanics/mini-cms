import React, { useState } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import BtnFormatText from './items/BtnFormatText'
import { INSERT_IMAGE_COMMAND } from '../plugins/ImagePlugin'
import ImgModal from './items/imgModal'
import { $getNodeByKey } from 'lexical'
import { openModalHandler } from './Event/img'

const InsertImg = ({nodeKey, open}) => {
  const [modal, setModal] = useState(open || false)
  const [editor] = useLexicalComposerContext()
  const [imgProp, setImgProp] = useState({})
  const [img, setImg] = useState(nodeKey || null)

  const openModal = (key) => {
    if (key) {
      
      editor.getEditorState().read(() => {
        const el = $getNodeByKey(key)
        setImgProp({
          src: el.__src,
          isFile: el.__isFile,
          atEnd: el.__atEnd,
        })
        setImg(key)
      })
    } else {
      setImgProp({
        src: "",
        isFile: false,
        atEnd: false,
      })
    }
    setModal(true)
  }

  const editImg = ({name,value}) => {
    
    if (img) {
      editor.update(() => {
        const el = $getNodeByKey(img)
        const keys = el.getWritable()
        keys[`__${name}`] = value
      })
    }
    
    setImgProp({
      ...imgProp,
      [name] : value
    })
  }

  const closeModal = () => {
    setModal(false)
    setImg(null)
  }

  const openInsertImg = () => {
    openModal(null)
  }

  const createImg = () => {
    const { src, atEnd, isFile } = imgProp
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
      src: src,
      alt: null,
      isFile: isFile,
      atEnd: atEnd,
      click: openModalHandler
    })
    setModal(false)
  }
  return (
    <div className="toolbar-item-group">
      <BtnFormatText command={openInsertImg}/>
      {
        modal ? <ImgModal close={closeModal} update={editImg} create={img ? false : true} command={createImg} props={imgProp}/> : null
      }
    </div>
  )
}

export default InsertImg