import { AboutSection } from "@/components/sections/about";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <ExperienceSection />
      <CapabilitiesSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
