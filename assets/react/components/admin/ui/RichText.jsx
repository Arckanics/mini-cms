import React, { useRef, useState } from "react";
import {ContentState, EditorState, handleKeyCommand} from 'draft-js';
import { Editor } from "react-draft-wysiwyg";

const RichText = ({ data }) => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const editor = useRef(null);
  const focusEditor = () => editor.current.focus();


  return (
    <div className="text-editor w-full p-4"
      style={{ cursor: "text" }}
      onClick={focusEditor}
    >
      <Editor
        ref={editor}
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  )
}

export default RichText