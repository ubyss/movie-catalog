import React from 'react'

const Input = ({name}) => {
  return (
    <input
    value={name}
    className="input-text"
    type="text"
    placeholder="Nome do Filme"
    name="name"
    onChange={(e) => movieInfo(e)}
  />
  )
}

export default Input