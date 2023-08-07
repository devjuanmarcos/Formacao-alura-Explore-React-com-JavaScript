import Footer from "components/Footer";
import Menu from "./components/Menu";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "pages/Post";
import PadraoPage from "components/PadraoPage";
import NotFound from "pages/NotFound";

console.log(window.location);

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route
            path='/'
            element={<PadraoPage />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path='about'
              element={<About />}
            />
          </Route>
          <Route
            path='posts/:id/*'
            element={<Post />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
