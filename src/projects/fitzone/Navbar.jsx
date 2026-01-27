import React, { useState, useEffect, useRef } from "react";

const FitZoneNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Programs", href: "#programs" },
    { name: "About", href: "#why-us" },
    { name: "Trainers", href: "#trainers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Plans", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-4 flex justify-between items-center ${
        isScrolled || isMenuOpen
          ? "bg-black/90 backdrop-blur border-b border-zinc-800 py-3"
          : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <a href="#home" className="flex items-center gap-2 relative z-[110]">
        <div className="w-8 h-8 bg-orange-600 rotate-45 flex items-center justify-center">
          <span className="text-white font-black -rotate-45 text-xl italic">
            F
          </span>
        </div>
        <span className="text-2xl font-black tracking-tighter text-white uppercase">
          FIT<span className="text-orange-600">ZONE</span>
        </span>
      </a>

      {/* DESKTOP LINKS */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-100 hover:text-orange-600 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-4 relative z-[110]">
        <a
          href="#pricing"
          className="hidden sm:block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 text-xs font-black uppercase tracking-widest transition-all"
        >
          Join Now
        </a>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
          className="lg:hidden text-white flex flex-col gap-1.5 p-2"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black transition-transform duration-500 flex flex-col items-center justify-center gap-8 lg:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-black uppercase italic text-white hover:text-orange-600 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default FitZoneNavbar;
