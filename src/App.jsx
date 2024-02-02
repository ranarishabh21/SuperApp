import { Route, Routes, useRoutes } from "react-router-dom"
import Register from './Pages/Register'
import Info from './Pages/Info'
import Showcase from './Pages/Showcase'
import Movies from './Pages/Movies'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/info" element={<Info/>}/>
      <Route path="/showcase" element={<Showcase/>}/>
      <Route path="*" element={<h1>404 Route not found</h1>}/>
    </Routes>
  )
}

export default App
