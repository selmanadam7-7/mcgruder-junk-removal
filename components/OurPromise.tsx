import { QuoteMark } from "./icons";

export default function OurPromise() {
  return (
    <section className="section" id="promise">
      <div className="container testimonial-grid">
        <div className="testimonial-left">
          <h2>
            Our
            <br />
            Promise
          </h2>
          <div className="rating-panel">
            <div className="panel-eyebrow">The McGruder Standard</div>
            <h3>Fast & Reliable Disposal</h3>
            <div className="panel-chips">
              <span className="panel-chip">Same-Day Hauling</span>
              <span className="panel-chip">Locally Owned & Operated</span>
              <span className="panel-chip">Licensed & Insured</span>
              <span className="panel-chip">Donation-First Disposal</span>
            </div>
          </div>
        </div>

        <div className="testimonial-quote">
          <div className="quote-mark">
            <QuoteMark />
          </div>
          <p>
            “Every job gets the same deal: one honest flat price before we lift
            a finger, a crew that shows up when we said we would, and a space
            left cleaner than we found it. Anything usable gets donated before
            the landfill ever sees it. And if something isn&apos;t right, call
            us — we&apos;ll make it right.”
          </p>
          <div className="testimonial-author">
            <strong>The McGruder Team</strong>
            <span>Fort Worth, Texas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
