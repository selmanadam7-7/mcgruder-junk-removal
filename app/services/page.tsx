import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SERVICES } from "@/lib/services";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Junk Removal Services in Fort Worth, TX",
  description:
    "Residential and commercial junk removal, furniture and appliance hauling, garage and property cleanouts — every McGruder service, with upfront flat pricing.",
  alternates: { canonical: "/services" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="Our Junk Removal"
        highlight="Services"
        sub="From a single couch to a full property cleanout — one call, one flat price, and it's gone. Every service below comes with same-day availability and donation-first disposal."
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container">
          <div className="svc-grid">
            {SERVICES.map((s) => (
              <div className="svc-card" key={s.slug}>
                <Link href={`/services/${s.slug}`}>
                  <img src={s.image} alt={`${s.name} in Fort Worth, TX`} />
                </Link>
                <div className="svc-card-body">
                  <h3>
                    <Link href={`/services/${s.slug}`}>{s.name}</Link>
                  </h3>
                  <p>{s.card}</p>
                  <Link href={`/services/${s.slug}`} className="text-link">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <h2>
              Not Sure What You <span className="green">Need?</span>
            </h2>
            <p>
              Don&apos;t overthink the category — text us a photo of whatever
              needs to go and we&apos;ll tell you exactly what it&apos;ll cost
              to make it disappear. Call{" "}
              <a href="tel:+16822268352" style={{ fontWeight: 700, color: "var(--green)" }}>
                (682) 226-8352
              </a>{" "}
              for a free, no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
