import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import profileImage from "../assets/WhatsApp Image 2023-03-10 at 8.35.34 PM.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white px-6 py-12 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile with Gradient Circle */}
        <div className="flex justify-center relative">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-1 shadow-xl shadow-cyan-500/20">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
            />
          </div>
        </div>

        {/* Right: Intro Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-cyan-400">Mohammad Shahil Khan</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-xl">
            Android Developer | Cyber Security Enthusiast | CSE @ LPU
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl text-white mb-8">
            <a
              href="mailto:mdshahilkhan59@gmail.com"
              className="hover:text-cyan-400 transition"
              aria-label="Email"
            >
              <FiMail />
            </a>
            <a
              href="https://linkedin.com/in/mohammad-shahil-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/shahilkhan001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1XzYvFcrGF0BX2N_PThjPEKaGwy-mgNZd"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full shadow-md hover:scale-105 transition-transform font-semibold text-lg"
          >
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
