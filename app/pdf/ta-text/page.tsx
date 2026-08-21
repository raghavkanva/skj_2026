/* eslint-disable @next/next/no-img-element */
import styles from "../shared/pdf.module.css";
import { ta } from "@/content/ta";
import { sevaOptions } from "@/data/sevaData";
import { eventData } from "@/data/eventData";

export const metadata = {
  title: "ISKCON Salem Sri Krishna Janmashtami 2026 – Tamil Text Invitation",
  robots: { index: false, follow: false },
};

const MAPS_URL = "https://maps.app.goo.gl/h4jugsJbuYzx3Gzc9";
const WA_URL = "https://wa.me/919710772621";
const YT_URL = "https://youtu.be/GfmlWuVKVEE?si=jNn7weBA6Xu2Csme";

const BANK = [
  ["கணக்கு பெயர்", "ISKCON PRASADAM SEVA"],
  ["கணக்கு எண்", "737101000040"],
  ["IFSC குறியீடு", "ICIC0007371"],
  ["வங்கி", "ICICI Bank, Salem"],
  ["UPI ID", eventData.upiId],
] as const;

export default function TaText() {
  const morning = ta.programme.items.filter((i) => i.period === "morning");
  const evening = ta.programme.items.filter((i) => i.period === "evening");

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
          அனைவரும் வரவேற்கப்படுகிறார்கள். தங்கள் குடும்பத்தினருடனும் நண்பர்களுடனும் கலந்து கொள்ளுங்கள்.
        </p>
      </div>

      {/* Front invitation image */}
      <div className={styles.section} style={{ paddingTop: "2mm", paddingBottom: "3mm" }}>
        <img
          src="/images/invitation-front-full-ta.jpg"
          alt="ISKCON Salem ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி 2026 அழைப்பிதழ்"
          className={styles.frontImg}
        />
      </div>

      {/* Formal invitation */}
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
      </div>

      {/* ── PAGE 2: PROGRAMME + DETAILS ── */}

      {/* Programme – two columns */}
      <div className={styles.progTextSection} style={{ paddingTop: "10mm", breakBefore: "page" }}>
        <h2 className={styles.h2}>{ta.programme.heading}</h2>
        <div className={styles.progTwoCol}>
          <div className={styles.progGroup}>
            <p className={styles.periodHeading}>{ta.programme.morningLabel}</p>
            <ul className={styles.timeline}>
              {morning.map((item) => (
                <li key={item.time} className={styles.timelineItem}>
                  <span className={styles.timeSlot}>{item.time}</span>
                  <span className={styles.timeTitle}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.progGroup}>
            <p className={styles.periodHeading}>{ta.programme.eveningLabel}</p>
            <ul className={styles.timeline}>
              {evening.map((item) => (
                <li key={item.time} className={styles.timelineItem}>
                  <span className={styles.timeSlot}>{item.time}</span>
                  <span className={styles.timeTitle}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Venue + Dress Contest */}
      <div className={styles.infoTwoCol}>
        <div className={styles.venueCard}>
          <h3 className={styles.h3}>{ta.venue.heading}</h3>
          <p className={styles.venueName}>{ta.venue.name}</p>
          <p className={styles.venueDetail}>{ta.venue.city}</p>
          <p className={styles.venueDetail}>{ta.venue.note}</p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
            {ta.venue.mapsLabel}
          </a>
        </div>
        <div className={styles.dressCard}>
          <h3 className={styles.h3}>{ta.dressContest.heading}</h3>
          <span className={styles.dressBadge}>{ta.dressContest.badge}</span>
          <p className={styles.dressAge} style={{ marginTop: "1.5mm" }}>{ta.dressContest.age}</p>
          <p className={styles.dressBody}>{ta.dressContest.body}</p>
        </div>
      </div>

      {/* Feast Prasadam */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.feastBlock}>
          <h3 className={styles.h3}>{ta.feastPrasadam.heading}</h3>
          {ta.feastPrasadam.paragraphs.map((p, i) => (
            <p key={i} className={styles.bodyText}>{p}</p>
          ))}
        </div>
      </div>

      {/* Prasadam Seva packages */}
      <div className={styles.sevaSection} style={{ paddingTop: "2mm" }}>
        <h2 className={styles.h2}>{ta.prasadamSeva.heading}</h2>
        <p className={styles.sevaNote}>{ta.prasadamSeva.desc}</p>
        <p className={styles.sevaNote} style={{ fontWeight: 600 }}>{ta.prasadamSeva.costHighlight}</p>
        <div className={styles.sevaGrid}>
          {sevaOptions.map((opt) => (
            <div key={opt.plates} className={styles.sevaCard}>
              <p className={styles.sevaPlates}>{opt.plates} தட்டுகள்</p>
              <p className={styles.sevaAmount}>₹{opt.amount.toLocaleString("en-IN")}</p>
            </div>
          ))}
        </div>
        <p className={styles.sevaNote}>{ta.prasadamSeva.customHeading}: {ta.prasadamSeva.customInputLabel}</p>
        <p className={styles.sevaNote}>{ta.donationSection.netBankingTitle}</p>
      </div>

      {/* Bank details */}
      <div className={styles.bankSection}>
        <h3 className={styles.h3} style={{ padding: "0 0 2mm" }}>{ta.donationSection.accountDetailsHeading}</h3>
        <div className={styles.bankCard}>
          {BANK.map(([label, value]) => (
            <div key={label} className={styles.bankRow}>
              <span className={styles.bankLabel}>{label}</span>
              <span className={styles.bankValue}>{value}</span>
            </div>
          ))}
        </div>
        {ta.donationSection.noteLines.map((line, i) => (
          <p key={i} className={styles.bankNote}>{line}</p>
        ))}
      </div>

      {/* Links row */}
      <div className={styles.linksRow}>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
          {ta.venue.mapsLabel}
        </a>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
          WhatsApp: +91 97107 72621
        </a>
        <a href={YT_URL} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
          2025 சிறப்பு காட்சிகள்
        </a>
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
