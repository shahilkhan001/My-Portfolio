import React from "react";
import KotlinImg from "../assets/Kotlin.jpg";
import NPTELImg from "../assets/NPTEL.jpg";
import CourseraImg from "../assets/Coursera.jpg";
import TechvantoImg from "../assets/Techvanto Academy.jpg";
import UdemyImg from "../assets/Udemy.jpg";

export default function Certifications() {
  const certifications = [
    {
      name: "Kotlin: Programming Fundamentals in Kotlin",
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
      <h2 className="text-4xl font-extrabold text-white mb-14 tracking-wide drop-shadow-lg">
        🎓 My Certifications
      </h2>
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="w-72 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="mb-5 w-48 h-48 object-contain rounded-xl shadow-inner mx-auto"
            />
            <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
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
