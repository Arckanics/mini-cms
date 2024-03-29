import React, { useEffect, useState } from "react"
import { $getSelection, $isRangeSelection, FORMAT_ELEMENT_COMMAND } from "lexical"
import { $getSelectionStyleValueForProperty } from "@lexical/selection"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import BtnFormatText from "./items/BtnFormatText"
import { TxtCenter, TxtJustify, TxtLeft, TxtRight } from "../../../../../icon/text-editor"

const AlignText = () => {
  const defaultState = {
    left: false,
    center: false,
    right: false,
    justify: false,
  }
  const [editor] = useLexicalComposerContext()
  const [btnStates, setBtnStates] = useState({...defaultState})

  const icons = {
    left: TxtLeft,
    center: TxtCenter,
    right: TxtRight,
    justify: TxtJustify,
  }

  const updateBtnStates = () => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      let node = selection.anchor.getNode().getTopLevelElement()
      switch (node.getType()) {
        case "paragraph":
          break;
        default:
          node = selection.anchor.getNode()
      }
      node = node.getType() === "text" ? node.getParent() : node
      let value = node.getFormatType() !== "" ? node.getFormatType() : 'left'
      setBtnStates({...defaultState, [value] : true})
    }
  }

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState, tags }) => {
      editorState.read(() => {
        updateBtnStates()
      })
    })
  }, [editor])

  const itemsDispatch = () => {
    let items = []
    let i = 0
    for (let [key, value] of Object.entries(btnStates)) {
      items.push(
        <BtnFormatText
          key={i}
          active={value}
          command={() => {
            editor.focus()
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, key)
          }}
          name={key}
          item={icons[key]}
        />
      )
      i++
    }
    return items
  }
  return (
    <div className="toolbar-item-group">{itemsDispatch().map((i) => i)}</div>
  )
}
export default AlignText
