/* eslint-disable @next/next/no-img-element */
import styles from "./pdf-en-invite.module.css";

export const metadata = {
  title: "ISKCON Salem Sri Krishna Janmashtami 2026 – English Invitation",
  robots: { index: false, follow: false },
};

const MAPS_URL = "https://maps.app.goo.gl/h4jugsJbuYzx3Gzc9";
const YT_URL = "https://youtu.be/GfmlWuVKVEE?si=jNn7weBA6Xu2Csme";
const SITES_URL = "https://sites.google.com/view/iskconstonetemple/home";
const WA_URL =
  "https://wa.me/919710772621?text=Hare%20Krishna%20Prabhu%20%F0%9F%99%8F%0A%0AI%20would%20like%20to%20know%20more%20about%20the%20Sri%20Krishna%20Janmashtami%202026%20celebration%20at%20ISKCON%20Salem.%0A%0AHare%20Krishna%20%F0%9F%99%8F";

export default function EnInvite() {
  return (
    <div className={styles.root}>

      {/* ═══════════════════════════════════════════
          PAGE 1
          ═══════════════════════════════════════════ */}

      {/* 1. Identity Line */}
      <div className={styles.identityLine}>
        <img src="/images/logo.png" alt="ISKCON Salem" className={styles.logo} />
        <div className={styles.identityDivider} aria-hidden="true" />
        <div className={styles.identityText}>
          <p className={styles.orgName}>ISKCON Salem</p>
          <p className={styles.templeName}>Sri Gaura Radha Gokulananda Temple</p>
        </div>
      </div>

      {/* 2–3. Event title + year */}
      <div className={styles.titleSection}>
        <h1 className={styles.eventTitle}>Sri Krishna<br />Janmashtami</h1>
        <p className={styles.eventYear}>2026</p>
      </div>

      {/* 4–6. Date + Venue + Maps */}
      <div className={styles.dateVenueSection}>
        <p className={styles.eventDate}>Friday, 4 September 2026</p>
        <p className={styles.eventVenue}>Sona College Ground, Salem</p>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
          Open in Google Maps
        </a>
      </div>

      {/* 7. Short invitation */}
      <div className={styles.shortInvite}>
        <p className={styles.shortInvitePara}>
          You and your family are warmly invited to join ISKCON Salem in celebrating the divine appearance of Bhagavan Sri Krishna.
        </p>
      </div>

      {/* 8. Front invitation artwork */}
      <div className={styles.artworkWrap}>
        <img
          src="/images/invitation-front-full.jpg"
          alt="ISKCON Salem Sri Krishna Janmashtami 2026 – Official Invitation"
          className={styles.artImg}
        />
      </div>

      {/* 9–10. Programme heading + artwork */}
      <div className={styles.progSection}>
        <h2 className={styles.sectionHeading}>Janmashtami Programme</h2>
        <img
          src="/images/invitation-programme.jpg"
          alt="ISKCON Salem Janmashtami 2026 – Full-Day Programme"
          className={styles.artImg}
        />
      </div>

      {/* 11. 2025 Highlights banner */}
      <div className={styles.highlightsLine}>
        <div className={styles.highlightsBanner}>
          <span className={styles.highlightsLabel}>Janmashtami 2025 Highlights</span>
          <span className={styles.highlightsDot} aria-hidden="true">&middot;</span>
          <a href={YT_URL} target="_blank" rel="noopener noreferrer" className={styles.ytLink}>
            ▶ Watch on YouTube
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          PAGE 2
          ═══════════════════════════════════════════ */}
      <div className={styles.page2}>

        {/* 1. Warm invitation heading */}
        <h2 className={styles.warmHeading}>A Warm Invitation to You and Your Family</h2>

        {/* 2. Wide compact warm invitation panel */}
        <div className={styles.warmPanel}>
          <p className={styles.warmPara}>
            ISKCON Salem warmly welcomes you and your family to the Grand Sri Krishna Janmashtami Celebrations!
          </p>
          <p className={styles.warmHighlight}>
            Over <span className={styles.lakhNum}>1 Lakh Devotees</span> are expected to join us this year.
          </p>
          <p className={styles.warmPara}>
            Full Feast Prasadam will be distributed to all who attend. Come, be part of this auspicious occasion and receive the blessings of Sri Krishna.
          </p>
        </div>

        {/* 3–4. Prasadam Seva */}
        <h2 className={styles.sectionHeading}>Prasadam Seva</h2>
        <div className={styles.artworkWrap2}>
          <img
            src="/images/invitation-seva.jpg"
            alt="ISKCON Salem Janmashtami 2026 – Prasadam Seva"
            className={styles.artImg}
          />
        </div>

        {/* 5–6. VIP Pass */}
        <div className={styles.vipSection}>
          <h2 className={styles.vipHeading}>Donate &amp; Receive a VIP Pass</h2>
          <p className={styles.vipSub}>
            For your contribution towards the Sri Krishna Janmashtami 2026 celebration, receive a VIP Pass for:
          </p>
          <div className={styles.vipGrid}>
            <div className={styles.vipItem}>
              <span className={styles.vipCheck}>&#10003;</span> Special Darshan
            </div>
            <div className={styles.vipItem}>
              <span className={styles.vipCheck}>&#10003;</span> Cultural &amp; devotional programs
            </div>
            <div className={styles.vipItem}>
              <span className={styles.vipCheck}>&#10003;</span> Feast Prasadam
            </div>
            <div className={styles.vipItem}>
              <span className={styles.vipCheck}>&#10003;</span> Parking facility
            </div>
          </div>
        </div>

        {/* 7–11. Stay Connected */}
        <div className={styles.staySection}>
          <h2 className={styles.stayHeading}>Stay Connected with ISKCON Salem</h2>
          <p className={styles.staySub}>
            To know more about our temple, Bhagavad Gita classes and upcoming festivals, click below:
          </p>
          <a href={SITES_URL} target="_blank" rel="noopener noreferrer" className={styles.sitesBtn}>
            Temple, Gita Classes &amp; Festivals &rarr; Click Here
          </a>
          <p className={styles.sitesUrl}>
            <a href={SITES_URL} target="_blank" rel="noopener noreferrer" className={styles.sitesUrlLink}>
              {SITES_URL}
            </a>
          </p>
          <p className={styles.trustLine}>
            <strong>Safe to open:</strong> This link contains only our official YouTube, WhatsApp &amp; Facebook links.
          </p>
        </div>

        {/* 12. WhatsApp contact strip */}
        <div className={styles.contactStrip}>
          <span className={styles.contactFor}>For more information</span>
          <span className={styles.contactName}>Srinivasa Krishna Dasa</span>
          <span className={styles.contactPhone}>+91 97107 72621</span>
          <span className={styles.contactDot} aria-hidden="true">&middot;</span>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.waLink}>
            Click here to chat on WhatsApp &rarr;
          </a>
        </div>

      </div>
    </div>
  );
}
