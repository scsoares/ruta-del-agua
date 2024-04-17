import { Home } from "./pages/Home";
import { Photos } from "./pages/Photos";
import { AboutProject } from "./pages/AboutProject";
import { AboutRoute } from "./pages/AboutRoute";
import { RouteMap } from "./pages/RouteMap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/about-project" element={<AboutProject />} />
          <Route path="/about-route" element={<AboutRoute />} />
          <Route path="/route-map" element={<RouteMap />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
