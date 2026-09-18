import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ArrowRight, CheckIcon, CheckPlain, LeafIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us — Fort Worth's Local Junk Removal Team",
  description:
    "McGruder Junk Removal is a family-owned Fort Worth junk removal company. Same-day service, upfront flat pricing, and donation-first disposal across Tarrant County.",
  alternates: { canonical: "/about" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
];

const values = [
  {
    title: "Show Up When We Say",
    text: "Arrival windows mean something here. When we promise a morning pickup, our truck is in your driveway that morning — and if anything ever shifts, you hear it from us first, not from an empty driveway.",
  },
  {
    title: "One Honest Price",
    text: "You approve a flat price before a single item is loaded. No hourly meters, no fuel surcharges, no surprises at the truck. The number we quote is the number you pay.",
  },
  {
    title: "Donate & Recycle First",
    text: "Usable furniture and household goods go to Fort Worth-area charities before anything else. What can't be donated gets recycled where possible. The landfill is our last resort, not our first stop.",
  },
  {
    title: "Treat Every Home With Respect",
    text: "Uniformed, insured crews that protect your floors and door frames, work carefully around your family, and sweep up before we leave. Your home should look better after we visit — not just emptier.",
  },
];

const stats = [
  { big: "20+", label: "Cities Served" },
  { big: "6", label: "Core Services" },
  { big: "Same-Day", label: "Service Available" },
  { big: "100%", label: "Upfront Pricing" },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="About"
        highlight="McGruder Junk Removal"
        sub="A family-owned Fort Worth crew on a simple mission: make junk disappear without the hassle, the hidden fees, or the landfill-first mentality."
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container split">
          <div className="split-media">
            <img
              src="/images/about.png"
              alt="McGruder Junk Removal crew loading furniture into a green dumpster in Fort Worth"
            />
          </div>
          <div className="split-copy">
            <span className="tag">
              <LeafIcon />
              Our Story
            </span>
            <h2>
              Built In <span className="green">Fort Worth</span>, For Fort Worth
            </h2>
            <p>
              McGruder Junk Removal started the way most good service businesses
              do — with a truck, a strong back, and a growing list of neighbors
              who needed help hauling things away. What began as helping people
              move junk turned into a full junk removal operation serving homes
              and businesses across Fort Worth and Tarrant County.
            </p>
            <p>
              We&apos;re family-owned and locally operated. When you call, you
              talk to someone who knows the area — not a national call center.
              When our truck pulls up, it&apos;s our crew, our standards, and
              our name on the line.
            </p>
            <div className="check-grid">
              <div className="check-chip">
                <CheckIcon />
                Family-Owned &amp; Operated
              </div>
              <div className="check-chip">
                <CheckIcon />
                Licensed &amp; Fully Insured
              </div>
              <div className="check-chip">
                <CheckIcon />
                Based In Fort Worth, TX
              </div>
              <div className="check-chip">
                <CheckIcon />
                Serving All Of Tarrant County
              </div>
            </div>
            <Link href="/contact" className="btn">
              Get A Free Quote <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <h2>
              What We <span className="green">Stand For</span>
            </h2>
            <p>
              Junk removal isn&apos;t complicated — but doing it right, every
              time, takes standards. These are ours.
            </p>
          </div>
          <div className="check-grid" style={{ gap: 24 }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  padding: "26px 28px",
                }}
              >
                <h3
                  style={{
                    fontSize: 19,
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <CheckPlain size={20} />
                  {v.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: 15 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="process-grid">
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "clamp(36px, 4vw, 52px)",
                    color: "var(--green)",
                    lineHeight: 1.1,
                  }}
                >
                  {s.big}
                </div>
                <div style={{ color: "var(--muted)", fontWeight: 600 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
