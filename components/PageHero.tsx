import Link from "next/link";

type Crumb = { name: string; path: string };

export default function PageHero({
  title,
  highlight,
  sub,
  crumbs,
}: {
  title: string;
  highlight?: string;
  sub?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.path}>
              {i > 0 && <span className="crumb-sep">/</span>}
              {i === crumbs.length - 1 ? (
                <span aria-current="page">{c.name}</span>
              ) : (
                <Link href={c.path}>{c.name}</Link>
              )}
            </span>
          ))}
        </nav>
        <h1>
          {title} {highlight && <span className="green-light">{highlight}</span>}
        </h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}
