/* eslint-disable @next/next/no-img-element */
import styles from "../shared/pdf.module.css";
import { ta } from "@/content/ta";

export const metadata = {
  title: "ISKCON Salem Sri Krishna Janmashtami 2026 – Tamil Invitation",
  robots: { index: false, follow: false },
};

const MAPS_URL = "https://maps.app.goo.gl/h4jugsJbuYzx3Gzc9";
const WA_URL = "https://wa.me/919710772621";
const YT_URL = "https://youtu.be/GfmlWuVKVEE?si=jNn7weBA6Xu2Csme";

export default function TaInvite() {
  return (
    <div className={styles.pdfRoot}>

      {/* ── PAGE 1: COVER ── */}
      <div className={styles.cover}>
        <div className={styles.logoWrap}>
          <img src="/images/logo.png" alt="ISKCON Salem" className={styles.logo} />
        </div>
        <p className={styles.orgName}>ISKCON Salem</p>
        <p className={styles.templeName}>ஸ்ரீ கௌர ராதா கோகுலானந்த கோவில்</p>
        <h1 className={styles.eventTitleTa}>ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி</h1>
        <p className={styles.eventYear}>2026</p>
        <p className={styles.eventMeta}>வெள்ளிக்கிழமை, 4 செப்டம்பர் 2026</p>
        <p className={styles.eventVenue}>Sona College Ground, Salem</p>
        <p className={styles.coverText}>
          தங்களையும் தங்கள் குடும்பத்தினரையும் இந்த மங்களகரமான ஜன்மாஷ்டமி விழாவில் கலந்துகொள்ள அன்புடன் அழைக்கிறோம்.
        </p>
      </div>

      {/* Front invitation image */}
      <div className={styles.section} style={{ paddingTop: "2mm", paddingBottom: "5mm" }}>
        <img
          src="/images/invitation-front-full-ta.jpg"
          alt="ISKCON Salem ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி 2026 அழைப்பிதழ்"
          className={styles.frontImg}
        />
      </div>

      {/* Formal invitation (concise) */}
      <div className={styles.formalInvite}>
        <h2 className={styles.formalHeading}>{ta.personalInvitation.heading}</h2>
        <p className={styles.greeting}>{ta.personalInvitation.openingGreeting}</p>
        {ta.personalInvitation.paragraphs.map((p, i) => (
          <p key={i} className={styles.para}>{p}</p>
        ))}
        <p className={styles.greeting}>{ta.personalInvitation.closingGreeting}</p>
      </div>

      {/* Event essentials */}
      <div className={styles.essSection}>
        <div className={styles.essGrid}>
          {Object.values(ta.eventEssentials.cards).map((card) => (
            <div key={card.kicker} className={styles.essCard}>
              <p className={styles.essKicker}>{card.kicker}</p>
              <p className={styles.essValue}>{card.value}</p>
              <p className={styles.essLabel}>{card.label}</p>
            </div>
          ))}
        </div>
        <p className={styles.para} style={{ textAlign: "center", marginTop: "3mm", marginBottom: 0, fontSize: "12px" }}>
          {ta.eventEssentials.tagline}
        </p>
      </div>

      {/* ── PAGE 2: PROGRAMME + CONTENT ── */}

      {/* Programme artwork – forces page 2 */}
      <div className={styles.progArtSection} style={{ paddingTop: "10mm", breakBefore: "page" }}>
        <h2 className={styles.h2Center}>{ta.programme.heading}</h2>
        <img
          src="/images/invitation-programme-ta.jpg"
          alt="ISKCON Salem ஜன்மாஷ்டமி 2026 நிகழ்ச்சி நிரல்"
          className={styles.artworkImg}
        />
      </div>

      {/* Three-column: Venue | Dress Contest | Feast + Highlights */}
      <div className={styles.threeCol}>
        {/* Venue */}
        <div className={styles.venueCard}>
          <h3 className={styles.h3}>{ta.venue.heading}</h3>
          <p className={styles.venueName}>{ta.venue.name}</p>
          <p className={styles.venueDetail}>{ta.venue.city}</p>
          <p className={styles.venueDetail}>{ta.venue.note}</p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
            {ta.venue.mapsLabel}
          </a>
        </div>

        {/* Dress Contest */}
        <div className={styles.dressCard}>
          <img
            src="/images/dress-contest-ta.jpg"
            alt="ISKCON Salem ஜன்மாஷ்டமி 2026 கிருஷ்ணர் அலங்காரப் போட்டி"
            className={styles.dressImg}
          />
          <span className={styles.dressBadge}>{ta.dressContest.badge}</span>
          <p className={styles.dressAge}>{ta.dressContest.age}</p>
          <p className={styles.dressBody}>{ta.dressContest.body}</p>
        </div>

        {/* Feast + Highlights + WhatsApp */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <div className={styles.feastBlock}>
            <h3 className={styles.h3}>{ta.feastPrasadam.heading}</h3>
            {ta.feastPrasadam.paragraphs.map((p, i) => (
              <p key={i} className={styles.bodyText}>{p}</p>
            ))}
          </div>
          <div className={styles.linksBlock}>
            <h3 className={styles.h3}>{ta.highlights.heading}</h3>
            <a href={YT_URL} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
              சிறப்பு காட்சிகள்
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Prasadam Seva artwork */}
      <div className={styles.artworkSection}>
        <h2 className={styles.h2Center}>{ta.prasadamSeva.heading}</h2>
        <img
          src="/images/invitation-seva-ta.jpg"
          alt="ISKCON Salem ஜன்மாஷ்டமி 2026 பிரசாத சேவை"
          className={styles.artworkImg}
        />
      </div>

      {/* Closing */}
      <div className={styles.closing}>
        <h2 className={styles.closingHeading}>{ta.finalInvitation.heading}</h2>
        <p className={styles.closingBody}>{ta.finalInvitation.body}</p>
        <p className={styles.hareKrishna}>{ta.finalInvitation.closing}</p>
      </div>

    </div>
  );
}
