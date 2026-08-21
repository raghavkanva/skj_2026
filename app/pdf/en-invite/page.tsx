/* eslint-disable @next/next/no-img-element */
import styles from "./pdf-en-invite.module.css";
import { eventData } from "@/data/eventData";
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
    <div className={styles.root}>

      {/* ═══════════════════════════════════════════
          PAGE 1
          ═══════════════════════════════════════════ */}

      {/* Identity line: Logo | ISKCON Salem | Temple Name */}
      <div className={styles.identityLine}>
        <img src="/images/logo.png" alt="ISKCON Salem" className={styles.logo} />
        <div className={styles.identityDivider} aria-hidden="true" />
        <div className={styles.identityText}>
          <p className={styles.orgName}>ISKCON Salem</p>
          <p className={styles.templeName}>Sri Gaura Radha Gokulananda Temple</p>
        </div>
      </div>

      {/* Event title + year */}
      <div className={styles.titleSection}>
        <h1 className={styles.eventTitle}>
          Sri Krishna<br />Janmashtami
        </h1>
        <p className={styles.eventYear}>2026</p>
      </div>

      {/* Date (prominent) + Venue */}
      <div className={styles.dateVenueSection}>
        <p className={styles.eventDate}>Friday, 4 September 2026</p>
        <p className={styles.eventVenue}>Sona College Ground, Salem</p>
      </div>

      {/* Short cover invitation */}
      <div className={styles.coverInvitation}>
        <p className={styles.coverPara}>
          You and your family are warmly invited to join ISKCON Salem in celebrating the divine appearance of Bhagavan Sri Krishna.
        </p>
      </div>

      {/* Front invitation artwork */}
      <div className={styles.artworkWrap}>
        <img
          src="/images/invitation-front-full.jpg"
          alt="ISKCON Salem Sri Krishna Janmashtami 2026 – Official Invitation"
          className={styles.frontImg}
        />
      </div>

      {/* Warm invitation */}
      <div className={styles.warmInvitation}>
        <h2 className={styles.warmHeading}>{en.personalInvitation.heading}</h2>
        <p className={styles.greeting}>{en.personalInvitation.openingGreeting}</p>
        <p className={styles.warmPara}>
          With great happiness, we invite you and your family to join us for the Sri Krishna Janmashtami celebrations organised by ISKCON Salem on Friday, 4 September 2026, from 8:00 AM at Sona College Ground, Salem.
        </p>
        <p className={styles.warmPara}>
          Janmashtami is a very special occasion to come together, remember Sri Krishna, hear about His pastimes, chant His holy names, participate in kirtan, take darshan and honour Krishna prasadam.
        </p>
        <p className={styles.warmPara}>
          We would be very happy to have you with us and share this auspicious celebration together. Please come with your family and friends.
        </p>
        <p className={styles.greeting}>Hare Krishna.</p>
      </div>

      {/* Janmashtami 2025 Highlights – one compact line */}
      <div className={styles.highlightsLine}>
        <p className={styles.highlightsText}>
          Janmashtami 2025 Highlights &middot;{" "}
          <a href={YT_URL} target="_blank" rel="noopener noreferrer" className={styles.ytLink}>
            Watch on YouTube
          </a>
        </p>
      </div>

      {/* ═══════════════════════════════════════════
          PAGE 2
          ═══════════════════════════════════════════ */}
      <div className={styles.page2}>

        {/* Programme */}
        <h2 className={styles.sectionHeading}>{en.programme.heading}</h2>
        <img
          src="/images/invitation-programme.jpg"
          alt="ISKCON Salem Janmashtami 2026 – Full-Day Programme"
          className={styles.programmeImg}
        />

        {/* Venue + Feast two-col */}
        <div className={styles.twoColSection}>
          {/* Venue */}
          <div className={styles.card}>
            <h3 className={styles.cardHeading}>{en.venue.heading}</h3>
            <p className={styles.cardSub}>{en.venue.name}</p>
            <p className={styles.cardDetail}>{en.venue.city}</p>
            <p className={styles.cardDetail}>
              The venue is centrally located in Salem and can be reached by public transport, auto-rickshaw and private vehicles.
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
              {en.venue.mapsLabel}
            </a>
          </div>

          {/* Feast Prasadam */}
          <div className={styles.card}>
            <h3 className={styles.cardHeading}>{en.feastPrasadam.heading}</h3>
            <p className={styles.cardDetail}>
              Feast Prasadam will be served throughout the Sri Krishna Janmashtami celebration. More than 1 lakh devotees are expected to participate.
            </p>
          </div>
        </div>

        {/* Prasadam Seva */}
        <div className={styles.sevaSection}>
          <h2 className={styles.sectionHeading}>{en.prasadamSeva.heading}</h2>
          <img
            src="/images/invitation-seva.jpg"
            alt="ISKCON Salem Janmashtami 2026 – Prasadam Seva"
            className={styles.sevaImg}
          />
        </div>

        {/* Closing */}
        <div className={styles.closing}>
          <h2 className={styles.closingHeading}>{en.finalInvitation.heading}</h2>
          <p className={styles.closingBody}>
            Please come with your family and friends and spend this auspicious Janmashtami in the association of devotees, hearing about Sri Krishna, chanting His holy names and honouring Krishna prasadam.
          </p>
          <p className={styles.closingGreeting}>Hare Krishna.</p>
          <p className={styles.contactLine}>
            <span className={styles.contactName}>{eventData.contact.name}</span>
            {" · +91 "}
            {eventData.contact.displayPhone}
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.waLink}>
            WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
