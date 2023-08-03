import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

console.log(window.location);

const page = window.location.pathname === "/" ? <Home /> : <About />;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
      <Routes>
        <Route
          path='/about'
          element={<About />}
        />
      </Routes>
      <Routes>
        <Route
          path='*'
          element={<div>Página não encontrada</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}
