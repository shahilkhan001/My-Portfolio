import { useState } from "react";
import { FiGithub, FiExternalLink, FiX, FiCheck, FiArrowRight } from "react-icons/fi";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Geography Explorer",
      category: "Education Tech",
      shortDesc: "An interactive Android app for learning geographical concepts through maps and quizzes.",
      longDesc: "Designed as a gamified learning platform, this app helps students master geography using real-time data and interactive interfaces. It focuses on high performance and structured data handling.",
      tech: ["Kotlin", "Google Maps API", "Firebase Auth", "Room DB"],
      features: ["Real-time Quiz Engine", "Interactive Map Integration", "Secure User Authentication", "Offline Progress Tracking"],
      link: "https://github.com/shahilkhan001/Geography-Explorer-Android-App",
    },
    {
      title: "UtilMonitor",
      category: "Utility Management",
      shortDesc: "A data-driven tracking app designed to monitor utility consumption with real-time syncing.",
      longDesc: "A personal utility tracking solution built to provide users with clear insights into their resource usage. Developed with a focus on clean UI and real-time database synchronization.",
      tech: ["Kotlin", "Android Studio", "Firebase", "Node.js"],
      features: ["Real-time Data Sync", "Usage Analytics", "Cloud Storage", "Responsive Mobile UI"],
      link: "https://github.com/shahilkhan001/UtilMonitor",
    },
  ];

  return (
    <section id="projects" className="bg-brand-dark text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-cyan-400 font-light italic">Work.</span>
            </h2>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Innovative solutions built with a focus on performance, security, and clean architecture.
            </p>
          </div>
          <a href="https://github.com/shahilkhan001" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-white transition flex items-center gap-2 font-medium border-b border-cyan-400/20 hover:border-white pb-1">
            Browse GitHub <FiExternalLink />
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-[2.5rem] bg-brand-card border border-brand-border p-10 hover:-translate-y-3 transition-all duration-500 shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  <FiGithub size={24} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-base leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((item, i) => (
                    <span key={i} className="px-4 py-1.5 text-[11px] font-bold uppercase rounded-xl bg-white/5 border border-white/10 text-gray-300 group-hover:border-cyan-400/30 transition-all">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Explore Case Study <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal remains the same but with gray-300 for longDesc */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
            <div className="relative w-full max-w-2xl bg-brand-card border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]">
              <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors">
                <FiX size={32} />
              </button>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2 block">{selectedProject.category}</span>
              <h3 className="text-4xl font-bold mb-6 text-white">{selectedProject.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">{selectedProject.longDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {selectedProject.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                    <FiCheck className="text-cyan-400 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={selectedProject.link} target="_blank" rel="noreferrer" className="px-10 py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all flex items-center justify-center gap-2">
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