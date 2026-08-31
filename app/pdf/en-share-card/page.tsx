/* eslint-disable @next/next/no-img-element */
import styles from "./share-card.module.css";

export const metadata = {
  title: "ISKCON Salem – Janmashtami 2026 English Share Card",
  robots: { index: false, follow: false },
};

const MAPS_URL    = "https://maps.app.goo.gl/h4jugsJbuYzx3Gzc9";
const WA_URL      = "https://wa.me/919710772621";
const WEBSITE_URL = "https://iskconsalem.com";

export default function EnShareCard() {
  return (
    <div className={styles.card}>

      {/* ── Header ── */}
      <header className={styles.header}>
        <img src="/images/logo.png" alt="ISKCON Salem" className={styles.logo} />
        <div className={styles.headerDivider} aria-hidden="true" />
        <div className={styles.headerText}>
          <p className={styles.orgName}>ISKCON Salem</p>
          <p className={styles.templeName}>Sri Gaura Radha Gokulananda Temple</p>
        </div>
      </header>

      {/* ── Title ── */}
      <div className={styles.titleSection}>
        <div className={styles.ornRow} aria-hidden="true">
          <span className={styles.ornLine} />
          <span className={styles.ornFlower}>✦</span>
          <span className={styles.ornLine} />
        </div>
        <h1 className={styles.eventTitle}>Sri Krishna<br />Janmashtami</h1>
        <p className={styles.eventYear}>2026</p>
        <div className={styles.ornRow} aria-hidden="true">
          <span className={styles.ornLine} />
          <span className={styles.ornFlower}>✦</span>
          <span className={styles.ornLine} />
        </div>
      </div>

      {/* ── Date + Venue ── */}
      <div className={styles.dateSection}>
        <p className={styles.eventDate}>Friday, 4 September 2026</p>
        <p className={styles.eventVenue}>Sona College Ground, Salem</p>
        <span className={styles.freeTag}>Free Entry &nbsp;·&nbsp; Free Prasadam for All</span>
      </div>

      {/* ── Programme ── */}
      <div className={styles.progSection}>
        <h2 className={styles.progHeading}>Janmashtami Programme</h2>
        <div className={styles.progList}>
          <div className={styles.progRow}>
            <span className={styles.progTime}>8:00 AM</span>
            <span className={styles.progEvent}>Programs Begin</span>
          </div>
          <div className={styles.progRow}>
            <span className={styles.progTime}>All Day</span>
            <span className={styles.progEvent}>Cultural &amp; Devotional Programs</span>
          </div>
          <div className={styles.progRow}>
            <span className={styles.progTime}>All Day</span>
            <span className={styles.progEvent}>Free Feast Prasadam for Everyone</span>
          </div>
          <div className={styles.progRow}>
            <span className={styles.progTime}>12 Midnight</span>
            <span className={styles.progEvent}>Sri Krishna Janma Abhishek</span>
          </div>
        </div>
      </div>

      {/* ── Donation QR ── */}
      <div className={styles.qrSection}>
        <h2 className={styles.qrHeading}>Donate &amp; Receive a VIP Pass</h2>
        <img src="/images/qr-crop.jpg" alt="Scan to Donate" className={styles.qrImg} />
        <p className={styles.qrSub}>Scan with PhonePe &nbsp;·&nbsp; Google Pay &nbsp;·&nbsp; Paytm</p>
      </div>

      {/* ── Links ── */}
      <div className={styles.linksSection}>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
          📍 Google Maps
        </a>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
          💬 WhatsApp
        </a>
        <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
          🌐 iskconsalem.com
        </a>
      </div>

      {/* ── Contact ── */}
      <div className={styles.contactSection}>
        <p className={styles.contactName}>Srinivasa Krishna Dasa</p>
        <p className={styles.contactPhone}>+91 97107 72621</p>
      </div>

      {/* ── Footer ── */}
      <div className={styles.footer}>
        <p className={styles.hkText}>Hare Krishna 🙏</p>
      </div>

    </div>
  );
}
