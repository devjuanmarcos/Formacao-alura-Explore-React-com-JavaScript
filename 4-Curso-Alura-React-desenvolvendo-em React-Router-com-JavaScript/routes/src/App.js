import About from "./pages/About";
import Home from "./pages/Home";

console.log(window.location);

const page = window.location.pathname === "/" ? <Home /> : <About />;

export default function App() {
  return page;
}
