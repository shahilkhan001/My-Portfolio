import FitZoneNavbar from "./Navbar";
import FitZoneHero from "./FitZoneHero";
import Programs from "./Programs";
import WhyChooseUs from "./WhyChooseUs";
import Trainers from "./Trainers";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FitZoneContact from "./FitZoneContact";
import Gallery from "./Gallery";
import FAQ from "./FAQ";

const FitZone = () => {
  return (
    <div className="font-sans antialiased bg-black min-h-screen text-white selection:bg-orange-600 selection:text-white">
      <FitZoneNavbar />

      <main>
        {/* HERO */}
        <FitZoneHero />

        {/* PROGRAMS */}
        <section id="programs" className="scroll-mt-20">
          <Programs />
        </section>

        {/* WHY CHOOSE US */}
        <section id="why-us" className="scroll-mt-20">
          <WhyChooseUs />
        </section>

        {/* TRAINERS */}
        <section id="trainers" className="scroll-mt-20">
          <Trainers />
        </section>

        {/* GALLERY */}
        <section id="gallery" className="scroll-mt-20">
          <Gallery />
        </section>

        {/* PRICING */}
        <section id="pricing" className="scroll-mt-20">
          <Pricing />
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="scroll-mt-20">
          <Testimonials />
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20">
          <FAQ />
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-20">
          <FitZoneContact />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-950 py-16 border-t border-zinc-900 text-center">
        <div className="mb-8">
          <span className="text-2xl font-black tracking-tighter text-white uppercase">
            FIT<span className="text-orange-600">ZONE</span>
          </span>
        </div>
        <p className="text-zinc-600 text-xs font-bold uppercase tracking-[0.5em]">
          &copy; 2026 FitZone Gym • Elite Performance Center
        </p>
      </footer>
    </div>
  );
};

export default FitZone;
