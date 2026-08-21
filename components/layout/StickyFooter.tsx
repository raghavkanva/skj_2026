"use client";

import styles from "./StickyFooter.module.css";

export default function StickyFooter() {
  function handleDonate() {
    const el = document.getElementById("donation");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.footer} role="navigation" aria-label="Quick actions">
      <button
        onClick={handleDonate}
        className={styles.donateBtn}
        aria-label="Go to Prasadam Seva donation section"
      >
        Donate Now
      </button>
      <a href="#programme" className={styles.programmeBtn}>
        Programme
      </a>
    </div>
  );
}
