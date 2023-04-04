import React from "react";
import { createEditor, DecoratorNode } from "lexical";


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
  __width;
  __height;

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
        width: node.__width, 
        height: node.__height, 
        key: node.__key, 
      }
    );
  }

  constructor(props) {
    const {src,altText,width,height,key} = props
    super(key)
    this.__altText = altText || null
    this.__height = height || "inherit"
    this.__width = width || "inherit"
    this.__src = src
  }

  setWidthAndHeight(width,height) {
    const writable = this.getWritable();
    writable.__width = width;
    writable.__height = height;
  }

  // View

  createDOM(config) {
    const span = document.createElement("span");
    const {theme} = config;
    const className = theme.image;
    if (className !== undefined) {
      span.className = className;
    }
    return span;
  }

  updateDOM() {
    return false;
  }

  getSrc() {
    return this.__src;
  }

  getAltText() {
    return this.__altText;
  }

  decorate() {
    const {__width, __height, __src, __altText} = this
    return (
        <img
          src={__src}
          alt={__altText}
          style={{
            width:__width,
            height:__height
          }}
        />
    )
  }

}


export const $createImageNode = ({
  altText,
  height,
  src,
  width,
  key
}) => {
  return new ImageNode({
    src,
    altText,
    width,
    height,
    key
  });
}

export function $isImageNode(node) {
  return node instanceof ImageNode;
}