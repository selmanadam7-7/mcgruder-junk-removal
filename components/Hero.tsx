import { CheckPlain, LeafIcon, PhoneIcon, Grass } from "./icons";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="tag">
            <LeafIcon />
            Your #1 Choice For Fast, Affordable, and Reliable Junk Removal
          </span>
          <h1>
            Our Dedicated
            <br />
            <span className="green">Junk Removal</span>
            <br />
            Team Of Experts
          </h1>
          <p>
            McGruder Junk Removal will pick up your junk and haul it away the
            same day — with honest, upfront pricing and eco-friendly disposal
            for homes and businesses across Fort Worth.
          </p>
          <a href="tel:+16822268352" className="btn">
            <PhoneIcon />
            (682) 226-8352
          </a>
          <div className="hero-trust">
            <span>
              <CheckPlain size={16} />
              Licensed &amp; Insured
            </span>
            <span>
              <CheckPlain size={16} />
              Same-Day Service
            </span>
            <span>
              <CheckPlain size={16} />
              Upfront Pricing
            </span>
          </div>
        </div>

      </div>
      <div className="hero-band">
        <div className="hero-sticker">
          Say Goodbye
          <span>To Your Junk!</span>
        </div>
        <img
          src="/images/hero.png"
          alt="McGruder Junk Removal team member hauling away a bag of junk"
        />
      </div>
      <div className="hero-grass">
        <Grass />
      </div>
    </section>
  );
}
