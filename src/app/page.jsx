import AboutSection from "@/layouts/components/AboutSection/AboutSection";
import Banner from "@/layouts/components/Banner/Banner";
import Features from "@/layouts/components/Features/Features";
import HowItWorks from "@/layouts/components/HowItWorks/HowItWorks";
import Image from "next/image";
import About from "./about/page";
import Testimonials from "@/layouts/components/Testimonials/Testimonials";
import Pricing from "@/layouts/components/Pricing/Pricing";
import CTA from "@/layouts/components/CTA/CTA";

export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <CTA />
      </section>
    </div>
  );
}
