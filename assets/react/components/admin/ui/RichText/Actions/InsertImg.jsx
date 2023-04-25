import React, { useEffect, useState } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import BtnFormatText from './items/BtnFormatText'
import { INSERT_IMAGE_COMMAND } from '../plugins/ImagePlugin'
import ImgModal from './items/imgModal'
import { $getNodeByKey } from 'lexical'
import { useDispatch, useSelector } from 'react-redux'
import { setImgKey } from '../../../redux/reducers/lexicalSlice'
import { Img } from '../../../../../icon/text-editor'

const InsertImg = () => {
  const [modal, setModal] = useState(false)
  const [editor] = useLexicalComposerContext()
  const [imgProp, setImgProp] = useState({})
  const dispatch = useDispatch()
  const img = useSelector((state) => state.lexical.imgKey)

  useEffect(() => {
    img !== null ? openModal(img) : null
  }, [img])

  const openModal = (key) => {
    if (key) {
      
      editor.getEditorState().read(() => {
        const el = $getNodeByKey(key)
        setImgProp({
          src: el.__src,
          isFile: el.__isFile,
          atEnd: el.__atEnd,
        })
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
    dispatch(setImgKey(null))
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
      atEnd: atEnd
    })
    setModal(false)
  }
  return (
    <div className="toolbar-item-group">
      <BtnFormatText command={openInsertImg} item={Img} />
      {
        modal ? <ImgModal close={closeModal} update={editImg} create={img ? false : true} command={createImg} props={imgProp}/> : null
      }
    </div>
  )
}

export default InsertImg