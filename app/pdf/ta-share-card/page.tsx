/* eslint-disable @next/next/no-img-element */
import styles from "../en-share-card/share-card.module.css";

export const metadata = {
  title: "ISKCON Salem – Janmashtami 2026 Tamil Share Card",
  robots: { index: false, follow: false },
};

const MAPS_URL    = "https://maps.app.goo.gl/h4jugsJbuYzx3Gzc9";
const WA_URL      = "https://wa.me/919710772621";
const WEBSITE_URL = "https://iskconsalem.com";

export default function TaShareCard() {
  return (
    <div className={`${styles.card} ${styles.ta}`}>

      {/* ── Header ── */}
      <header className={styles.header}>
        <img src="/images/logo.png" alt="ISKCON Salem" className={styles.logo} />
        <div className={styles.headerDivider} aria-hidden="true" />
        <div className={styles.headerText}>
          <p className={styles.orgName}>ISKCON Salem</p>
          <p className={styles.templeName}>ஸ்ரீ ஸ்ரீ ராதா கோகுலானந்தா கோயில்</p>
        </div>
      </header>

      {/* ── Title ── */}
      <div className={styles.titleSection}>
        <div className={styles.ornRow} aria-hidden="true">
          <span className={styles.ornLine} />
          <span className={styles.ornFlower}>✦</span>
          <span className={styles.ornLine} />
        </div>
        <h1 className={styles.eventTitle}>ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி</h1>
        <p className={styles.eventYear}>2026</p>
        <div className={styles.ornRow} aria-hidden="true">
          <span className={styles.ornLine} />
          <span className={styles.ornFlower}>✦</span>
          <span className={styles.ornLine} />
        </div>
      </div>

      {/* ── Date + Venue ── */}
      <div className={styles.dateSection}>
        <p className={styles.eventDate}>வெள்ளிக்கிழமை, 4 செப்டம்பர் 2026</p>
        <p className={styles.eventVenue}>Sona College Ground, Salem</p>
        <span className={styles.freeTag}>இலவச நுழைவு &nbsp;·&nbsp; அனைவருக்கும் இலவச பிரசாதம்</span>
      </div>

      {/* ── Programme ── */}
      <div className={styles.progSection}>
        <h2 className={styles.progHeading}>ஜன்மாஷ்டமி நிகழ்ச்சி நிரல்</h2>
        <div className={styles.progList}>
          <div className={styles.progRow}>
            <span className={styles.progTime}>காலை 8:00</span>
            <span className={styles.progEvent}>நிகழ்ச்சிகள் தொடங்கும்</span>
          </div>
          <div className={styles.progRow}>
            <span className={styles.progTime}>நாள் முழுவதும்</span>
            <span className={styles.progEvent}>கலை மற்றும் பக்தி நிகழ்ச்சிகள்</span>
          </div>
          <div className={styles.progRow}>
            <span className={styles.progTime}>நாள் முழுவதும்</span>
            <span className={styles.progEvent}>அனைவருக்கும் இலவச விருந்து பிரசாதம்</span>
          </div>
          <div className={styles.progRow}>
            <span className={styles.progTime}>நள்ளிரவு 12</span>
            <span className={styles.progEvent}>ஸ்ரீ கிருஷ்ண ஜன்மாபிஷேகம்</span>
          </div>
        </div>
      </div>

      {/* ── Donation QR ── */}
      <div className={styles.qrSection}>
        <h2 className={styles.qrHeading}>நன்கொடை அளித்து VIP Pass பெறுங்கள்</h2>
        <img src="/images/qr-crop.jpg" alt="நன்கொடை செய்ய ஸ்கேன் செய்யவும்" className={styles.qrImg} />
        <p className={styles.qrSub}>PhonePe &nbsp;·&nbsp; Google Pay &nbsp;·&nbsp; Paytm மூலம் ஸ்கேன் செய்யவும்</p>
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
        <p className={styles.hkText}>ஹரே கிருஷ்ண 🙏</p>
      </div>

    </div>
  );
}
