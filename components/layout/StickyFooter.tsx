"use client";

import { buildBaseUpiUri } from "@/lib/upi";
import styles from "./StickyFooter.module.css";

interface StickyFooterProps {
  upiUri?: string;
}

export default function StickyFooter({ upiUri }: StickyFooterProps) {
  const uri = upiUri ?? buildBaseUpiUri();

  function handleDonate() {
    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = uri;
    } else {
      const el = document.getElementById("donation");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className={styles.footer} role="navigation" aria-label="Quick actions">
      <button
        onClick={handleDonate}
        className={styles.donateBtn}
        aria-label="Donate now via UPI for Prasadam Seva"
      >
        Donate Now
      </button>
      <a href="#programme" className={styles.programmeBtn}>
        Programme
      </a>
    </div>
  );
}
