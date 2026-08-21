"use client";

import { useState } from "react";
import Image from "next/image";
import { eventData } from "@/data/eventData";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#programme", label: "Programme" },
  { href: "#prasadam-seva", label: "Prasadam Seva" },
  { href: "#official-invitation", label: "Invitation" },
  { href: "#share-invitation", label: "Share" },
  { href: "#venue", label: "Venue" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
