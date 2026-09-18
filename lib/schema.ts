import { SITE, absUrl } from "./site";
import { AREAS } from "./areas";

// JSON-LD builders. Every page renders LocalBusiness (via layout) plus its own
// page-specific graph nodes.

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneE164,
    image: absUrl("/images/truck.png"),
    logo: absUrl("/images/truck.png"),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: AREAS.map((a) => ({
      "@type": "City",
      name: `${a.name}, TX`,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#business` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absUrl(opts.path),
    ...(opts.image ? { image: absUrl(opts.image) } : {}),
    serviceType: opts.name,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: { "@type": "City", name: `${SITE.city}, ${SITE.state}` },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: absUrl(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    ...(opts.image ? { image: absUrl(opts.image) } : {}),
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@id": `${SITE.url}/#business` },
    mainEntityOfPage: absUrl(opts.path),
  };
}
