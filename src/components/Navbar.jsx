import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Shahil.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li><a href="#home" className="hover:text-teal-400 transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-teal-400 transition duration-300">About</a></li>
          <li><a href="#skills" className="hover:text-teal-400 transition duration-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-teal-400 transition duration-300">Projects</a></li>
          <li><a href="#certifications" className="hover:text-teal-400 transition duration-300">Certifications</a></li>
          <li><a href="#contact" className="hover:text-teal-400 transition duration-300">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#home" className="hover:text-teal-400">Home</a></li>
            <li><a href="#about" className="hover:text-teal-400">About</a></li>
            <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
            <li><a href="#certifications" className="hover:text-teal-400">Certifications</a></li>
            <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
