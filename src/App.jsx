import { Route, Routes, useRoutes } from "react-router-dom"

import RegisterPage from "./Pages/RegisterPage/RegisterPage"

import HomePage from "./Pages/HomePage/HomePage"
import MoviePage from "./Pages/MoviePage/MoviePage"
import GenrePage from "./Pages/GenrePage/GenrePage"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<RegisterPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/genre" element={<GenrePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/movie" element={<MoviePage/>}/>
      <Route path="*" element={<h1>404 Route not found</h1>}/>
    </Routes>
  )
}

export default App
