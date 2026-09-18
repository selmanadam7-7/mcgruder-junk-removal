import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { POSTS, getPost } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            datePublished: post.date,
            image: post.image,
          }),
        ]}
      />
      <PageHero
        title={post.title}
        sub={`${formatDate(post.date)} • ${post.readTime} • By the McGruder Team`}
        crumbs={[crumbs[0], crumbs[1], { name: "Article", path: crumbs[2].path }]}
      />

      <section className="section">
        <div className="container">
          <article className="article">
            <img className="article-hero-img" src={post.image} alt={post.title} />
            {post.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            {post.sections.map((s) => (
              <div key={s.h2}>
                <h2>{s.h2}</h2>
                {s.paras.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b.slice(0, 24)}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="article-outro">
              <p>{post.outro}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <h2>
              Keep <span className="green">Reading</span>
            </h2>
          </div>
          <div className="related-pills" style={{ justifyContent: "center" }}>
            {others.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}>
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
