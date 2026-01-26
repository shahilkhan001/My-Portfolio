import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Shahil.dev — Frontend Developer
        </p>

        {/* Right */}
        <div className="flex items-center gap-6 text-gray-400">
          <a
            href="mailto:mdshahilkhan59@gmail.com"
            className="hover:text-cyan-400 transition"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>

          <a
            href="https://github.com/shahilkhan001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/mohammad-shahil-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>

          <a
            href="/My_Resume.pdf"
            target="_blank"
            className="hover:text-cyan-400 transition"
            aria-label="Resume"
          >
            <FiFileText size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
