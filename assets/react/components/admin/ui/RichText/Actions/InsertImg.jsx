import React, { useState } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import BtnFormatText from './items/BtnFormatText'
import { INSERT_IMAGE_COMMAND } from '../plugins/ImagePlugin'
import ImgModal from './items/imgModal'
import { $getNodeByKey } from 'lexical'

const InsertImg = () => {
  const [modal, setModal] = useState(false)
  const [editor] = useLexicalComposerContext()
  const [imgProp, setImgProp] = useState({})

  const openModal = (key) => {
    editor.getEditorState().read(() => {
      const el = $getNodeByKey(key)
      setImgProp({src:el.__src,atEnd:el.__atEnd})
      setModal(true)
      console.log(imgProp);
    })
    
    
  }

  const closeModal = () => {
    setModal(false)
  }

  const openInsertImg = () => {
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
      src: "https://picsum.photos/200",
      alt: "lorem picsum",
      click: openModal
    })
  }
  return (
    <div className="toolbar-item-group">
      <BtnFormatText command={openInsertImg}/>
      {
        modal ? <ImgModal close={closeModal}/> : null
      }
    </div>
  )
}

export default InsertImg