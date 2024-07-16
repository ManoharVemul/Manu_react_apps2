import React from 'react'

export default function ImageComponent(prop) {
  const {path}=prop
  return (
    <img src={path} alt="name" width={300} height={300} style={{textAlign:"center",left:"30px",display:"inlineBlock"}}/>
  )
}
