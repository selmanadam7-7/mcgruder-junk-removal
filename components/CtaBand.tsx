import { ArrowRight } from "./icons";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <h2>
        Ready To Clear Out Your Junk?
        <br />
        Let’s Get It Done Today!
      </h2>
      <p>Fast, friendly, and affordable junk removal for homes and businesses.</p>
      <a href="/contact" className="btn btn-white">
        Book Your Pickup Now <ArrowRight />
      </a>
    </section>
  );
}
