import React, { useState } from "react";
import { motion } from "framer-motion";

// Import images
import QuizAppImg from "../assets/Q1.jpg";
import QuizAppImg2 from "../assets/Q2.jpg";
import QuizAppImg3 from "../assets/Q3.jpg";
import UtilAppImg from "../assets/U1.jpg";
import UtilAppImg2 from "../assets/U2.jpg";
import UtilAppImg3 from "../assets/U3.jpg";
import BankingImg from "../assets/B1.png";

export default function Projects() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const projects = [
    {
      name: "Android App - UtilMonitor",
      description: "An Android app that tracks utility usage with real-time updates.",
      images: [UtilAppImg, UtilAppImg2, UtilAppImg3],
      link: "https://github.com/shahilkhan001/UtilMonitor",
    },
    {
      name: "Educational Quiz App",
      description:
        "An Android quiz app with randomized questions, real-time score tracking, a countdown timer, and dark mode support.",
      images: [QuizAppImg, QuizAppImg2, QuizAppImg3],
      link: "https://github.com/shahilkhan001/Quize-App",
    },
    {
      name: "Banking System",
      description:
        "A C++ console-based banking system featuring account creation, secure login, and transaction management.",
      images: [BankingImg],
      link: "https://github.com/shahilkhan001/DSA-Practice/blob/project/BankingSystem.cpp",
    },
  ];

  const handleMouseEnter = (e, image, alt) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const imageWidth = 300;
    const imageHeight = 500;
    const offset = 20;

    let x = rect.right + offset;
    let y = rect.top;

    if (x + imageWidth > window.innerWidth) {
      x = rect.left - imageWidth - offset;
    }

    if (y + imageHeight > window.innerHeight) {
      y = window.innerHeight - imageHeight - offset;
    }

    x = Math.max(x, offset);
    y = Math.max(y, offset);

    setHoveredImage({ src: image, alt, x, y });
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white relative"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-cyan-500 after:mx-auto after:mt-3">
          My Projects
        </h2>
        <p className="text-sm text-gray-400 mt-3 max-w-xl mx-auto">
          A showcase of some of my recent work in Android and system development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl transition-transform hover:scale-[1.03] hover:shadow-2xl duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: index * 0.3,
            }}
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

            {/* Images */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {project.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="w-24 h-24 rounded-lg overflow-hidden cursor-pointer transition duration-300 hover:scale-105"
                  onMouseEnter={(e) =>
                    handleMouseEnter(e, image, `${project.name} Screenshot ${imgIndex + 1}`)
                  }
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img
                    src={image}
                    alt={`${project.name} Screenshot ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-md transition-colors duration-300 text-sm font-medium"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>

      {/* Floating Hover Preview */}
      {hoveredImage && (
        <div
          className="fixed z-[9999] pointer-events-none transition-transform duration-300 ease-in-out shadow-2xl"
          style={{
            top: hoveredImage.y,
            left: hoveredImage.x,
          }}
        >
          <img
            src={hoveredImage.src}
            alt={hoveredImage.alt}
            className="max-w-[300px] max-h-[500px] rounded-xl border border-white/20"
          />
        </div>
      )}
    </section>
  );
}
