import { useState } from "react";
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiX } from "react-icons/fi";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // This allows the form to submit to FormSubmit.co while also showing our UI
    // In a real production environment, you'd use fetch() to handle this silently
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="bg-brand-dark text-white px-6 py-32 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Pitch */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start a <span className="text-cyan-400 font-light italic text-3xl md:text-4xl">Project</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Looking for a secure website or a custom Android app? I'm currently open to <span className="text-white font-medium">freelance opportunities</span> for small businesses and startups.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Email Me</p>
                  <a href="mailto:mdshahilkhan59@gmail.com" className="text-white hover:text-cyan-400 transition-colors font-medium">mdshahilkhan59@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Location</p>
                  <p className="text-white font-medium">Jalandhar, Punjab (Remote Friendly)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[2.5rem] blur opacity-20"></div>
            
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/eca07b68a82ca59651adff35f5ead8ef"
              method="POST"
              className="relative p-8 md:p-12 rounded-[2.5rem] bg-brand-card border border-white/10 space-y-6 shadow-2xl"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.08] transition-all text-white placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.08] transition-all text-white placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.08] transition-all text-white placeholder:text-gray-600 resize-none"
                  placeholder="How can I help you with your project?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all shadow-[0_10px_30px_rgba(34,211,238,0.2)] flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                Send Message <FiSend size={18} />
              </button>
            </form>

            {/* Success Popup */}
            {isSubmitted && (
              <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-brand-card/90 backdrop-blur-md rounded-[2.5rem]"></div>
                <div className="relative text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. <br/> I'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm font-bold text-cyan-400 hover:underline flex items-center justify-center gap-2 mx-auto"
                  >
                    Close <FiX size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}