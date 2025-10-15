import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Tv from './pages/Tv'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/tv' element={<Tv/>}/>
      </Routes>
    </Router>
  )
}

export default App
