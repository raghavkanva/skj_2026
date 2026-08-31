/* eslint-disable @next/next/no-img-element */
import styles from "./share-card.module.css";

export const metadata = {
  title: "ISKCON Salem – Janmashtami 2026 English Share Card",
  robots: { index: false, follow: false },
};

export default function EnShareCard() {
  return (
    <div className={styles.card} data-card="1">

      {/* Header */}
      <header className={styles.header}>
        <img src="/images/logo.png" alt="ISKCON Salem" className={styles.logo} />
        <div className={styles.headerDivider} aria-hidden="true" />
        <div className={styles.headerText}>
          <p className={styles.orgName}>ISKCON Salem</p>
          <p className={styles.templeName}>Sri Gaura Radha Gokulananda Temple</p>
        </div>
      </header>

      {/* Ornament */}
      <div className={styles.ornRow} aria-hidden="true">
        <span className={styles.ornLine} />
        <span className={styles.ornFlower}>✦</span>
        <span className={styles.ornLine} />
      </div>

      {/* Invitation artwork */}
      <div className={styles.imgWrap}>
        <p className={styles.imgLabel}>Sri Krishna Janmashtami 2026 — Invitation</p>
        <img
          src="/images/invitation-front-full.jpg"
          alt="ISKCON Salem Janmashtami 2026 Invitation"
          className={styles.fullImg}
        />
      </div>

      {/* Programme image */}
      <div className={styles.imgWrap}>
        <p className={styles.imgLabel}>Programme Schedule</p>
        <img
          src="/images/invitation-programme.jpg"
          alt="Janmashtami 2026 Programme Schedule"
          className={styles.fullImg}
        />
      </div>

      {/* QR + Links side by side */}
      <div className={styles.qrLinksRow}>

        {/* Donation QR */}
        <div className={styles.qrSection}>
          <h2 className={styles.qrHeading}>Donate &amp; Receive a VIP Pass</h2>
          <img
            src="/images/qr-crop.jpg"
            alt="Scan to Donate — PhonePe, Google Pay, Paytm"
            className={styles.qrImg}
          />
          <p className={styles.qrSub}>PhonePe &nbsp;·&nbsp; Google Pay &nbsp;·&nbsp; Paytm</p>
        </div>

        {/* Links — readable text */}
        <div className={styles.linksSection}>
          <div className={styles.linkRow}>
            <span className={styles.linkEmoji}>🌐</span>
            <div className={styles.linkTextWrap}>
              <span className={styles.linkText}>iskconsalem.com</span>
              <span className={styles.linkSub}>Official Website</span>
            </div>
          </div>
          <div className={styles.linkRow}>
            <span className={styles.linkEmoji}>💬</span>
            <div className={styles.linkTextWrap}>
              <span className={styles.linkText}>+91 97107 72621</span>
              <span className={styles.linkSub}>WhatsApp</span>
            </div>
          </div>
          <div className={styles.linkRow}>
            <span className={styles.linkEmoji}>📍</span>
            <div className={styles.linkTextWrap}>
              <span className={styles.linkText}>Sona College Ground, Salem</span>
              <span className={styles.linkSub}>Search on Google Maps</span>
            </div>
          </div>
          <div className={styles.linkRow}>
            <span className={styles.linkEmoji}>📞</span>
            <div className={styles.linkTextWrap}>
              <span className={styles.linkText}>+91 97107 72621</span>
              <span className={styles.linkSub}>Call us</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p className={styles.hkText}>Hare Krishna 🙏</p>
      </div>

    </div>
  );
}
