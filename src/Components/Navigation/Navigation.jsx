import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/content"}>Content</Link>
        <Link to={"/search"}>Posts</Link>
        <Link to={"/movies"}>Posts</Link>
    </div>
  )
}