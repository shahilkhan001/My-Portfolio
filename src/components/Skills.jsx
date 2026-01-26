export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Tools and technologies I use to build modern web interfaces and
            functional Android applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Frontend */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              Frontend Web Development
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>

          {/* Styling */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              Styling & UI
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Tailwind CSS</li>
              <li>CSS3</li>
              <li>Modern UI Practices</li>
            </ul>
          </div>

          {/* Android */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              Android App Development
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Kotlin</li>
              <li>Android Studio</li>
              <li>Firebase Authentication</li>
              <li>Firebase Realtime Database / Firestore</li>
            </ul>
          </div>

          {/* Backend & Programming */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              Backend, Programming & Tools
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Node.js (Basic)</li>
              <li>REST APIs</li>
              <li>MySQL</li>
              <li>Java, C++, Python</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
