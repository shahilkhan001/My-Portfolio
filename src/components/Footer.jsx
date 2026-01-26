import { FiGithub, FiLinkedin, FiMail, FiChevronUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10 px-6 relative">
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-card border border-white/10 rounded-full flex items-center justify-center text-cyan-400 hover:border-cyan-400 transition-all shadow-xl"
      >
        <FiChevronUp size={24} />
      </button>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-bold text-white tracking-tighter">
            SHAHIL<span className="text-cyan-400">.DEV</span>
          </a>
          <p className="text-gray-500 text-sm mt-2 font-medium">
            Frontend Developer & Android Enthusiast
          </p>
        </div>

        <div className="flex gap-6">
          <a 
            href="https://github.com/shahilkhan001" 
            target="_blank" 
            rel="noreferrer"
            className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
            aria-label="GitHub"
          >
            <FiGithub size={20}/>
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" // REPLACE THIS with your actual link
            target="_blank" 
            rel="noreferrer"
            className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20}/>
          </a>
          <a 
            href="mailto:mdshahilkhan59@gmail.com" 
            className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
            aria-label="Email"
          >
            <FiMail size={20}/>
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold mb-1">Location</p>
          <p className="text-gray-400 text-sm">Jalandhar, Punjab, India</p>
          <p className="text-gray-600 text-xs mt-2">© 2026 Shahil Khan</p>
        </div>
      </div>
    </footer>
  );
}