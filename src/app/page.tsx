import { HomeStructuredData } from "@/components/seo/home-structured-data";
import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { ServicesSection } from "@/components/sections/services";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <HomeStructuredData />
      <Hero />
      <SelectedWork />
      <ExperienceSection />
      <CapabilitiesSection />
      <ServicesSection />
      <AboutSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
