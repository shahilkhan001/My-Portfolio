import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import FitZone from "./projects/fitzone/FitZone";

function App() {
  useEffect(() => {
    document.title = "Shahil | Frontend Developer";
  }, []);

  return (
    <Routes>
      {/* Portfolio */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Services />
              <Projects />
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </>
        }
      />

      <Route path="/fitzone" element={<FitZone />} />
    </Routes>
  );
}

export default App;
