import React from 'react'

const Img = ({cls}) => {
  return (
    <svg className={cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
      <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm56-97h489L578 583 446 754l-93-127-117 152Zm-56 97V276v600Z"/>
    </svg>
  )
}

export default Img