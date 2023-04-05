import React from "react";
import { createEditor, DecoratorNode } from "lexical";
import Image from "./components/Image";


const convertImgElement = (domNode) => {
  if (domNode instanceof HTMLImageElement) {
    const { alt: altText, src } = domNode
    return { node: $createImageNode({ altText, src }) }
  }
  return null
}

export class ImageNode extends DecoratorNode {
  __src;
  __altText;
  __atEnd;

  exportDOM() {
    const el = document.createElement('img')
    el.setAttribute("src", this.__src)
    el.setAttribute("alt", this.__altText)
    return { element: el }
  }

  static importDOM() {
    return {
      img: (node) => ({
        conversion: convertImgElement,
        priority: 0
      })
    }
  }

  static getType() {
    return "image";
  }

  static clone(node) {
    return new ImageNode(
      { 
        src: node.__src,
        altText: node.__altText,
        key: node.__key,
      }
    );
  }

  constructor(props) {
    const {src,altText,key,atEnd} = props
    super(key)
    this.__altText = altText || null
    this.__src = src
    this.__atEnd = atEnd || false
  }

  // View

  createDOM(config) {
    const span = document.createElement("div");
    const {theme} = config;
    const className = theme.image;
    if (className !== undefined) {
      span.className = className;
    }
    if (this.__atEnd) {
      span.className += " at-end"
    }
    return span;
  }

  updateDOM() {
    return true;
  }

  getSrc() {
    return this.__src;
  }

  getAltText() {
    return this.__altText;
  }

  getAtEnd() {
    return this.__atEnd;
  }

  setAtEnd(set) {
    const self = this.getWritable()
    self.__atEnd = set;
  }

  decorate() {
    const {__src, __altText} = this
    return (
        <Image 
          src={__src}
          alt={__altText}
        />
    )
  }

}


export const $createImageNode = ({
  altText,
  src,
  key
}) => {
  return new ImageNode({
    altText,
    src,
    key
  });
}

export function $isImageNode(node) {
  return node instanceof ImageNode;
}