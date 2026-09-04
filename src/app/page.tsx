import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Services } from "@/components/sections/Services";
import { Specialization } from "@/components/sections/Specialization";
import { Problems } from "@/components/sections/Problems";
import { Why } from "@/components/sections/Why";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Location } from "@/components/sections/Location";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Specialization />
      <Problems />
      <Why />
      <Process />
      <Portfolio />
      <Testimonials />
      <About />
      <Faq />
      <Location />
      <FinalCta />
    </>
  );
}
