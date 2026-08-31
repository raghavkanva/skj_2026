/* eslint-disable @next/next/no-img-element */
import styles from "../en-share-card/share-card.module.css";

export const metadata = {
  title: "ISKCON Salem – Janmashtami 2026 Tamil Share Card",
  robots: { index: false, follow: false },
};

export default function TaShareCard() {
  return (
    <div className={`${styles.card} ${styles.ta}`}>

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
        <p className={styles.imgLabel}>ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி 2026 — அழைப்பிதழ்</p>
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

      {/* QR + Links side by side */}
      <div className={styles.qrLinksRow}>

        {/* Donation QR */}
        <div className={styles.qrSection}>
          <h2 className={styles.qrHeading}>நன்கொடை அளித்து VIP Pass பெறுங்கள்</h2>
          <img
            src="/images/qr-crop.jpg"
            alt="நன்கொடை செய்ய ஸ்கேன் செய்யவும்"
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
              <span className={styles.linkSub}>அதிகாரப்பூர்வ இணையதளம்</span>
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
              <span className={styles.linkSub}>Google Maps-ல் தேடுங்கள்</span>
            </div>
          </div>
          <div className={styles.linkRow}>
            <span className={styles.linkEmoji}>📞</span>
            <div className={styles.linkTextWrap}>
              <span className={styles.linkText}>+91 97107 72621</span>
              <span className={styles.linkSub}>தொடர்பு கொள்ளுங்கள்</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p className={styles.hkText}>ஹரே கிருஷ்ண 🙏</p>
      </div>

    </div>
  );
}
