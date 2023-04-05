import { $getNodeByKey, $setCompositionKey } from "lexical"
import { ImageNode } from "../Nodes/ImageNode"

export const imgMenuHandler = ($event, editor, nodeKey) => {
  editor.update(() => {
    const img = $getNodeByKey(nodeKey)
    img.setAtEnd(!img.getAtEnd())
  })
}