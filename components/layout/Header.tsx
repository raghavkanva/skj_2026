"use client";

import { useState } from "react";
import Image from "next/image";
import { eventData } from "@/data/eventData";
import type { Locale } from "@/content/types";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#programme", label: "Programme" },
  { href: "#prasadam-seva", label: "Prasadam Seva" },
  { href: "#official-invitation", label: "Invitation" },
  { href: "#share-invitation", label: "Share" },
  { href: "#venue", label: "Venue" },
];

const langLinks: Record<Locale, { href: string; label: string }[]> = {
  en: [
    { href: "/ta", label: "தமிழ்" },
    { href: "/hi", label: "हिन्दी" },
  ],
  ta: [
    { href: "/", label: "English" },
    { href: "/hi", label: "हिन्दी" },
  ],
  hi: [
    { href: "/", label: "English" },
    { href: "/ta", label: "தமிழ்" },
  ],
};

interface Props {
  locale?: Locale;
}

export default function Header({ locale = "en" }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const langs = langLinks[locale];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.brand} aria-label="ISKCON Salem – back to top">
          <Image
            src="/images/logo.png"
            alt="ISKCON Salem logo"
            width={44}
            height={44}
            className={styles.logo}
            priority
          />
          <div className={styles.brandText}>
            <span className={styles.brandName}>ISKCON Salem</span>
            <span className={styles.brandSub}>Hare Krishna Land, Karuppur</span>
          </div>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          {langs.map((lang) => (
            <a key={lang.href} href={lang.href} className={styles.langLink}>
              {lang.label}
            </a>
          ))}
          <span className={styles.navDivider} aria-hidden="true" />
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href="#programme" className={styles.navCta}>
            Festival Details
          </a>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className={styles.mobileMenu} aria-label="Mobile navigation">
          {langs.map((lang) => (
            <a
              key={lang.href}
              href={lang.href}
              className={`${styles.mobileLink} ${styles.mobileLangLink}`}
            >
              {lang.label}
            </a>
          ))}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={eventData.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Official Website ↗
          </a>
        </nav>
      )}
    </header>
  );
}
