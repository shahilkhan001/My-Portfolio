import { FiAward, FiExternalLink } from "react-icons/fi";

export default function Certifications() {
  const certifications = [
    {
      title: "Programming in Kotlin",
      platform: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/YAT713Q6F9Q7",
    },
    {
      title: "Cloud Computing",
      platform: "NPTEL",
      link: "https://drive.google.com/file/d/1e0P2hAz9a5ybUh_erHqqYd9aBiixyyJB/view?usp=sharing",
    },
    {
      title: "Mastering DSA using C and C++",
      platform: "Udemy",
      link: "https://www.udemy.com/certificate/UC-edabe3d1-ac0c-4727-a2ef-a14ff844b86d/",
    },
    {
      title: "Applied Generative AI",
      platform: "Infosys Springboard",
      link: "#", // Add link if available
    },
  ];

  return (
    <section id="certifications" className="bg-brand-dark text-white px-6 py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Verified <span className="text-cyan-400 font-light italic">Credentials</span></h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Technical certifications that validate my expertise in programming, cloud, and emerging technologies.
          </p>
        </div>

        {/* Credentials List */}
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.05] transition-all"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <FiAward size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                  <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">{cert.platform}</p>
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
              >
                Verify Certificate <FiExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}