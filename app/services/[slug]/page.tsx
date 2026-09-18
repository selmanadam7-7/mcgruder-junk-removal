import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { SERVICES, getService } from "@/lib/services";
import { ArrowRight, CheckIcon, PhoneIcon } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { images: [{ url: service.image }] },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
            image: service.image,
          }),
          faqSchema(service.faqs),
        ]}
      />
      <PageHero
        title={service.name}
        highlight="In Fort Worth, TX"
        sub={service.card}
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container split">
          <div className="split-copy">
            <h2>
              {service.name} <span className="green">Done Right</span>
            </h2>
            {service.intro.map((p) => (
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
            <img src={service.image} alt={`${service.name} in Fort Worth, TX`} />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <h2>
              {service.takeTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="green">
                {service.takeTitle.split(" ").slice(-1)}
              </span>
            </h2>
          </div>
          <div className="take-grid">
            {service.takeItems.map((item) => (
              <div className="check-chip" key={item}>
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 880 }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 34px)", marginBottom: 18 }}>
            {service.bodyTitle}
          </h2>
          {service.body.map((p) => (
            <p
              key={p.slice(0, 24)}
              style={{ color: "var(--muted)", fontSize: 16, marginBottom: 18, lineHeight: 1.75 }}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <Faq
        items={service.faqs}
        title={`${service.shortName} FAQs`}
        id="service-faq"
      />

      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <h2>
              Related <span className="green">Services</span>
            </h2>
          </div>
          <div className="related-pills" style={{ justifyContent: "center" }}>
            {service.related.map((slug) => {
              const rel = getService(slug);
              if (!rel) return null;
              return (
                <Link key={slug} href={`/services/${slug}`}>
                  {rel.name}
                </Link>
              );
            })}
            <Link href="/services">All Services</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
