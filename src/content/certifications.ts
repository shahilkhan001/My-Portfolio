import type { Certification } from "@/content/types";

export const certifications = [
  {
    title: "Introduction to Android Mobile Application Development",
    issuer: "Meta · Coursera",
    date: "March 2025",
    credentialUrl:
      "https://coursera.org/share/ad4892e48fbb8dc33daea6189d586423",
  },
  {
    title: "Programming Fundamentals in Kotlin",
    issuer: "Meta · Coursera",
    date: "November 2024",
    credentialUrl:
      "https://coursera.org/share/f2fd24b7f296ed29213c4a94c7b12054",
  },
  {
    title: "Programming in C++: A Hands-on Introduction Specialization",
    issuer: "Codio · Coursera",
    date: "November 2023",
    credentialUrl:
      "https://coursera.org/share/e37a8b2211820ca31c5e7f1c11a9f6a3",
  },
  {
    title: "Mastering Data Structure and Algorithm",
    issuer: "Udemy",
    date: "November 2023",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-edabe3d1-ac0c-4727-a2ef-a14ff844b86d/",
  },
] as const satisfies readonly Certification[];
