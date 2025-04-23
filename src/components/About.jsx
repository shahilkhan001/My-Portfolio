import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-10 inline-block border-b-4 border-blue-500 drop-shadow-lg">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          Hey there! I'm{" "}
          <span className="text-blue-400 font-semibold">
            Mohammad Shahil Khan
          </span>
          , a driven{" "}
          <span className="text-white font-semibold">B.Tech CSE</span> student
          at Lovely Professional University with a deep passion for{" "}
          <span className="text-cyan-400 font-semibold">Android Development</span>{" "}
          and{" "}
          <span className="text-cyan-400 font-semibold">Cyber Security</span>.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mt-4">
          I thrive on building innovative solutions, diving into new
          technologies, and leveling up my skills in both frontend in <span className="text-cyan-400 font-semibold"> Android Development </span> and <span className="text-cyan-400 font-semibold"> Cyber
          Security </span>. My curiosity keeps me exploring, experimenting, and
          evolving every step of the way.
        </p>
      </div>
    </section>
  );
}
