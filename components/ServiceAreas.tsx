import Link from "next/link";
import { ArrowRight, LeafIcon, PinIcon } from "./icons";
import { AREAS } from "@/lib/areas";

export default function ServiceAreas() {
  return (
    <section className="section" id="areas">
      <div className="container">
        <div className="section-head">
          <span className="tag">
            <LeafIcon />
            Your #1 Choice
          </span>
          <h2>
            Proudly Serving <span className="green">Fort Worth</span>
            <br />
            And Surrounding Areas
          </h2>
        </div>

        <div className="areas-grid">
          {AREAS.map((a) => (
            <Link
              className="area-pill"
              key={a.slug}
              href={`/service-areas/${a.slug}`}
            >
              <PinIcon />
              {a.name}
            </Link>
          ))}
        </div>

        <div className="areas-cta">
          <Link href="/contact" className="btn">
            Book Your Pickup Now <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
