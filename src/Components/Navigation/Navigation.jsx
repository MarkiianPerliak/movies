import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Navigation.module.css"

export const Navigation = () => {
  return (
    <div>
        <NavLink className={({isActive}) => isActive ? s.activelink : s.link} to={"/"}>Home</NavLink>
        {/* <NavLink to={"/content"}>Content</NavLink> */}
        {/* <NavLink to={"/search"}>Posts</NavLink> */}
        <NavLink className={({isActive}) => isActive ? s.activelink : s.link} to={"/movies"}>Movies</NavLink>
    </div>
  )
}