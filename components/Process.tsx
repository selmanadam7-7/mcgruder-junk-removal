const steps = [
  {
    title: "Contact Us",
    text: "Call us or fill out our quick online form to tell us what you need removed. We'll give you a free, no-obligation estimate.",
  },
  {
    title: "Schedule A Pickup",
    text: "Pick a day and time that works for you. We offer same-day and next-day service options.",
  },
  {
    title: "We Haul It Away",
    text: "Our friendly, professional team arrives on time, removes your junk quickly, and leaves your space clean.",
  },
  {
    title: "Eco-Friendly Disposal",
    text: "We donate, recycle, and responsibly dispose of your unwanted items to reduce landfill waste.",
  },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <h2>
            How Our Junk <span className="green">Removal</span>
            <br />
            Process <span className="green">Works</span>
          </h2>
        </div>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div className="process-step" key={s.title}>
              <div className="num">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
