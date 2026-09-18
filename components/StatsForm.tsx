import { ArrowRight } from "./icons";
import QuoteForm from "./QuoteForm";

export default function StatsForm() {
  return (
    <section className="stats-form" id="contact">
      <div className="container stats-grid">
        <div className="stats-copy">
          <div className="big">20+</div>
          <h3>
            Cities Served
            <br />
            Across Tarrant County
          </h3>
          <p>
            From Fort Worth to Arlington, Keller to Burleson — we offer
            homeowners and businesses reliable, on-time junk removal scheduled
            around your day, not ours.
          </p>
          <p>
            Whatever you need gone, we&apos;ve got a truck and a crew that will
            perfectly suit you.
          </p>
          <a href="tel:+16822268352" className="btn btn-white">
            Book Your Pickup Now <ArrowRight />
          </a>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
