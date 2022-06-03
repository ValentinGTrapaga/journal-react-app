import { BiWorld } from "react-icons/bi";
import React from 'react'

const Header = ({ title }) => {
  return (
    <div id="header">
        <BiWorld className="icon" />
        <h1>{title}</h1>
    </div>
  )
}

export default Header
