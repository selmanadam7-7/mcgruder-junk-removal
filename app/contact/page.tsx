import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import { HOME_FAQS } from "@/lib/faqs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { LeafIcon, PhoneIcon, PinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us — Get A Free Junk Removal Quote",
  description:
    "Get a free, no-obligation junk removal quote in Fort Worth. Call or text (682) 226-8352, or send the form — same-day pickups available across Tarrant County.",
  alternates: { canonical: "/contact" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(HOME_FAQS.slice(0, 3))]} />
      <PageHero
        title="Get Your"
        highlight="Free Quote"
        sub="Call, text a photo of your junk, or send the form — we'll come back with one honest flat price. Same-day pickups available on most jobs."
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 34px)", marginBottom: 22 }}>
              Talk To A Real <span className="green">Local Crew</span>
            </h2>
            <div className="info-card">
              <span className="icon-circle">
                <PhoneIcon color="#4a7a28" />
              </span>
              <div>
                <h3>Call Or Text 24/7</h3>
                <a href="tel:+16822268352" className="strong">
                  (682) 226-8352
                </a>
                <p>
                  Fastest way to a quote — text a photo of the pile and
                  we&apos;ll price it in minutes.
                </p>
              </div>
            </div>
            <div className="info-card">
              <span className="icon-circle">
                <PinIcon size={18} />
              </span>
              <div>
                <h3>Service Area</h3>
                <p>
                  Based in Fort Worth, TX — serving all of Tarrant County
                  including Arlington, Mansfield, Keller, Burleson, and 15+ more
                  cities.
                </p>
              </div>
            </div>
            <div className="info-card">
              <span className="icon-circle">
                <LeafIcon size={18} />
              </span>
              <div>
                <h3>What Happens Next</h3>
                <p>
                  We confirm your flat price, schedule a window that fits your
                  day, haul everything, donate what&apos;s usable, and sweep up
                  before we leave.
                </p>
              </div>
            </div>
          </div>

          <QuoteForm bordered />
        </div>
      </section>

      <Faq items={HOME_FAQS} title="Common Questions" id="contact-faq" />
    </main>
  );
}
