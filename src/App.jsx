import { Home } from "./pages/Home";
import { Photos } from "./pages/Photos";
import { AboutProject } from "./pages/AboutProject";
import { AboutHistory } from "./pages/AboutHistory";
import { RouteMap } from "./pages/RouteMap";
import { AboutNature } from "./pages/AboutNature";
import { AboutCulture } from "./pages/AboutCulture";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Modal } from "./components/Modal";

function App() {
  return (
    <>
      <Modal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/about-project" element={<AboutProject />} />
          <Route path="/about-history" element={<AboutHistory />} />
          <Route path="/about-nature" element={<AboutNature />} />
          <Route path="/about-culture" element={<AboutCulture />} />
          <Route path="/route-map" element={<RouteMap />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
