import React from 'react'
import { Trending } from '../Components/Trending/Trending'

export const Home = ({populars}) => {
  return (
    <div>
      <h1>Home</h1>
      <Trending movies={populars}/>
    </div>
  )
}
