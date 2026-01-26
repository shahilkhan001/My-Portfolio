import { FiMessageSquare, FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-10 md:p-16 rounded-[3rem] bg-brand-card border border-white/10 text-center shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 mb-8">
            <FiMessageSquare size={32} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Have a project <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-light">
              in mind?
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I’m currently accepting new freelance projects. Whether you need a 
            performance-optimized website or a secure mobile application, I’m ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-10 py-5 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all shadow-[0_10px_30px_rgba(34,211,238,0.3)] flex items-center justify-center gap-3 group"
            >
              Start a Conversation <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:mdshahilkhan59@gmail.com" 
              className="px-10 py-5 rounded-2xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all"
            >
              Email Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}