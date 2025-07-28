import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Events from "./pages/Events";
import "maplibre-gl/dist/maplibre-gl.css";
import Map from "./pages/Map";
import Chart from "./pages/Chart";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Chart" element={<Chart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
