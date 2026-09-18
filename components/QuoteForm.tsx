"use client";

import { useState } from "react";

// Optional CRM/webhook integration: set NEXT_PUBLIC_FORM_ENDPOINT in the
// hosting environment (e.g. a GoHighLevel/CleanerClicks form webhook URL) and
// submissions POST there. Without it, the form hands the request off as a
// text message to the business phone — every lead still reaches McGruder.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";
const PHONE_DISPLAY = "(682) 226-8352";
const PHONE_E164 = "+16822268352";

type SentState =
  | { mode: "none" }
  | { mode: "webhook" }
  | { mode: "sms"; summary: string };

export default function QuoteForm({ bordered = false }: { bordered?: boolean }) {
  const [sent, setSent] = useState<SentState>({ mode: "none" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (FORM_ENDPOINT) {
      setSending(true);
      try {
        const res = await fetch(FORM_ENDPOINT, { method: "POST", body: data });
        if (!res.ok) throw new Error("Submission failed");
        setSent({ mode: "webhook" });
      } catch {
        alert(`Something went wrong. Please call or text us at ${PHONE_DISPLAY}.`);
      } finally {
        setSending(false);
      }
      return;
    }

    const lines = [
      "Hi McGruder — I'd like a junk removal quote.",
      `Name: ${data.get("first_name")} ${data.get("last_name")}`.trim(),
      data.get("phone") ? `Phone: ${data.get("phone")}` : "",
      data.get("email") ? `Email: ${data.get("email")}` : "",
      data.get("service") ? `Service: ${data.get("service")}` : "",
      data.get("property") ? `Property: ${data.get("property")}` : "",
      data.get("message") ? `Details: ${data.get("message")}` : "",
    ].filter(Boolean);
    const summary = lines.join("\n");

    setSent({ mode: "sms", summary });
    window.location.href = `sms:${PHONE_E164}?body=${encodeURIComponent(summary)}`;
  }

  return (
    <div className={`form-card${bordered ? " bordered" : ""}`}>
      {sent.mode === "webhook" ? (
        <div className="form-success">
          <h3>Thank You!</h3>
          <p>
            We&apos;ve received your request and will get back to you shortly.
            Need it gone right now? Call{" "}
            <a href={`tel:${PHONE_E164}`} style={{ fontWeight: 700 }}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      ) : sent.mode === "sms" ? (
        <div className="form-success">
          <h3>Your Request Is Ready</h3>
          <p>
            We opened a text message to us with your details — just hit send.
            If it didn&apos;t open, call or text{" "}
            <a href={`tel:${PHONE_E164}`} style={{ fontWeight: 700 }}>
              {PHONE_DISPLAY}
            </a>{" "}
            with the info below.
          </p>
          <pre
            style={{
              textAlign: "left",
              background: "var(--green-chip)",
              borderRadius: 8,
              padding: "14px 16px",
              marginTop: 16,
              fontSize: 13.5,
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
            }}
          >
            {sent.summary}
          </pre>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="first_name">First Name</label>
              <input id="first_name" name="first_name" type="text" required />
            </div>
            <div className="form-field">
              <label htmlFor="last_name">Last Name</label>
              <input id="last_name" name="last_name" type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Select a service...
                </option>
                <option>Residential Junk Removal</option>
                <option>Commercial Junk Removal</option>
                <option>Furniture Removal</option>
                <option>Appliance Removal</option>
                <option>Garage Cleanout</option>
                <option>Property Cleanout</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="property">Property Type</label>
              <select id="property" name="property" defaultValue="">
                <option value="" disabled>
                  Select one...
                </option>
                <option>Home</option>
                <option>Apartment</option>
                <option>Business / Office</option>
                <option>Rental Property</option>
              </select>
            </div>
          </div>
          <div className="form-field full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us what you need hauled away..."
            />
          </div>
          <button type="submit" className="btn" disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}
