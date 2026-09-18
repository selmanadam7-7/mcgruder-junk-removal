import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Junk Removal Tips & Guides for Fort Worth",
  description:
    "Honest guides from a Fort Worth junk removal crew: real pricing, donation options, cleanout checklists, and how to choose the right hauling option.",
  alternates: { canonical: "/blog" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="Junk Removal"
        highlight="Tips & Guides"
        sub="Straight answers from a crew that hauls junk every day — real prices, real donation options, and no fluff."
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {POSTS.map((p) => (
              <div className="post-card" key={p.slug}>
                <Link href={`/blog/${p.slug}`}>
                  <img src={p.image} alt={p.title} />
                </Link>
                <div className="post-card-body">
                  <div className="post-meta">
                    <span>{formatDate(p.date)}</span>
                    <span>•</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3>
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <p>{p.excerpt}</p>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-link"
                    style={{ color: "var(--green)", fontWeight: 700, fontSize: 14.5 }}
                  >
                    Read Article →
                  </Link>
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
