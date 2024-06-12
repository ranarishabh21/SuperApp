import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import HomePage from "./Pages/HomePage/HomePage";
import GenrePage from "./Pages/GenrePage/GenrePage";
import MoviePage from "./Pages/MoviePage/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/genre" element={<GenrePage/>} />
        <Route path="/movie" element={<MoviePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
