import { ArrowUpRight, CheckIcon, LeafIcon, PhoneIcon } from "./icons";

const checks = [
  "Same-Day Pickups Available",
  "Licensed & Fully Insured",
  "Upfront Flat-Rate Pricing",
  "We Donate & Recycle First",
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container split">
        <div className="split-media">
          <img
            src="/images/about.png"
            alt="McGruder crew loading old furniture into a green dumpster"
          />
        </div>
        <div className="split-copy">
          <span className="tag">
            <LeafIcon />
            About Us
          </span>
          <h2>
            The Future Of <span className="green">Junk Removal</span>
          </h2>
          <p>
            McGruder Junk Removal is a family-owned crew serving Fort Worth and
            the surrounding Tarrant County communities. We show up on time, quote
            you an honest price before we lift a finger, and haul everything from
            single items to full property cleanouts — donating and recycling
            whatever we can to keep it out of the landfill.
          </p>
          <div className="check-grid">
            {checks.map((c) => (
              <div className="check-chip" key={c}>
                <CheckIcon />
                {c}
              </div>
            ))}
          </div>
          <div className="about-actions">
            <a href="/about" className="btn">
              Learn More <ArrowUpRight />
            </a>
            <a href="tel:+16822268352" className="phone-chip">
              <span className="icon-circle">
                <PhoneIcon color="#4a7a28" />
              </span>
              (682) 226-8352
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
