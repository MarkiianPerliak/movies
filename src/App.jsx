import { Route, Routes } from "react-router-dom"
import { Navigation } from "./Components/Navigation/Navigation"
import { Home } from "./pages/Home"
import { Movies } from "./pages/Movies"
import { Search } from "./Components/Search/Search"
import { Error } from "./pages/Error"
import { Content } from "./pages/Content"
import { Trending } from "./Components/Trending/Trending"
import { GetMDetails } from "./Components/GetMDetails/GetMDetails"
import { GetMCredits } from "./Components/GetMCredits/GetMCredits"
import { GetMReviews } from "./Components/GetMReviews/GetMReviews"


function App() {

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />}><Route path="/home/search" element={<Search />}></Route></Route>
        <Route path="/content" element={<Content />} />
        <Route path="/movies" element={<Movies/>} ><Route path="/movies/trending" element={<Trending />}></Route></Route>
        {/* <Route path="/movies" element={<Movies/>} ><Route path="/movies/:movieId" element={<GetMDetails />}></Route>
        <Route path="/movies" element={<Movies/>} ><Route path="/movies/:movieId/cast" element={<GetMCredits />}></Route>
        <Route path="/movies" element={<Movies/>} ><Route path="/movies/:movieId/reviews" element={<GetMReviews />}></Route></Route> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App


