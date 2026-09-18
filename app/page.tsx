import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ServiceAreas from "@/components/ServiceAreas";
import OurPromise from "@/components/OurPromise";
import CtaBand from "@/components/CtaBand";
import Process from "@/components/Process";
import StatsForm from "@/components/StatsForm";
import Faq from "@/components/Faq";
import { HOME_FAQS } from "@/lib/faqs";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "McGruder Junk Removal | Fast, Affordable Junk Removal in Fort Worth, TX",
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <ServiceAreas />
      <OurPromise />
      <CtaBand />
      <Process />
      <StatsForm />
      <Faq />
    </main>
  );
}
