import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}