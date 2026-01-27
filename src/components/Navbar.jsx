import { useState, useEffect } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
  ];

  const handleNavClick = (e, href) => {
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div 
        className="absolute top-0 left-0 h-[2px] bg-cyan-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={scrollProgress}
        aria-label="Scroll progress"
      ></div>

      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="#home"
            className="text-2xl font-bold tracking-tighter text-white group"
            onClick={(e) => handleNavClick(e, "#home")}
            aria-label="Shahil Dev Home"
          >
            SHAHIL<span className="text-cyan-400 transition-colors group-hover:text-white">.DEV</span>
          </a>
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => item.href === "#home" && handleNavClick(e, "#home")}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/10 pr-6">
            <a 
              href="https://github.com/shahilkhan001" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Visit Shahil's GitHub Profile"
            >
              <FiGithub size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Visit Shahil's LinkedIn Profile"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-xl bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            Hire Me
          </a>
        </div>

        <button
          className="lg:hidden text-2xl text-white p-2 rounded-lg bg-white/5 border border-white/10"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div 
        className={`fixed inset-0 bg-black/98 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "0", height: "100vh" }}
      >
        <div className="flex justify-end p-6">
           <button 
             onClick={() => setOpen(false)} 
             className="text-white text-3xl"
             aria-label="Close menu"
           >
             <FiX />
           </button>
        </div>
        <ul className="flex flex-col items-center justify-center gap-8 h-[70%] text-gray-300">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => {
                  if (item.href === "#home") handleNavClick(e, "#home");
                  setOpen(false);
                }}
                className="text-3xl font-bold hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 px-10 py-4 rounded-2xl bg-cyan-500 text-black font-bold"
          >
            Start a Project
          </a>
        </ul>
      </div>
    </header>
  );
}