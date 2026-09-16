import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
      <JoinUs />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
