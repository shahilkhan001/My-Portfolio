import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="text-xl font-semibold tracking-wide text-white"
        >
          Shahil<span className="text-cyan-400">.dev</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-white transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-cyan-500 text-black font-medium text-sm hover:bg-cyan-400 transition"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-8 text-gray-300">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-white transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 px-6 py-2 rounded-full bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
            >
              Contact
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
