import Footer from "components/Footer";
import Menu from "./components/Menu";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

console.log(window.location);

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='*'
            element={<div>Página não encontrada</div>}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
