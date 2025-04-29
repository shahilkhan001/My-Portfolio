import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-10 inline-block border-b-4 border-cyan-400 drop-shadow-lg">
          About Me
        </h2>

        <p className="text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          Hey there! I'm{" "}
          <span className="text-cyan-400 font-semibold">
            Mohammad Shahil Khan
          </span>
          , a passionate{" "}
          <span className="text-white font-semibold">B.Tech CSE</span> student
          at Lovely Professional University with strong interests in{" "}
          <span className="text-cyan-400 font-semibold">Android Development</span>{" "}
          and{" "}
          <span className="text-cyan-400 font-semibold">Cyber Security</span>.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mt-4">
          I thrive on crafting innovative solutions, exploring new technologies, and
          continuously enhancing my skills in both{" "}
          <span className="text-cyan-400 font-semibold">Android App Development</span>{" "}
          and{" "}
          <span className="text-cyan-400 font-semibold">Cyber Security</span>. My curiosity drives me to
          learn, experiment, and grow every single day.
        </p>
      </div>
    </section>
  );
}
