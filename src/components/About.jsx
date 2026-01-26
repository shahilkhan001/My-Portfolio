export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-28"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I'm a frontend web developer who focuses on building clean,
            responsive, and user-friendly websites. I enjoy turning ideas
            into well-structured interfaces using modern tools like React
            and Tailwind CSS.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I'm currently taking on small freelance projects to gain real-world
            experience while delivering reliable and maintainable solutions.
            I care about writing clean code, following good UI practices, and
            communicating clearly throughout the project.
          </p>

          <p className="text-gray-300 leading-relaxed">
            If you need a personal website, landing page, or frontend help
            for an existing project, I'd be happy to discuss how I can help.
          </p>
        </div>

        {/* Right Stats / Highlights */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
            <p className="text-sm text-gray-400 mt-1">
              Personal & Practice Projects
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">Frontend</h3>
            <p className="text-sm text-gray-400 mt-1">
              React & Tailwind Focus
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">Clean</h3>
            <p className="text-sm text-gray-400 mt-1">
              UI & Code Practices
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">Beginner</h3>
            <p className="text-sm text-gray-400 mt-1">
              Freelance Friendly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
