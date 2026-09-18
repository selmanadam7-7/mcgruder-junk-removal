import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <main>
      <section className="section" style={{ textAlign: "center", padding: "140px 24px" }}>
        <div className="container">
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(70px, 10vw, 120px)",
              color: "var(--green-tint)",
              lineHeight: 1,
            }}
          >
            404
          </div>
          <h1 style={{ fontSize: "clamp(26px, 3.4vw, 38px)", margin: "10px 0 14px" }}>
            This Page Got <span className="green">Hauled Away</span>
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 440, margin: "0 auto 28px" }}>
            Whatever was here is gone — donated, recycled, or responsibly
            disposed of. Let&apos;s get you back somewhere useful.
          </p>
          <Link href="/" className="btn">
            Back To Home <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
