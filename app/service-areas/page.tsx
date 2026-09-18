import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { AREAS } from "@/lib/areas";
import { PinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Service Areas — Junk Removal Across Tarrant County, TX",
  description:
    "McGruder Junk Removal serves Fort Worth, Arlington, Mansfield, Keller, Burleson, and 15+ more Tarrant County cities with same-day junk hauling.",
  alternates: { canonical: "/service-areas" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service Areas", path: "/service-areas" },
];

export default function ServiceAreasPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="Serving Fort Worth &"
        highlight="All Of Tarrant County"
        sub="Our green trucks run daily routes across 20 cities. Find yours below — or if you're anywhere nearby, call us anyway. If we can reach you, we'll haul for you."
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container">
          <div className="area-hub-grid">
            {AREAS.map((a) => (
              <Link
                href={`/service-areas/${a.slug}`}
                className="area-card"
                key={a.slug}
              >
                <h3>
                  <PinIcon />
                  {a.name}, TX
                </h3>
                <p>{a.intro[0].slice(0, 110).trimEnd()}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <h2>
              Don&apos;t See Your <span className="green">City?</span>
            </h2>
            <p>
              These are our regular routes, not our limits. If you&apos;re in
              the greater Fort Worth area, call{" "}
              <a href="tel:+16822268352" style={{ fontWeight: 700, color: "var(--green)" }}>
                (682) 226-8352
              </a>{" "}
              and we&apos;ll tell you straight whether we can reach you — most
              of the time, the answer is yes.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
