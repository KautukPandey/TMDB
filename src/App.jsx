import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Tv from './pages/Tv'
import Genre from './pages/Genre'
import Detailspage from './pages/Detailspage'
import Searchresults from './pages/SearchResults'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie' element={<Movies/>}/>
        <Route path='/tv' element={<Tv/>}/>
        <Route path="/movie/:id" element={<Detailspage type="movie" />} />
        <Route path="/tv/:id" element={<Detailspage type="tv" />} />
        <Route path="/movie/genre/:genreId" element={<Genre type="movie" />} />
        <Route path="/tv/genre/:genreId" element={<Genre type="tv" />} />
        <Route path='/search/:query' element={<Searchresults/>} />
      </Routes>
    </Router>
  )
}

export default App
