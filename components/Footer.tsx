import Link from "next/link";
import { LeafMark } from "./icons";
import { SERVICES } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo" aria-label="McGruder Junk Removal home">
            <LeafMark />
            <span className="logo-text">
              McGruder
              <span>Junk Removal</span>
            </span>
          </Link>
          <p>
            At McGruder, we are dedicated to providing efficient, eco-friendly,
            and reliable junk removal for homes and businesses across Fort
            Worth, Texas.
          </p>
          <div className="footer-phones">
            <div className="footer-phone">
              <small>24/7 Call Us</small>
              <strong>
                <a href="tel:+16822268352">(682) 226-8352</a>
              </strong>
            </div>
            <div className="footer-phone">
              <small>Service Area</small>
              <strong>Fort Worth, TX &amp; Tarrant County</strong>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quicklinks</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            <li><Link href="/service-areas">Service Areas</Link></li>
            <li><Link href="/projects">Recent Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-updates">
          <h4>Get Started</h4>
          <p style={{ marginBottom: 16 }}>
            Text a photo of your junk to{" "}
            <a href="sms:+16822268352" style={{ color: "#fff", fontWeight: 700 }}>
              (682) 226-8352
            </a>{" "}
            and get an honest flat price in minutes.
          </p>
          <Link href="/contact" className="btn" style={{ padding: "12px 22px" }}>
            Get A Free Quote
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} McGruder Junk Removal. All rights reserved.
      </div>
    </footer>
  );
}
