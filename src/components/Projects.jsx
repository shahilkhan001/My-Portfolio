import { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    // ✅ FITZONE – STANDALONE PRODUCTION PROJECT
    {
      title: "FitZone – Fitness Center Website",
      category: "Standalone Production Project",
      shortDesc:
        "A modern, responsive fitness website built as a client-style demo and deployed as a standalone React application.",
      longDesc:
        "FitZone is a standalone frontend project designed to simulate a real-world fitness center website. It focuses on business-oriented sections such as programs, pricing, testimonials, and contact flows. The project emphasizes clean UI, responsive layouts, smooth navigation, and production-ready structure, and is deployed independently using Vercel.",
      tech: ["React", "Tailwind CSS", "Responsive Design"],
      features: [
        "Standalone production deployment",
        "Multi-section business landing page",
        "Mobile-first responsive navigation",
        "Conversion-focused CTAs",
        "Reusable, scalable React components",
      ],
      live: "https://fitzon-fitness.vercel.app/",
      link: "https://github.com/shahilkhan001/fitzon-fitness-website",
    },

    // 🎓 ACADEMIC PROJECTS
    {
      title: "Geography Explorer",
      category: "Academic Project",
      shortDesc:
        "An interactive Android app for learning geographical concepts through maps and quizzes.",
      longDesc:
        "Designed as a gamified learning platform, this app helps students explore geography using interactive maps and quizzes. The focus was on performance, structured data handling, and clean application flow.",
      tech: ["Kotlin", "Google Maps API", "Firebase Auth", "Room DB"],
      features: [
        "Interactive map-based learning",
        "Quiz-driven knowledge checks",
        "Secure authentication flow",
        "Offline progress tracking",
      ],
      link: "https://github.com/shahilkhan001/Geography-Explorer-Android-App",
    },
    {
      title: "UtilMonitor",
      category: "Academic Project",
      shortDesc:
        "A utility tracking Android app designed to monitor usage with real-time updates.",
      longDesc:
        "UtilMonitor is an academic project focused on tracking utility consumption using a clean mobile interface and cloud-based data storage. It emphasizes real-time updates and simple analytics.",
      tech: ["Kotlin", "Android Studio", "Firebase"],
      features: [
        "Real-time data synchronization",
        "Usage analytics dashboard",
        "Cloud-backed storage",
        "Responsive mobile UI",
      ],
      link: "https://github.com/shahilkhan001/UtilMonitor",
    },
  ];

  return (
    <section id="projects" className="bg-brand-dark text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured{" "}
              <span className="text-cyan-400 font-light italic">Work.</span>
            </h2>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              A selection of standalone production projects and academic work
              showcasing frontend development and application design.
            </p>
          </div>
          <a
            href="https://github.com/shahilkhan001"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-white transition flex items-center gap-2 font-medium border-b border-cyan-400/20 hover:border-white pb-1"
          >
            Browse GitHub <FiExternalLink />
          </a>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-[2.5rem] bg-brand-card border border-brand-border p-10 hover:-translate-y-3 transition-all duration-500 shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <FiGithub
                    size={24}
                    className="text-gray-600 group-hover:text-white transition-colors"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-[11px] font-bold uppercase rounded-xl bg-white/5 border border-white/10 text-gray-300 group-hover:border-cyan-400/30 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Explore Case Study{" "}
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            ></div>

            <div className="relative w-full max-w-2xl bg-brand-card border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={32} />
              </button>

              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                {selectedProject.category}
              </span>

              <h3 className="text-4xl font-bold mb-6 text-white">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                {selectedProject.longDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {selectedProject.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-400 text-sm"
                  >
                    <FiCheck className="text-cyan-400 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-10 py-4 rounded-2xl bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                  >
                    View Live Demo <FiExternalLink size={18} />
                  </a>
                )}

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-10 py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all flex items-center justify-center gap-2"
                >
                  View Codebase <FiGithub size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
