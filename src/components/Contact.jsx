export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-28"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's <span className="text-cyan-400">Work Together</span>
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-md">
            Have a website idea, need frontend help, or want to improve an
            existing project? Feel free to reach out and share your
            requirements. I'm open to small freelance projects and
            collaboration opportunities.
          </p>

          <div className="space-y-4 text-sm text-gray-400">
            <p>
              <span className="text-white font-medium">Email:</span>{" "}
              <a
                href="mailto:mdshahilkhan59@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                mdshahilkhan59@gmail.com
              </a>
            </p>

            <p>
              <span className="text-white font-medium">Location:</span>{" "}
              India (Remote-friendly)
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/eca07b68a82ca59651adff35f5ead8ef"
          method="POST"
          className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-md bg-black/40 border border-white/10 focus:outline-none focus:border-cyan-400"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-md bg-black/40 border border-white/10 focus:outline-none focus:border-cyan-400"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full p-3 rounded-md bg-black/40 border border-white/10 focus:outline-none focus:border-cyan-400"
              placeholder="Tell me briefly about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
