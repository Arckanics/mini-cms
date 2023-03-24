import React, { useEffect, useRef, useState } from "react";
import {ContentState, EditorState, handleKeyCommand} from 'draft-js';
import { Editor } from "react-draft-wysiwyg";

const RichText = ({ data, change }) => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  );

  useEffect(() => {
  })

  const editor = useRef(null);
  const focusEditor = () => editor.current.focus();

  const updateContent = (e) => {
    
    setEditorState(e)
  }


  return (
    <div className="text-editor w-full"
      onClick={focusEditor}
    >
      <h1 className="editor-title">Contenu :</h1>
      <Editor
        ref={editor}
        editorState={editorState}
        onEditorStateChange={updateContent}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          options: [
            'inline',
            'fontSize',
            'fontFamily',
            'textAlign',
            'list',
            'link',
            'image',
            'history'
          ],
          textAlign: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: ['left', 'center', 'right', 'justify'],
          }
        }}
      />
    </div>
  )
}

export default RichText