import React, { useEffect, useState } from 'react'
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from 'lexical'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import BtnFormatText from './items/BtnFormatText'
import {Bold,Italic,Strike,SuperScript, Underline} from '../../../../../icon/text-editor/'



const FormatTextGroup = () => {
  const [editor] = useLexicalComposerContext()
  const [btnStates, setBtnStates] = useState({
    bold: false,
    italic: false,
    superscript: false,
    underline: false,
    strikethrough: false,
  })

  const icons = {
    bold: Bold,
    italic: Italic,
    superscript: SuperScript,
    underline: Underline,
    strikethrough: Strike,
  }

  const updateBtnStates = () => {
    let prevState = {...btnStates}
    const selection = $getSelection()
    let node = selection
    if ($isRangeSelection(selection)) {
      node = selection.getNodes()[0]
    }
    for (let [key,value] of Object.entries(prevState)) {
      prevState[key] = node.hasFormat(key);
    }
    setBtnStates({...prevState})
  }

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateBtnStates()
      })
    })
  }, [editor])

const itemsDispatch = () => {
  let items = []
  let i = 0
  for (let [key,value] of Object.entries(btnStates)) {
    items.push(
      <BtnFormatText 
        key={i}
        active={value} 
        command={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, key)}
        name={key}
        item={icons[key]}
      />
    )
    i++
  }
  return items
}
  return (<div className='toolbar-item-group'>
    {
      itemsDispatch().map(i => i)
    }
  </div>)
}
export default FormatTextGroup