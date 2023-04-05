import React from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { ListNode, ListItemNode } from '@lexical/list'
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { NodeEventPlugin } from '@lexical/react/LexicalNodeEventPlugin'
import FormatTextGroup from './Actions/FormatTextGroup';
import SizeTextGroup from './Actions/SizeTextGroup';
import ListType from './Actions/ListType';
import AlignText from './Actions/AlignText';
import { ImageNode } from './Nodes/ImageNode'
import InsertImg from './Actions/InsertImg';
import { ImagePlugin } from './plugins/ImagePlugin';
import { imgMenuHandler } from './Events/imgs';

const theme = {
  paragraph: 'paragraph',
  text: {
    bold: 'text-bold',
    italic: 'text-italic',
    strikethrough: 'text-through',
    underline: 'text-underline',
    underlineStrikethrough: 'text-underline-through'
  },
  list: {
    ol: "list-ordered",
    ul: "list-unordered",
    listitem: "list-item"
  },
  image: "image"
}


// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}

function Editor() {
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
      
      <ListPlugin />
      <HistoryPlugin />
      <ImagePlugin />
      <NodeEventPlugin 
        nodeType={ImageNode}
        eventType='click'
        eventListener={($e, e, n) => imgMenuHandler($e, e, n)}
      />
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