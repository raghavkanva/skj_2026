/* eslint-disable @next/next/no-img-element */
import styles from "./pdf-ta-invite.module.css";

export const metadata = {
  title: "ISKCON Salem Sri Krishna Janmashtami 2026 – Tamil Invitation",
  robots: { index: false, follow: false },
};

const MAPS_URL  = "https://maps.app.goo.gl/h4jugsJbuYzx3Gzc9";
const YT_URL    = "https://youtu.be/GfmlWuVKVEE?si=jNn7weBA6Xu2Csme";
const SITES_URL = "https://sites.google.com/view/iskconstonetemple/home";
const WA_URL    =
  "https://wa.me/919710772621?text=ஹரே%20கிருஷ்ண%20பிரபு%20%F0%9F%99%8F%0A%0AISKCON%20Salem%20ஸ்ரீ%20கிருஷ்ண%20ஜன்மாஷ்டமி%202026%20விழா%20பற்றி%20மேலும்%20அறிய%20விரும்புகிறேன்.%0A%0Aஹரே%20கிருஷ்ண%20%F0%9F%99%8F";

export default function TaInvite() {
  return (
    <div className={styles.root}>

      {/* ══════════════════════════════════════════
          PAGE 1
          ══════════════════════════════════════════ */}

      {/* Identity line */}
      <div className={styles.identityLine}>
        <img src="/images/logo.png" alt="ISKCON Salem" className={styles.logo} />
        <div className={styles.identityDivider} aria-hidden="true" />
        <div className={styles.identityText}>
          <p className={styles.orgName}>ISKCON Salem</p>
          <p className={styles.templeName}>ஸ்ரீ ஸ்ரீ ராதா கோகுலானந்தா கோயில்</p>
        </div>
      </div>

      {/* Event title */}
      <div className={styles.titleSection}>
        <h1 className={styles.eventTitle}>ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி</h1>
        <p className={styles.eventYear}>2026</p>
      </div>

      {/* Date · Venue · Maps */}
      <div className={styles.dateVenueSection}>
        <p className={styles.eventDate}>வெள்ளிக்கிழமை, 4 செப்டம்பர் 2026</p>
        <p className={styles.eventVenue}>Sona College Ground, Salem</p>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
          Google Maps-இல் திற
        </a>
      </div>

      {/* Short invite */}
      <div className={styles.shortInvite}>
        <p className={styles.shortInvitePara}>
          தங்களையும் தங்கள் குடும்பத்தினரையும் பகவான் ஸ்ரீ கிருஷ்ணரின் திருவவதார
          விழாவில் கலந்துகொள்ள ISKCON Salem அன்புடன் அழைக்கிறது.
        </p>
      </div>

      {/* Front artwork */}
      <div className={styles.artworkWrap}>
        <img
          src="/images/invitation-front-full-ta.jpg"
          alt="ISKCON Salem ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி 2026 அழைப்பிதழ்"
          className={styles.artImg}
        />
      </div>

      {/* Programme */}
      <div className={styles.progSection}>
        <h2 className={styles.sectionHeading}>ஜன்மாஷ்டமி நிகழ்ச்சி நிரல்</h2>
        <img
          src="/images/invitation-programme-ta.jpg"
          alt="ISKCON Salem ஜன்மாஷ்டமி 2026 நிகழ்ச்சி நிரல்"
          className={styles.artImg}
        />
      </div>

      {/* Highlights – entire block is one link */}
      <a href={YT_URL} target="_blank" rel="noopener noreferrer" className={styles.highlightsBlock}>
        <p className={styles.highlightsTitle}>ஜன்மாஷ்டமி 2025 சிறப்பு தருணங்கள்</p>
        <p className={styles.highlightsWatch}>&#9654;&ensp;YouTube-இல் காண இங்கே கிளிக் செய்யவும் &rarr;</p>
      </a>

      {/* ══════════════════════════════════════════
          PAGE 2  — all gold, no navy blocks
          ══════════════════════════════════════════ */}
      <div className={styles.page2}>

        {/* — Warm Invitation — */}
        <div className={styles.inviteSection}>
          <h2 className={styles.sectionHeading}>
            தங்களுக்கும் தங்கள் குடும்பத்தினருக்கும் அன்பான அழைப்பு
          </h2>
          <div className={styles.ornRow} aria-hidden="true">
            <span className={styles.ornLine} />
            <span className={styles.ornFlower}>✦</span>
            <span className={styles.ornLine} />
          </div>
          <p className={styles.inviteBody}>
            ISKCON Salem, இந்த பிரம்மாண்டக் கொண்டாட்டத்திற்கு
            தங்களையும் தங்கள் குடும்பத்தினரையும் அன்புடன் வரவேற்கிறது!
          </p>
          <p className={styles.inviteBody}>
            இந்த ஆண்டு{" "}
            <strong className={styles.lakhHighlight}>1 லட்சத்திற்கும் மேற்பட்ட பக்தர்கள்</strong>
            {" "}கலந்துகொள்வர் என எதிர்பார்க்கப்படுகிறது.
          </p>
          <p className={styles.inviteBody}>
            கலந்துகொள்ளும் அனைவருக்கும் முழுமையான விருந்து பிரசாதம்
            வழங்கப்படும். இந்த மங்களகரமான தருணத்தில் ஸ்ரீ கிருஷ்ணரின்
            ஆசீர்வாதம் பெற வாருங்கள்.
          </p>
        </div>

        {/* — Prasadam Seva — */}
        <div className={styles.sevaSection}>
          <h2 className={styles.sectionHeading}>பிரசாத சேவை</h2>
          <img
            src="/images/invitation-seva-ta.jpg"
            alt="ISKCON Salem ஜன்மாஷ்டமி 2026 பிரசாத சேவை"
            className={styles.artImg}
          />
        </div>

        {/* — Existing donor thanks — */}
        <p className={styles.donorThanks}>
          நீங்கள் ஏற்கனவே நன்கொடை அளித்திருந்தால், மிக்க நன்றி 🙏
        </p>

        {/* — VIP Pass — */}
        <div className={styles.vipSection}>
          <h2 className={styles.sectionHeading}>நன்கொடை அளித்து VIP Pass பெறுங்கள்</h2>
          <p className={styles.vipSub}>
            ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி 2026 விழாவிற்கான தங்கள் நன்கொடைக்கு
            நன்றியாக, கீழ்க்கண்டவற்றிற்கான VIP Pass வழங்கப்படும்:
          </p>
          <div className={styles.vipGrid}>
            <div className={styles.vipCard}>சிறப்பு தரிசனம்</div>
            <div className={styles.vipCard}>கலை மற்றும் பக்தி நிகழ்ச்சிகள்</div>
            <div className={styles.vipCard}>விருந்து பிரசாதம்</div>
            <div className={styles.vipCard}>வாகன நிறுத்த வசதி</div>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          PAGE 3  — all gold, Hare Krishna at end
          ══════════════════════════════════════════ */}
      <div className={styles.page3}>

        {/* Stay Connected */}
        <div className={styles.staySection}>
          <h2 className={styles.sectionHeading}>ISKCON Salem உடன் இணைந்திருங்கள்</h2>
          <p className={styles.staySub}>
            எங்கள் கோயில், பகவத் கீதா வகுப்புகள் மற்றும் வரவிருக்கும்
            திருவிழாக்கள் பற்றி அறிய கீழே கிளிக் செய்யவும்:
          </p>
          <a href={SITES_URL} target="_blank" rel="noopener noreferrer" className={styles.sitesBtn}>
            கோயில், கீதா வகுப்புகள் மற்றும் திருவிழாக்கள் &rarr; இங்கே கிளிக் செய்யவும்
          </a>
          <p className={styles.trustLine}>
            <strong>திறப்பதற்கு பாதுகாப்பானது:</strong> இந்த இணைப்பில் எங்கள் YouTube,
            WhatsApp மற்றும் Facebook இணைப்புகள் மட்டுமே உள்ளன.
          </p>
        </div>

        {/* Contact — gold background, navy text */}
        <div className={styles.contactSection}>
          <div className={styles.ornRow} aria-hidden="true">
            <span className={styles.ornLine} />
            <span className={styles.ornFlower}>✦</span>
            <span className={styles.ornLine} />
          </div>
          <p className={styles.contactFor}>மேலும் தகவலுக்கு</p>
          <p className={styles.contactName}>Srinivasa Krishna Dasa</p>
          <p className={styles.contactPhone}>+91 97107 72621</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
            WhatsApp-இல் பேச இங்கே கிளிக் செய்யவும் &rarr;
          </a>
        </div>

        {/* Hare Krishna — small, at the very end */}
        <div className={styles.hkEnd}>
          <div className={styles.ornRow} aria-hidden="true">
            <span className={styles.ornLine} />
            <span className={styles.ornFlower}>✦</span>
            <span className={styles.ornLine} />
          </div>
          <p className={styles.hkText}>ஹரே கிருஷ்ண.</p>
        </div>

      </div>
    </div>
  );
}
