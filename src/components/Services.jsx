import { FiLayout, FiServer, FiSmartphone } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiLayout size={28} />,
      title: "Frontend Development",
      description:
        "Modern, responsive websites built with React and Tailwind CSS. Ideal for landing pages, portfolios, and business websites.",
    },
    {
      icon: <FiServer size={28} />,
      title: "Web App Integration",
      description:
        "Frontend-focused web applications with basic backend integration using tools like Node.js, Firebase, and REST APIs.",
    },
    {
      icon: <FiSmartphone size={28} />,
      title: "Android App Development",
      description:
        "User-friendly Android applications built with Kotlin, following clean architecture and recommended data-handling practices.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-brand-dark text-white px-6 py-32 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Professional <span className="text-cyan-400">Offerings</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            Practical development services tailored for individuals, startups,
            and small businesses looking for clean and reliable digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 rounded-[2.5rem] bg-brand-card border border-brand-border hover:border-cyan-400/50 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
