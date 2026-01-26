export default function About() {
  return (
    <section
      id="about"
      className="bg-brand-dark text-white px-6 py-32 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Decorative Text */}
          <div className="hidden lg:block lg:col-span-1">
            <div
              className="text-white/5 font-black text-8xl select-none rotate-180"
              style={{ writingMode: "vertical-lr" }}
            >
              STRATEGY
            </div>
          </div>

          {/* Center: Professional Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Bridging the gap between <br />
              <span className="text-cyan-400 font-light italic">
                Design & Logic.
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I focus on building high-performance digital experiences that are
                visually engaging and developed with{" "}
                <span className="text-white font-medium">
                  clean, maintainable code
                </span>
                . My approach prioritizes clarity, usability, and long-term
                scalability at the frontend level.
              </p>

              <p>
                I have hands-on experience working with{" "}
                <span className="text-white font-medium">
                  React and Android (Kotlin)
                </span>
                , and I am continuously improving my understanding of backend
                concepts using tools like Node.js.
              </p>

              <p>
                While my primary strength lies in frontend development, I build
                interfaces with thoughtful structure and basic security best
                practices in mind, aiming to deliver reliable and user-friendly
                applications.
              </p>
            </div>
          </div>

          {/* Right: Client-Value Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm group hover:border-cyan-400/30 transition-all">
              <div className="text-cyan-400 font-mono text-xs mb-2 tracking-widest uppercase underline decoration-cyan-400/30 underline-offset-4">
                Approach
              </div>
              <h4 className="text-white font-bold text-xl">Clean Code</h4>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                Writing readable, maintainable frontend code that stays easy to
                extend as projects grow.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-cyan-500 text-black shadow-[0_10px_30px_rgba(34,211,238,0.2)]">
              <div className="font-mono text-xs mb-2 tracking-widest uppercase text-black/60">
                Focus
              </div>
              <h4 className="font-bold text-xl">Frontend Development</h4>
              <p className="text-black/70 text-xs mt-2 leading-relaxed">
                Designing responsive, user-friendly interfaces using modern
                frontend tools and frameworks.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 sm:col-span-2 flex items-center justify-between group hover:bg-white/[0.05] transition-all">
              <div className="max-w-[70%]">
                <h4 className="text-white font-bold text-xl italic">
                  Code Quality
                </h4>
                <p className="text-gray-500 text-xs mt-1">
                  Following clean coding practices and basic security
                  considerations to avoid common implementation mistakes.
                </p>
              </div>
              <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                ✓
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
