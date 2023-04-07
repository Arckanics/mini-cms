import React, { useState } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import BtnFormatText from './items/BtnFormatText'
import { INSERT_IMAGE_COMMAND } from '../plugins/ImagePlugin'
import ImgModal from './items/imgModal'
import { $getNodeByKey } from 'lexical'

const InsertImg = ({nodeKey, open}) => {
  const [modal, setModal] = useState(open || false)
  const [editor] = useLexicalComposerContext()
  const [imgProp, setImgProp] = useState({})
  const [img, setImg] = useState(nodeKey || null)

  const openModal = (key) => {
    console.log(key);
    if (key) {
      editor.getEditorState().read(() => {
        const el = $getNodeByKey(key)
        setImgProp({
          src: {
            isFile: false,
            url: el.__src,
          },
          atEnd: el.__atEnd,
        })
        setImg(key)
      })
    } else {
      setImgProp({
        src: {
          isFile: false,
          url: "",
        },
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
        keys[`__${name}`] = name === "src" ? value.url : value
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
    const { src, atEnd } = imgProp
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
      src: src.url,
      alt: null,
      atEnd: atEnd,
      click: openModal
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