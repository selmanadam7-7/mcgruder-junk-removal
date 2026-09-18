// Central business facts — single source of truth for NAP consistency.
// NOTE: swap SITE.url for the custom domain once it's purchased.
export const SITE = {
  name: "McGruder Junk Removal",
  legalName: "McGruder Junk Removal",
  url: "https://mcgruder-junk-removal.vercel.app",
  phone: "(682) 226-8352",
  phoneHref: "tel:+16822268352",
  phoneE164: "+16822268352",
  city: "Fort Worth",
  state: "TX",
  stateFull: "Texas",
  county: "Tarrant County",
  description:
    "McGruder Junk Removal is Fort Worth's trusted junk removal team. Same-day pickups, upfront pricing, and eco-friendly disposal for homes and businesses across Tarrant County.",
  geo: { lat: 32.7555, lng: -97.3308 },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function absUrl(path: string): string {
  return `${SITE.url}${path === "/" ? "" : path}`;
}
