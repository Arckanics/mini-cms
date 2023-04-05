import React, { useEffect } from "react"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { $wrapNodeInElement, mergeRegister } from "@lexical/utils"
import {
  $createParagraphNode,
  $insertNodes,
  $isRootOrShadowRoot,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
} from "lexical"

import { $createImageNode, ImageNode } from "../Nodes/ImageNode"

const INSERT_IMAGE_COMMAND = createCommand("INSERT_IMAGE_COMMAND")

const ImagePlugin = () => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    if (!editor.hasNodes([ImageNode])) {
      throw new Error("ImagesPlugin: ImageNode not registered on editor")
    }

    return mergeRegister(
      editor.registerCommand(
        INSERT_IMAGE_COMMAND,
        (payload) => {
          const imgNode = $createImageNode(payload);
          $insertNodes([imgNode])
          if ($isRootOrShadowRoot(imgNode.getParentOrThrow())) {
            $wrapNodeInElement(imgNode, $createParagraphNode).selectEnd();
          } 

          return true
        },
        COMMAND_PRIORITY_EDITOR
      )
    )
  }, [editor])

  return null
}

export { INSERT_IMAGE_COMMAND, ImagePlugin }