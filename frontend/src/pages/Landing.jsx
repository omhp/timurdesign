import React from "react";
import Hero from "../components/Hero";
import Services from "../sections/Services";
import WhyUs from "../sections/WhyUs";
import Process from "../sections/Process";
import Portfolio from "../sections/Portfolio";
import Coverage from "../sections/Coverage";
import Testimonials from "../sections/Testimonials";
import FAQSection from "../sections/FAQSection";
import CTABand from "../sections/CTABand";
import Footer from "../sections/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const Landing = () => {
  return (
    <main className="bg-[hsl(220,15%,5%)] text-white">
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Portfolio />
      <Coverage />
      <Testimonials />
      <FAQSection />
      <CTABand />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Landing;
