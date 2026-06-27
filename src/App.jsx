import { Route, Routes } from "react-router-dom"
import { Navigation } from "./Components/Navigation/Navigation"
import { Home } from "./pages/Home"
import { Movies } from "./pages/Movies"
import { Error } from "./pages/Error"
import { Content } from "./pages/Content"
import { Trending } from "./Components/Trending/Trending"
import { GetMDetails } from "./Components/GetMDetails/GetMDetails"
import { GetMLanguages } from "./Components/GetMLanguages/GetMLanguages"
import { GetMReviews } from "./Components/GetMReviews/GetMReviews"
import { useState, useEffect } from "react"
import {getAPI} from "./API/Movies/GetApi"

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getAPI("popular").then(data => setMovies(data.data.results))
  }, [])

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home  populars={movies}/>} />
        <Route path="/content" element={<Content />} />
        <Route path="/movies/:movieId" element={<GetMDetails />} ><Route path="/movies/:movieId/languages" element={<GetMLanguages />} /><Route path="/movies/:movieId/reviews" element={<GetMReviews />} /></Route>
        {/* <Route path="/movies" element={<Movies/>} ><Route path="/movies/:movieId/cast" element={<GetMCredits />}></Route>
        <Route path="/movies" element={<Movies/>} ><Route path="/movies/:movieId/reviews" element={<GetMReviews />}></Route></Route> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App


