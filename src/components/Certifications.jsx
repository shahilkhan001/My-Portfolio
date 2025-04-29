import React from "react";
import KotlinImg from "../assets/Kotlin.jpg";
import NPTELImg from "../assets/NPTEL.jpg";
import CourseraImg from "../assets/Coursera.jpg";
import TechvantoImg from "../assets/Techvanto Academy.jpg";
import UdemyImg from "../assets/Udemy.jpg";

export default function Certifications() {
  const certifications = [
    {
      name: "Coursera: Programming in Kotlin",
      image: KotlinImg,
      link: "https://www.coursera.org/account/accomplishments/verify/YAT713Q6F9Q7",
    },
    {
      name: "NPTEL: Cloud Computing",
      image: NPTELImg,
      link: "https://drive.google.com/file/d/1e0P2hAz9a5ybUh_erHqqYd9aBiixyyJB/view?usp=sharing",
    },
    {
      name: "Coursera: Ethical Hacking Essentials",
      image: CourseraImg,
      link: "https://www.coursera.org/account/accomplishments/verify/ZUODDJMZ70BJ",
    },
    {
      name: "Techvanto Academy: C++ Programming",
      image: TechvantoImg,
      link: "https://drive.google.com/file/d/1ou-WlISyvJ1W-LOEh1S1JAOM2VJ8y9Bp/view?usp=sharing",
    },
    {
      name: "Udemy: Mastering DSA using C and C++",
      image: UdemyImg,
      link: "https://www.udemy.com/certificate/UC-edabe3d1-ac0c-4727-a2ef-a14ff844b86d/",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-center"
    >
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-cyan-500 after:mx-auto after:mt-3">
          🎓 My Certifications
        </h2>
        <p className="text-sm text-gray-300 mt-3 max-w-xl mx-auto">
          A collection of my verified certificates from courses and training programs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="w-[350px] h-[250px] p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="h-[150px] w-[320px] full object-contain rounded-xl shadow-inner mb-3"
            />
            <h3 className="text-md font-semibold text-white mb-1 truncate">{cert.name}</h3>
            <a
              href={cert.link}
              className="text-cyan-300 hover:text-cyan-200 underline text-sm transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
