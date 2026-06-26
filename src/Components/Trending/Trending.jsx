import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Trending = ({movies}) => {
  // const [films, setFilms] = useState([])

  // useEffect(() => {
  //   setFilms(movies)
  // }, [movies])
  return (
    <div>
      
      <h1>Trending movies</h1>
      <ul>
      {movies?.map(film => {
        return       <li key={film.id}>
        <Link to={`/movies/${film.id}`}>{film.title}</Link>
      </li>
      })}
      </ul>

    </div>
  )
}
