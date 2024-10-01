import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./globals.css";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import FAQ from "../src/components/FAQ";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Events from "./pages/events/Events";
import "acm-cs-sjsu-hero-component/dist/styles.css";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </Router>
        <div className="flex">
          <FAQ />
        </div>
        <Footer />
      </div>
    </>
  );
}
