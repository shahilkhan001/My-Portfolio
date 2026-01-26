export default function Skills() {
  const categories = [
    { 
      title: "Core Technologies", 
      skills: ["React.js", "JavaScript (ES6+)", "Kotlin", "Android SDK"] 
    },
    { 
      title: "Interface & Styling", 
      skills: ["Tailwind CSS", "Modern UI/UX", "Responsive Design", "CSS3"] 
    },
    { 
      title: "Backend Fundamentals", 
      skills: ["Node.js", "Firebase Auth", "Realtime Database", "REST APIs", "SQL"] 
    },
  ];

  return (
    <section
      id="skills"
      className="bg-brand-dark py-32 px-6 border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical <br />
            <span className="text-cyan-400">Capabilities</span>
          </h2>
          <p className="text-gray-400 max-w-sm text-lg">
            A practical set of tools I use to build clean, responsive, and
            user-focused web and Android applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat.title} className="space-y-6">
              <h3 className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase opacity-70 border-l-2 border-cyan-400 pl-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white hover:border-cyan-400 hover:bg-white/[0.05] transition-all cursor-default text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
