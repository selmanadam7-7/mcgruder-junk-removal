import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Recent Projects — Junk Removal Jobs Around Fort Worth",
  description:
    "A look at the kinds of junk removal jobs McGruder handles across Fort Worth: curbside pickups, estate cleanouts, renovation debris, and yard cleanups.",
  alternates: { canonical: "/projects" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];

const projects = [
  {
    img: "/images/project-curbside.png",
    tag: "Residential Pickup",
    title: "Driveway Furniture & Box Haul",
    text: "A classic single-visit pickup — dresser, boxes, and rolled carpet loaded from the driveway and gone in under thirty minutes. The donatable dresser went to a local charity instead of the landfill.",
  },
  {
    img: "/images/project-estate.png",
    tag: "Property Cleanout",
    title: "Full Home Cleanout",
    text: "Room-by-room cleanout of a family home — furniture staged, personal items set aside for the family, usable pieces donated, and the whole property left broom-clean for listing.",
  },
  {
    img: "/images/project-construction.png",
    tag: "Renovation Debris",
    title: "Remodel Debris Removal",
    text: "Lumber scraps, drywall, and buckets cleared from a driveway mid-renovation so the contractor could keep working. One trailer load, one flat price, gone the same day it was called in.",
  },
  {
    img: "/images/project-yard.png",
    tag: "Yard Cleanup",
    title: "Backyard & Storm Debris Haul",
    text: "Branches, bagged yard waste, and fence debris hauled out through alley access after a storm rolled through — the backyard went from disaster to usable in one afternoon.",
  },
  {
    img: "/images/about.png",
    tag: "Residential Pickup",
    title: "Garage-To-Dumpster Cleanout",
    text: "Old couch, boxes, and years of garage accumulation loaded straight into the container. The homeowner pointed, the crew hauled, and the garage fit a truck again by lunch.",
  },
  {
    img: "/images/card-appliance.png",
    tag: "Appliance Removal",
    title: "Curbside Appliance Pickup",
    text: "Washer, fridge, and microwave picked up from the curb and routed to a metal recycler — refrigerant reclaimed properly, steel and copper recycled, nothing dumped.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="Recent"
        highlight="Projects"
        sub="A sample of the work our crews do every week around Fort Worth — from thirty-minute curbside pickups to multi-day property cleanouts."
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((p) => (
              <div className="project-card" key={p.title}>
                <img src={p.img} alt={`${p.title} — ${p.tag} in Fort Worth, TX`} />
                <div className="project-card-body">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
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
