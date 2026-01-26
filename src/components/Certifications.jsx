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
      title: "C++ Programming",
      platform: "Techvanto Academy",
      link: "https://drive.google.com/file/d/1ou-WlISyvJ1W-LOEh1S1JAOM2VJ8y9Bp/view?usp=sharing",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-black text-white px-6 py-24"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">
            Certifications
          </h2>
          <p className="text-gray-400 mt-3">
            A selection of verified certifications supporting my technical background.
          </p>
        </div>

        {/* List */}
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 rounded-xl bg-white/5 border border-white/10"
            >
              <div>
                <p className="font-medium">{cert.title}</p>
                <p className="text-sm text-gray-400">{cert.platform}</p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-0 text-sm text-cyan-400 hover:underline"
              >
                View Certificate →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
