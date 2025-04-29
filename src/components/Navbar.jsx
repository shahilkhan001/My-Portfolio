import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">Shahil.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          {["home", "about", "skills", "projects", "certifications", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-cyan-400 transition duration-300 capitalize"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-cyan-300">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 text-white p-6 rounded-b-xl shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            {["home", "about", "skills", "projects", "certifications", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-cyan-400 transition capitalize"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
