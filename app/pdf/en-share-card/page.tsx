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
        <p className={styles.imgLabel}>Sri Krishna Janmashtami 2026 · Invitation</p>
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

      {/* QR + Contact side by side */}
      <div className={styles.qrLinksRow}>

        {/* Left — Donation QR */}
        <div className={styles.qrSection}>
          <h2 className={styles.qrHeading}>Donate &amp; Receive a VIP Pass</h2>
          <p className={styles.qrDonateDetail}>Donate 200 Plates for ₹10,000</p>
          <img
            src="/images/qr-crop.jpg"
            alt="Scan to Donate"
            className={styles.qrImg}
          />
          <p className={styles.qrSub}>PhonePe &nbsp;·&nbsp; Google Pay &nbsp;·&nbsp; Paytm</p>
        </div>

        {/* Right — Contact */}
        <div className={styles.linksSection}>

          <p className={styles.dateInRight}>Friday, 4 September 2026</p>

          <div className={styles.contactOrn} aria-hidden="true">
            <span className={styles.contactOrnLine} />
            <span className={styles.contactOrnFlower}>✦</span>
          </div>

          <div className={styles.contactBlock}>
            <span className={styles.linkLabel}>VENUE</span>
            <span className={styles.linkText}>Sona College Ground, Salem</span>
          </div>

          <div className={styles.contactOrn} aria-hidden="true">
            <span className={styles.contactOrnLine} />
            <span className={styles.contactOrnFlower}>✦</span>
          </div>

          <div className={styles.contactBlock}>
            <span className={styles.linkLabel}>PHONE</span>
            <span className={styles.linkText}>+91 97107 72621</span>
          </div>

          <div className={styles.contactOrn} aria-hidden="true">
            <span className={styles.contactOrnLine} />
            <span className={styles.contactOrnFlower}>✦</span>
          </div>

          <p className={styles.thankYou}>
            If you have already donated,<br />Thank you very much!
          </p>

        </div>

      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p className={styles.hkText}>Hare Krishna 🙏</p>
      </div>

    </div>
  );
}
