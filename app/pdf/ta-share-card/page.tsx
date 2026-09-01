/* eslint-disable @next/next/no-img-element */
import styles from "../en-share-card/share-card.module.css";

export const metadata = {
  title: "ISKCON Salem – Janmashtami 2026 Tamil Share Card",
  robots: { index: false, follow: false },
};

export default function TaShareCard() {
  return (
    <div className={`${styles.card} ${styles.ta}`} data-card="1">

      {/* Header */}
      <header className={styles.header}>
        <img src="/images/logo.png" alt="ISKCON Salem" className={styles.logo} />
        <div className={styles.headerDivider} aria-hidden="true" />
        <div className={styles.headerText}>
          <p className={styles.orgName}>ISKCON Salem</p>
          <p className={styles.templeName}>ஸ்ரீ கௌர ராதா கோகுலானந்தா கோயில்</p>
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
        <p className={styles.imgLabel}>ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி 2026 · அழைப்பிதழ்</p>
        <img
          src="/images/invitation-front-full-ta.jpg"
          alt="ISKCON Salem Janmashtami 2026 Tamil Invitation"
          className={styles.fullImg}
        />
      </div>

      {/* Programme image */}
      <div className={styles.imgWrap}>
        <p className={styles.imgLabel}>நிகழ்ச்சி நிரல்</p>
        <img
          src="/images/invitation-programme-ta.jpg"
          alt="Janmashtami 2026 Tamil Programme Schedule"
          className={styles.fullImg}
        />
      </div>

      {/* QR + Contact side by side */}
      <div className={styles.qrLinksRow}>

        {/* Left — Donation QR */}
        <div className={styles.qrSection}>
          <h2 className={styles.qrHeading}>நன்கொடை அளித்து VIP Pass பெறுங்கள்</h2>
          <p className={styles.qrDonateDetail}>200 தட்டுகளுக்கு ₹10,000 நன்கொடை அளிக்கவும்</p>
          <img
            src="/images/qr-crop.jpg"
            alt="நன்கொடை செய்ய ஸ்கேன் செய்யவும்"
            className={styles.qrImg}
          />
          <p className={styles.qrSub}>PhonePe &nbsp;·&nbsp; Google Pay &nbsp;·&nbsp; Paytm</p>
          <p className={styles.qrDate}>வெள்ளிக்கிழமை, 4 செப்டம்பர் 2026</p>
        </div>

        {/* Right — Contact */}
        <div className={styles.linksSection}>

          <div className={styles.contactBlock}>
            <span className={styles.linkLabel}>இடம்</span>
            <span className={styles.linkText}>Sona College Ground, Salem</span>
          </div>

          <div className={styles.contactOrn} aria-hidden="true">
            <span className={styles.contactOrnLine} />
            <span className={styles.contactOrnFlower}>✦</span>
          </div>

          <div className={styles.contactBlock}>
            <span className={styles.linkLabel}>தொலைபேசி</span>
            <span className={styles.linkText}>+91 97107 72621</span>
          </div>

          <div className={styles.contactOrn} aria-hidden="true">
            <span className={styles.contactOrnLine} />
            <span className={styles.contactOrnFlower}>✦</span>
          </div>

          <p className={styles.thankYou}>
            நன்கொடை அளித்திருந்தால்,<br />மிக்க நன்றி!
          </p>

        </div>

      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p className={styles.hkText}>ஹரே கிருஷ்ணா 🙏</p>
      </div>

    </div>
  );
}
