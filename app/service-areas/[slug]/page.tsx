import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { AREAS, getArea } from "@/lib/areas";
import { SERVICES } from "@/lib/services";
import { ArrowRight, CheckPlain, PhoneIcon } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Junk Removal in ${area.name}, TX`,
    description: area.metaDescription,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

const whyPoints = [
  "Same-Day Service Available",
  "Licensed & Insured Team",
  "Eco-Friendly, Donation-First Disposal",
  "Transparent, Upfront Pricing",
  "Uniformed Local Crews",
  "Family-Owned & Operated",
];

export default async function AreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: `${area.name}, TX`, path: `/service-areas/${area.slug}` },
  ];

  const areaFaqs = [
    {
      q: `Do you offer same-day junk removal in ${area.name}?`,
      a: `In most cases, yes. ${area.name} is on our regular Tarrant County routes, so call (682) 226-8352 in the morning and there's a good chance we can have a truck out the same day.`,
    },
    {
      q: `How much does junk removal cost in ${area.name}?`,
      a: `Pricing is based on how much space your items take up in our truck — a single item costs far less than a full load, and you approve one flat price before we load anything. There are no travel fees for ${area.name}.`,
    },
    {
      q: `What do you haul in ${area.name}?`,
      a: `Furniture, appliances, mattresses, electronics, yard debris, garage clutter, and full property cleanouts. If it's not hazardous material, we can almost certainly take it.`,
    },
  ];

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: `Junk Removal in ${area.name}, TX`,
            description: area.metaDescription,
            path: `/service-areas/${area.slug}`,
          }),
          faqSchema(areaFaqs),
        ]}
      />
      <PageHero
        title="Junk Removal In"
        highlight={`${area.name}, TX`}
        sub={`Fast, flat-priced junk hauling for ${area.name} homes and businesses — with same-day service on most jobs.`}
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container split">
          <div className="split-copy">
            <h2>
              Your Local Junk Removal Crew In{" "}
              <span className="green">{area.name}</span>
            </h2>
            {area.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div className="about-actions">
              <Link href="/contact" className="btn">
                Get A Free Quote <ArrowRight />
              </Link>
              <a href="tel:+16822268352" className="phone-chip">
                <span className="icon-circle">
                  <PhoneIcon color="#4a7a28" />
                </span>
                (682) 226-8352
              </a>
            </div>
          </div>
          <div className="split-media">
            <img
              src="/images/project-curbside.png"
              alt={`McGruder Junk Removal truck picking up junk in ${area.name}, TX`}
            />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split">
          <div className="split-copy">
            <h2>
              Why {area.name} Chooses <span className="green">McGruder</span>
            </h2>
            <div className="why-list">
              {whyPoints.map((p) => (
                <div className="why-item" key={p}>
                  <CheckPlain />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="split-copy">
            <div className="local-note">
              <strong>Local know-how:</strong> {area.localNote}
            </div>
            <h3 style={{ fontSize: 20, margin: "28px 0 14px" }}>
              Services We Offer In {area.name}
            </h3>
            <div className="related-pills">
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Faq items={areaFaqs} title={`${area.name} Junk Removal FAQs`} id="area-faq" />

      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <h2>
              Nearby <span className="green">Service Areas</span>
            </h2>
          </div>
          <div className="related-pills" style={{ justifyContent: "center" }}>
            {area.nearby.map((slug) => {
              const nearby = getArea(slug);
              if (!nearby) return null;
              return (
                <Link key={slug} href={`/service-areas/${slug}`}>
                  {nearby.name}, TX
                </Link>
              );
            })}
            <Link href="/service-areas">All Service Areas</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
