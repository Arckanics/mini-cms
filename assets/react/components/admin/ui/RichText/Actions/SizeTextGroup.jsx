import React, { useEffect, useState } from "react";
import { $getSelection, $isRangeSelection } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $patchStyleText, $getSelectionStyleValueForProperty } from "@lexical/selection";
import Dropdown from "./items/Dropdown";
import { FormatSize } from "../../../../../icon/text-editor";

const SizeTextGroup = () => {
  const format = [
    {name: 12, value: "0.75rem"},
    {name: 14, value: "0.875rem"},
    {name: 16, value: null},
    {name: 18, value: "1.125rem"},
    {name: 20, value: "1.25rem"},
    {name: 24, value: "1.5rem"},
    {name: 30, value: "1.875rem"},
    {name: 36, value: "2.25rem"},
  ];
  const [editor] = useLexicalComposerContext();
  const [dropDownState, setDDStates] = useState(16);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  const updateBtnStates = () => {
    const selection = $getSelection();
    let prop = $getSelectionStyleValueForProperty(selection, 'font-size')
    let val = format.find(f => f.value === prop) || format[2]
    setDDStates(val.name);
    val.name != '16' ? setActive(true) : setActive(false)
  };

  const handleSelect = (value) => {
    setToggle(false);
    editor.focus()
    editor.update(() => {
      const selection = $getSelection()
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, {
          'font-size' : value
        })
      }
    })
  }

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateBtnStates();
      });
    });
  }, [editor]);

  return (
    <div className={'toolbar-item-select' + (active ? ' active' : '')}
      title="font-size"
      onFocus={() => setToggle(!toggle)}
      onBlur={() => setToggle(false)}
      tabIndex={-1}
    >
      <div className="item-select-title">{dropDownState}</div>
      <div className="tool-divider"></div>
      <FormatSize cls='icon'/>
      { toggle && <Dropdown item={format} select={handleSelect}/> }
    </div>
  );
};
export default SizeTextGroup;
