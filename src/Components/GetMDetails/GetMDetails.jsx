import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getAPI } from '../../API/Movies/GetApi'

export const GetMDetails = () => {
  const {movieId} = useParams()
  const [film, setFilm] = useState({})
  
  useEffect(() => {
    console.log(movieId)
    getAPI(movieId).then(data => setFilm(data.data))
  }, [])
  return (
    <div>
      <Link to={`/`}>Go back</Link>
      <div style={{ display: "flex" }}>
        <img style={{ width: "300px" }} src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="image" />
        <ul>
          <li>
            <h2>{film.title} ({film.release_date})</h2>
            <p>User Score: {film.vote_average * 10}%</p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{film.overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>{film.genres?.map(genre => genre.name).join(", ")}</p>
          </li>
        </ul>
      </div>
      <p>Additional info</p>
      <ul>
        <li><Link to={`/movies/${film.id}/cast`}>Cast</Link></li>
        <li><Link to={`/movies/${film.id}/reviews`}>Reviews</Link></li>
      </ul>
    </div>
  )
}
