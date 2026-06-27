import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getAPI } from '../../API/Movies/GetApi'

export const GetMLanguages = () => {
  const {movieId} = useParams()
  const [film, setFilm] = useState({})
  
  useEffect(() => {
    console.log(movieId)
    getAPI(movieId).then(data => setFilm(data.data))
  }, [])
  return (
    <div>
      <h3>Spoken Languages</h3>
      <ul>
        {film.spoken_languages?.map(language => {
          return         <li>
          <p>{language.name}</p>
        </li>
        })}
      </ul>
    </div>
  )
}
