import { FiArrowDown, FiCheckCircle, FiDownload } from "react-icons/fi";
import profileImage from "../assets/WhatsApp Image 2023-03-10 at 8.35.34 PM.jpeg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-brand-dark overflow-hidden px-6 pt-20">
      {/* Background Lighting Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-medium tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-white">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-bold">
              Experiences.
            </span>
          </h1>

          <p className="text-gray-400 max-w-xl text-lg md:text-xl leading-relaxed mx-auto lg:mx-0">
            I help startups and individuals turn ideas into high-performance web solutions with <span className="text-white font-bold">clean code</span> and <span className="text-white font-bold">modern UI.</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#projects" className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all shadow-[0_10px_30px_rgba(34,211,238,0.3)] text-center">
              View Work
            </a>
            <a 
              href="/Mohammad_Shahil_Khan.pdf" 
              download 
              className="px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              Download CV <FiDownload />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm font-medium pt-4">
            <div className="flex items-center gap-2"><FiCheckCircle className="text-cyan-400"/> Modern Tech Stack</div>
            <div className="flex items-center gap-2"><FiCheckCircle className="text-cyan-400"/> Security Conscious</div>
          </div>
        </div>

        {/* Right Content: Animated Image Container */}
        <div className="flex justify-center lg:justify-end animate-float">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-[2.5rem] border border-white/10 bg-brand-card">
              <img
                src={profileImage}
                alt="Mohammad Shahil Khan - Developer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
        <FiArrowDown size={24}/>
      </div>
    </section>
  );
}