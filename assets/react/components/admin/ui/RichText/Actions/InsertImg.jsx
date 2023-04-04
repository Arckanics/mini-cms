import React from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import BtnFormatText from './items/BtnFormatText'
import { INSERT_IMAGE_COMMAND } from '../plugins/ImagePlugin'

const InsertImg = () => {
  const [editor] = useLexicalComposerContext()
  const openInsertImg = () => {
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
      src: "https://picsum.photos/200",
      alt: "lorem picsum"
    })
  }
  return (
    <div className="toolbar-item-group">
      <BtnFormatText command={openInsertImg}/>
    </div>
  )
}

export default InsertImg