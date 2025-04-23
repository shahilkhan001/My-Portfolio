import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      <FaGithub />
      <FaLinkedin />

    </div>
  );
}

export default App;
