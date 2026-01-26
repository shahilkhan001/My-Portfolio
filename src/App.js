import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
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
      <Services />
      <Projects />
      <Certifications />
      <CTA />
      <Contact />
    </main>

    <Footer />
  </div>
);

}

export default App;
