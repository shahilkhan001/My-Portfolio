import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";

import "./index.css";

function App() {
  return (
    <div className="font-sans text-white bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact/>
      
    </div>
  );
}

export default App;
