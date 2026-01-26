import { FiArrowDown } from "react-icons/fi";
import profileImage from "../assets/WhatsApp Image 2023-03-10 at 8.35.34 PM.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 pt-28"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Frontend Developer <br />
            <span className="text-cyan-400">
              building modern web experiences
            </span>
          </h1>

          <p className="text-gray-300 max-w-xl text-lg">
            I design and develop clean, responsive, and user-friendly websites
            using React, Tailwind CSS, and modern JavaScript — focused on clarity,
            performance, and usability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 blur-xl opacity-40"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-72 h-72 object-cover rounded-full border border-white/20"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
        <FiArrowDown />
      </div>
    </section>
  );
}
