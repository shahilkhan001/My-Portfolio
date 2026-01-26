export default function Projects() {
  const projects = [
    {
      title: "Geography Explorer – Learning App",
      description:
        "An interactive Android app designed to explore geographical concepts through maps and quizzes. The app includes user authentication and local data storage to track learning progress.",
      tech: ["Kotlin", "Firebase Auth", "Room Database","Google Maps API"],
      link: "https://github.com/shahilkhan001/Geography-Explorer-Android-App",
    },
    {
      title: "UtilMonitor – Utility Tracking App",
      description:
        "A personal Android application built to track and monitor utility usage in a simple and structured way. The project focuses on clean UI, structured data handling, and real-time updates using Firebase.",
      tech: ["Kotlin", "Android Studio", "Firebase"],
      link: "https://github.com/shahilkhan001/UtilMonitor",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white px-6 py-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Selected <span className="text-cyan-400">Work</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A selection of personal and practice projects that reflect my
            approach to building functional and well-structured applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-cyan-400 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

        {/* Future Projects Note */}
        <div className="mt-16 text-center text-gray-400 text-sm">
          More real-world projects will be added here as I continue building
          and working with clients.
        </div>
      </div>
    </section>
  );
}
