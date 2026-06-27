import React from 'react'
import { useParams } from 'react-router-dom'

export const Error = () => {
  const { "*": wrongPath } = useParams();
  return (
    <div>
      <h1>Error</h1>
      <h2>There is no such directory as "/{wrongPath}"</h2>
    </div>

  )
}