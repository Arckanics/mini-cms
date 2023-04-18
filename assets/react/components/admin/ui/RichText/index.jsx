import React, { useEffect, useState } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { ListNode, ListItemNode } from '@lexical/list'
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import FormatTextGroup from './Actions/FormatTextGroup';
import SizeTextGroup from './Actions/SizeTextGroup';
import ListType from './Actions/ListType';
import AlignText from './Actions/AlignText';
import { ImageNode } from './Nodes/ImageNode'
import InsertImg from './Actions/InsertImg';
import { ImagePlugin } from './plugins/ImagePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateNodesFromDOM, $generateHtmlFromNodes } from '@lexical/html';
import { $getRoot, $insertNodes, $setSelection } from 'lexical';

const theme = {
  paragraph: 'paragraph',
  text: {
    bold: 'text-bold',
    italic: 'text-italic',
    strikethrough: 'text-through',
    underline: 'text-underline',
    underlineStrikethrough: 'text-underline-through',
    superscript: 'text-superscript',
  },
  list: {
    ol: "list-ordered",
    ul: "list-unordered",
    listitem: "list-item"
  },
  image: "image"
}

const InitialHtmlPlugin = ({data,update}) => {
  const [editor] = useLexicalComposerContext()
  const [html, setHtml] = useState(false)


  const updateMData = () => {
    const html = $generateHtmlFromNodes(editor, null)
    update(html)
  }

  editor.registerUpdateListener(({editorState}) => editorState.read(updateMData))

  useEffect(() => {
    
    !html
    ? editor.update(() => {
      const parser = new DOMParser()
      const dom = parser.parseFromString(data, "text/html")

      const nodes = $generateNodesFromDOM(editor, dom)

      $getRoot().select()

      $insertNodes(nodes)
      $setSelection(null)
      setHtml(true)
      
    })
    : null

  }, [editor])
}
// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
const onError = (error) => {
  console.error(error);
}

const Editor = ({ data, update }) => {
  const initialConfig = {
    namespace: 'MyEditor', 
    theme,
    onError,
    nodes: [
      ListNode,
      ListItemNode,
      ImageNode
    ]
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <InitialHtmlPlugin data={data} update={update}/>
      <ListPlugin />
      <HistoryPlugin />
      <ImagePlugin />
      <div className='text-editor'>
        <div className='toolbar-editor'>
          <FormatTextGroup /> <SizeTextGroup /> <ListType />
          <AlignText /> <InsertImg />
        </div>
        <div className='content-editor'>
          <RichTextPlugin
            contentEditable={<ContentEditable className='editor-text'/>}
            placeholder={<div className='editor-placeholder'>Contenu...</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
      </div>
      
    </LexicalComposer>
  );
}

export default Editor;