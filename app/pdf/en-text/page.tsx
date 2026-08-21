/* eslint-disable @next/next/no-img-element */
import styles from "../shared/pdf.module.css";
import { en } from "@/content/en";
import { sevaOptions } from "@/data/sevaData";
import { eventData } from "@/data/eventData";

export const metadata = {
  title: "ISKCON Salem Sri Krishna Janmashtami 2026 – English Text Invitation",
  robots: { index: false, follow: false },
};

const MAPS_URL = "https://maps.app.goo.gl/h4jugsJbuYzx3Gzc9";
const WA_URL = "https://wa.me/919710772621";
const YT_URL = "https://youtu.be/GfmlWuVKVEE?si=jNn7weBA6Xu2Csme";

const BANK = [
  ["A/C Name", "ISKCON PRASADAM SEVA"],
  ["A/C No", "737101000040"],
  ["IFSC Code", "ICIC0007371"],
  ["Bank", "ICICI Bank"],
  ["Branch", "Salem"],
  ["UPI ID", eventData.upiId],
] as const;

export default function EnText() {
  const morning = en.programme.items.filter((i) => i.period === "morning");
  const evening = en.programme.items.filter((i) => i.period === "evening");

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
          Everyone is welcome. Please come with your family and friends.
        </p>
      </div>

      {/* Front invitation image */}
      <div className={styles.section} style={{ paddingTop: "2mm", paddingBottom: "3mm" }}>
        <img
          src="/images/invitation-front-full.jpg"
          alt="ISKCON Salem Sri Krishna Janmashtami 2026 – Official Invitation"
          className={styles.frontImg}
        />
      </div>

      {/* Formal invitation */}
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
      </div>

      {/* ── PAGE 2: PROGRAMME + DETAILS ── */}

      {/* Programme – two columns */}
      <div className={styles.progTextSection} style={{ paddingTop: "10mm", breakBefore: "page" }}>
        <h2 className={styles.h2}>{en.programme.heading}</h2>
        <div className={styles.progTwoCol}>
          <div className={styles.progGroup}>
            <p className={styles.periodHeading}>{en.programme.morningLabel}</p>
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
            <p className={styles.periodHeading}>{en.programme.eveningLabel}</p>
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
          <h3 className={styles.h3}>{en.venue.heading}</h3>
          <p className={styles.venueName}>{en.venue.name}</p>
          <p className={styles.venueDetail}>{en.venue.city}</p>
          <p className={styles.venueDetail}>{en.venue.note}</p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
            {en.venue.mapsLabel}
          </a>
        </div>
        <div className={styles.dressCard}>
          <h3 className={styles.h3}>{en.dressContest.heading}</h3>
          <span className={styles.dressBadge}>{en.dressContest.badge}</span>
          <p className={styles.dressAge} style={{ marginTop: "1.5mm" }}>{en.dressContest.age}</p>
          <p className={styles.dressBody}>{en.dressContest.body}</p>
        </div>
      </div>

      {/* Feast Prasadam */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.feastBlock}>
          <h3 className={styles.h3}>{en.feastPrasadam.heading}</h3>
          {en.feastPrasadam.paragraphs.map((p, i) => (
            <p key={i} className={styles.bodyText}>{p}</p>
          ))}
        </div>
      </div>

      {/* Prasadam Seva packages */}
      <div className={styles.sevaSection} style={{ paddingTop: "2mm" }}>
        <h2 className={styles.h2}>{en.prasadamSeva.heading}</h2>
        <p className={styles.sevaNote}>{en.prasadamSeva.desc}</p>
        <p className={styles.sevaNote} style={{ fontWeight: 600 }}>{en.prasadamSeva.costHighlight}</p>
        <div className={styles.sevaGrid}>
          {sevaOptions.map((opt) => (
            <div key={opt.plates} className={styles.sevaCard}>
              <p className={styles.sevaPlates}>{opt.plates} plates</p>
              <p className={styles.sevaAmount}>₹{opt.amount.toLocaleString("en-IN")}</p>
            </div>
          ))}
        </div>
        <p className={styles.sevaNote}>{en.prasadamSeva.customHeading}: {en.prasadamSeva.customInputLabel}</p>
        <p className={styles.sevaNote}>{en.donationSection.netBankingTitle}</p>
      </div>

      {/* Bank details */}
      <div className={styles.bankSection}>
        <h3 className={styles.h3} style={{ padding: "0 0 2mm" }}>{en.donationSection.accountDetailsHeading}</h3>
        <div className={styles.bankCard}>
          {BANK.map(([label, value]) => (
            <div key={label} className={styles.bankRow}>
              <span className={styles.bankLabel}>{label}</span>
              <span className={styles.bankValue}>{value}</span>
            </div>
          ))}
        </div>
        {en.donationSection.noteLines.map((line, i) => (
          <p key={i} className={styles.bankNote}>{line}</p>
        ))}
      </div>

      {/* Links row: Maps, WhatsApp, YouTube */}
      <div className={styles.linksRow}>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
          Open in Google Maps
        </a>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
          WhatsApp: +91 97107 72621
        </a>
        <a href={YT_URL} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
          {en.highlights.heading}
        </a>
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
