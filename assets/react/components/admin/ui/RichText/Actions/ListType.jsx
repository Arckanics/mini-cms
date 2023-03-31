import React, { useEffect, useState } from "react";
import { $getNearestNodeOfType } from "@lexical/utils";
import { $getSelection, $isRangeSelection } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $isListItemNode,
  $isListNode,
  ListNode,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from "@lexical/list";
import BtnFormatText from "./items/BtnFormatText";
import { BulletedList, NumberedList } from "../../../../../icon/text-editor";

const ListType = () => {
  const [editor] = useLexicalComposerContext();
  const [btnStates, setBtnStates] = useState({
    ul: false,
    ol: false,
  });

  const updateBtnStates = () => {
    let prevState = { ...btnStates };
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element = anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        const parentList = $getNearestNodeOfType(anchorNode, ListNode)
        const type = parentList ? parentList.getTag() : element.getType();
        for (let list in prevState) {
          prevState[list] = list == type ? true : false
        }
        setBtnStates(prevState)
      }
    }
  };

  const unorderedList = () => {
    editor.focus();
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND);
  };

  const orderedList = () => {
    editor.focus();
    editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND);
  };

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateBtnStates();
      });
    });
  }, [editor]);

  return (
    <div className="toolbar-item-group">
      <BtnFormatText active={btnStates.ul} command={unorderedList} name="unordered-list" item={BulletedList}/>
      <BtnFormatText active={btnStates.ol} command={orderedList} name="ordered-list" item={NumberedList}/>
    </div>
  );
};
export default ListType;
