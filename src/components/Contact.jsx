import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left: Heading + Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Interested in working together or just want to say hi? Fill out the form,
            and I’ll get back to you as soon as I can.
          </p>

          <div className="space-y-6 text-gray-400 text-base">
            <div>
              <span className="block text-sm text-gray-500 mb-1">Email</span>
              <a
                href="mailto:mdshahilkhan59@gmail.com"
                className="hover:text-white transition"
              >
                mdshahilkhan59@gmail.com
              </a>
            </div>

            <div>
              <span className="block text-sm text-gray-500 mb-1">Location</span>
              Jalandhar, Punjab, India
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          action="https://formsubmit.co/mdshahilkhan59@gmail.com"
          method="POST"
          className="space-y-6 bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-white/10"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 py-3 px-6 rounded-lg font-semibold text-white shadow-lg hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
