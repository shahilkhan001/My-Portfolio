import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Shahil | Frontend Developer";
  }, []);

  return (
  <div className="font-sans text-white bg-black">
    <Navbar />

    <main id="main-content">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>

    <Footer />
  </div>
);

}

export default App;
