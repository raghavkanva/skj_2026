"use client";

import type { Locale } from "@/content/types";
import styles from "./FloatingLanguageSwitcher.module.css";

const langOptions: Record<Locale, { href: string; label: string; short: string }[]> = {
  en: [
    { href: "/ta", label: "தமிழ்", short: "TA" },
    { href: "/hi", label: "हिन्दी", short: "HI" },
  ],
  ta: [
    { href: "/", label: "English", short: "EN" },
    { href: "/hi", label: "हिन्दी", short: "HI" },
  ],
  hi: [
    { href: "/", label: "English", short: "EN" },
    { href: "/ta", label: "தமிழ்", short: "TA" },
  ],
};

interface Props {
  currentLocale: Locale;
}

export default function FloatingLanguageSwitcher({ currentLocale }: Props) {
  const options = langOptions[currentLocale];

  return (
    <div className={styles.wrap} aria-label="Switch language">
      {options.map((opt) => (
        <a key={opt.href} href={opt.href} className={styles.btn}>
          <span className={styles.label}>{opt.label}</span>
        </a>
      ))}
    </div>
  );
}
