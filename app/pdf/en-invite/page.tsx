/* eslint-disable @next/next/no-img-element */
import styles from "../shared/pdf.module.css";
import { en } from "@/content/en";

export const metadata = {
  title: "ISKCON Salem Sri Krishna Janmashtami 2026 – English Invitation",
  robots: { index: false, follow: false },
};

const MAPS_URL = "https://maps.app.goo.gl/h4jugsJbuYzx3Gzc9";
const WA_URL = "https://wa.me/919710772621";
const YT_URL = "https://youtu.be/GfmlWuVKVEE?si=jNn7weBA6Xu2Csme";

export default function EnInvite() {
  return (
    <div className={styles.pdfRoot}>

      {/* ── PAGE 1: COVER ── */}
      <div className={styles.cover}>
        <div className={styles.logoWrap}>
          <img src="/images/logo.png" alt="ISKCON Salem" className={styles.logo} />
        </div>
        <p className={styles.orgName}>ISKCON Salem</p>
        <p className={styles.templeName}>Sri Gaura Radha Gokulananda Temple</p>
        <h1 className={styles.eventTitle}>Sri Krishna<br />Janmashtami</h1>
        <p className={styles.eventYear}>2026</p>
        <p className={styles.eventMeta}>Friday, 4 September 2026</p>
        <p className={styles.eventVenue}>Sona College Ground, Salem</p>
        <p className={styles.coverText}>
          You and your family are warmly invited to join ISKCON Salem in celebrating the divine appearance of Bhagavan Sri Krishna.
        </p>
      </div>

      {/* Front invitation image */}
      <div className={styles.section} style={{ paddingTop: "2mm", paddingBottom: "5mm" }}>
        <img
          src="/images/invitation-front-full.jpg"
          alt="ISKCON Salem Sri Krishna Janmashtami 2026 – Official Invitation"
          className={styles.frontImg}
        />
      </div>

      {/* Formal invitation (concise) */}
      <div className={styles.formalInvite}>
        <h2 className={styles.formalHeading}>{en.personalInvitation.heading}</h2>
        <p className={styles.greeting}>{en.personalInvitation.openingGreeting}</p>
        {en.personalInvitation.paragraphs.map((p, i) => (
          <p key={i} className={styles.para}>{p}</p>
        ))}
        <p className={styles.greeting}>{en.personalInvitation.closingGreeting}</p>
      </div>

      {/* Event essentials */}
      <div className={styles.essSection}>
        <div className={styles.essGrid}>
          {Object.values(en.eventEssentials.cards).map((card) => (
            <div key={card.kicker} className={styles.essCard}>
              <p className={styles.essKicker}>{card.kicker}</p>
              <p className={styles.essValue}>{card.value}</p>
              <p className={styles.essLabel}>{card.label}</p>
            </div>
          ))}
        </div>
        <p className={styles.para} style={{ textAlign: "center", marginTop: "3mm", marginBottom: 0, fontSize: "12px" }}>
          {en.eventEssentials.tagline}
        </p>
      </div>

      {/* ── PAGE 2: PROGRAMME + CONTENT ── */}

      {/* Programme artwork – forces page 2 */}
      <div className={styles.progArtSection} style={{ paddingTop: "10mm", breakBefore: "page" }}>
        <h2 className={styles.h2Center}>{en.programme.heading}</h2>
        <img
          src="/images/invitation-programme.jpg"
          alt="ISKCON Salem Janmashtami 2026 – Full-Day Programme"
          className={styles.artworkImg}
        />
      </div>

      {/* Three-column: Venue | Dress Contest | Feast + Highlights */}
      <div className={styles.threeCol}>
        {/* Venue */}
        <div className={styles.venueCard}>
          <h3 className={styles.h3}>{en.venue.heading}</h3>
          <p className={styles.venueName}>{en.venue.name}</p>
          <p className={styles.venueDetail}>{en.venue.city}</p>
          <p className={styles.venueDetail}>{en.venue.note}</p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
            {en.venue.mapsLabel}
          </a>
        </div>

        {/* Dress Contest */}
        <div className={styles.dressCard}>
          <img
            src="/images/dress-contest.jpg"
            alt="ISKCON Salem Janmashtami 2026 – Krishna Dress Contest"
            className={styles.dressImg}
          />
          <span className={styles.dressBadge}>{en.dressContest.badge}</span>
          <p className={styles.dressAge}>{en.dressContest.age}</p>
          <p className={styles.dressBody}>{en.dressContest.body}</p>
        </div>

        {/* Feast + Highlights + WhatsApp */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <div className={styles.feastBlock}>
            <h3 className={styles.h3}>{en.feastPrasadam.heading}</h3>
            {en.feastPrasadam.paragraphs.map((p, i) => (
              <p key={i} className={styles.bodyText}>{p}</p>
            ))}
          </div>
          <div className={styles.linksBlock}>
            <h3 className={styles.h3}>{en.highlights.heading}</h3>
            <a href={YT_URL} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
              Watch Highlights
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Prasadam Seva artwork */}
      <div className={styles.artworkSection}>
        <h2 className={styles.h2Center}>{en.prasadamSeva.heading}</h2>
        <img
          src="/images/invitation-seva.jpg"
          alt="ISKCON Salem Janmashtami 2026 – Prasadam Seva"
          className={styles.artworkImg}
        />
      </div>

      {/* Closing */}
      <div className={styles.closing}>
        <h2 className={styles.closingHeading}>{en.finalInvitation.heading}</h2>
        <p className={styles.closingBody}>{en.finalInvitation.body}</p>
        <p className={styles.hareKrishna}>{en.finalInvitation.closing}</p>
      </div>

    </div>
  );
}
