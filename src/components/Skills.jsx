import React from "react";

// Import icons
import javaIcon from "../assets/java.png";
import cppIcon from "../assets/Cpp.png";
import pythonIcon from "../assets/python.png";
import androidIcon from "../assets/android.png";
import nodejsIcon from "../assets/Node Js.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import mysqlIcon from "../assets/mysql.png";

export default function Skills() {
  const skills = [
    { name: "Java", icon: javaIcon },
    { name: "C++", icon: cppIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Android", icon: androidIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "MySQL", icon: mysqlIcon },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-blue-900 via-slate-800 to-indigo-900 text-white text-center"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-cyan-500 after:mx-auto after:mt-3">
          Technical Skills
        </h2>
        <p className="text-sm sm:text-base text-gray-300 mt-3 max-w-xl mx-auto">
          Below are some of the key technical skills I've acquired and mastered through my academic and personal projects.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-36 h-44 flex flex-col items-center justify-center bg-white/10 border border-white/20 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl hover:border-teal-400 transition-transform duration-300"
          >
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-3">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-md font-medium tracking-wide">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
