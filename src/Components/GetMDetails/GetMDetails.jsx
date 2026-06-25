import React from 'react'
import { useParams } from 'react-router-dom'

export const GetMDetails = () => {
  const {movieId} = useParams()
  return (
    <div>GetMDetails</div>
  )
}
