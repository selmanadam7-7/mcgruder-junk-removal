import Link from "next/link";

const services = [
  {
    img: "/images/card-residential.png",
    title: "Residential Junk Removal",
    href: "/services/residential-junk-removal",
    text: "Furniture, mattresses, garage clutter, yard debris — we clear it out of your home fast and sweep up before we leave.",
  },
  {
    img: "/images/card-commercial.png",
    title: "Commercial Junk Removal",
    href: "/services/commercial-junk-removal",
    text: "Office cleanouts, retail spaces, and rental turnovers. We work around your schedule so business never slows down.",
  },
  {
    img: "/images/card-appliance.png",
    title: "Appliance & Furniture Hauling",
    href: "/services/appliance-removal",
    text: "Washers, fridges, couches, and anything too heavy to move alone. We do the lifting and the eco-friendly disposal.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <h2>
            Our Junk Removal <span className="green">Services</span>
          </h2>
          <p>
            From a single couch to a full property cleanout, McGruder handles the
            heavy lifting. One call, one upfront price, and your space is clear
            again.
          </p>
        </div>

        <div className="services-row">
          <div className="rating-panel">
            <div className="panel-eyebrow">Why Fort Worth Calls Us</div>
            <h3>Fast & Reliable Disposal</h3>
            <div className="panel-chips">
              <span className="panel-chip">Same-Day Hauling</span>
              <span className="panel-chip">Locally Owned & Operated</span>
              <span className="panel-chip">Licensed & Insured</span>
              <span className="panel-chip">Donation-First Disposal</span>
            </div>
          </div>

          {services.map((s) => (
            <Link href={s.href} className="service-card" key={s.title}>
              <img src={s.img} alt={s.title} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Link>
          ))}
        </div>

        <div className="dots" aria-hidden>
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </section>
  );
}
