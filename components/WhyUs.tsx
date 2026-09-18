import { ArrowRight, CheckPlain, LeafIcon } from "./icons";

const points = [
  "Same-Day Service Available",
  "Licensed & Insured Team",
  "Eco-Friendly Disposal",
  "Transparent, Upfront Pricing",
  "Hassle-Free Service Process",
  "Family-Owned & Operated",
];

export default function WhyUs() {
  return (
    <section className="section section-light" id="why-us">
      <div className="container split">
        <div className="split-copy">
          <span className="tag">
            <LeafIcon />
            Your #1 Choice
          </span>
          <h2>
            What Makes Us The Best
            <br />
            In <span className="green">Fort Worth</span>
          </h2>
          <div className="why-list">
            {points.map((p) => (
              <div className="why-item" key={p}>
                <CheckPlain />
                {p}
              </div>
            ))}
          </div>
          <a href="#contact" className="btn">
            Book Your Pickup Now <ArrowRight />
          </a>
        </div>
        <div className="why-media">
          <img
            src="/images/truck.png"
            alt="McGruder Junk Removal truck with a crew member giving a thumbs up"
          />
        </div>
      </div>
    </section>
  );
}
