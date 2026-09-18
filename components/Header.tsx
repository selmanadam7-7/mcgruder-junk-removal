"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LeafMark } from "./icons";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="McGruder Junk Removal home">
          <LeafMark />
          <span className="logo-text">
            McGruder
            <span>Junk Removal</span>
          </span>
        </Link>

        <nav className={`nav${open ? " open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn header-cta">
          Contact Us
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="#1c2413"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
