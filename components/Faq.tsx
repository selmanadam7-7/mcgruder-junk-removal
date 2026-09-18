"use client";

import { useState } from "react";
import { Chevron } from "./icons";
import { HOME_FAQS } from "@/lib/faqs";

export default function Faq({
  items = HOME_FAQS,
  title = "FAQ",
  id = "faq",
}: {
  items?: { q: string; a: string }[];
  title?: string;
  id?: string;
}) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
        </div>
        <div className="faq-wrap">
          {items.map((f, i) => (
            <div className={`faq-item${openIdx === i ? " open" : ""}`} key={f.q}>
              <button
                className="faq-q"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                aria-expanded={openIdx === i}
              >
                {f.q}
                <Chevron />
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
