import React, { useEffect, useState } from "react";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const SizeTextGroup = () => {
  const format = {
    12: "xs",
    14: "sm",
    16: "base",
    18: "lg",
    20: "xl",
    24: "2xl",
    30: "3xl",
    36: "4xl",
  };
  const [editor] = useLexicalComposerContext();
  const [btnStates, setBtnStates] = useState({...format});

  const updateBtnStates = () => {
    let prevState = { ...btnStates };
    const selection = $getSelection();
    let node = selection;
    if ($isRangeSelection(selection)) {
      node = selection.getNodes()[0];
    }
    for (let [key, value] of Object.entries(prevState)) {
      prevState[key] = node.hasFormat(key);
    }
    setBtnStates({ ...prevState });
  };

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateBtnStates();
      });
    });
  }, [editor]);

  const itemsDispatch = () => {
    let items = [];
    let i = 0;
    for (let [key, value] of Object.entries(btnStates)) {
      items.push(
        <BtnFormatText
          key={i}
          active={value}
          command={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, key)}
          name={key}
        />
      );
      i++;
    }
    return items;
  };
  return (
    <div className="toolbar-item-group">{itemsDispatch().map((i) => i)}</div>
  );
};
export default SizeTextGroup;
