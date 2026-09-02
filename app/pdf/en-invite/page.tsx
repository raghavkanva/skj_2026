/* eslint-disable @next/next/no-img-element */
import styles from "./pdf-en-invite.module.css";

export const metadata = {
  title: "ISKCON Salem Sri Krishna Janmashtami 2026 – English Invitation",
  robots: { index: false, follow: false },
};

const MAPS_URL    = "https://maps.app.goo.gl/h4jugsJbuYzx3Gzc9";
const WEBSITE_URL = "https://iskconsalem.com";
const WA_URL      =
  "https://wa.me/919710772621?text=Hare%20Krishna%20Prabhu%20%F0%9F%99%8F%0A%0AI%20would%20like%20to%20know%20more%20about%20the%20Sri%20Krishna%20Janmashtami%202026%20celebration%20at%20ISKCON%20Salem.%0A%0AHare%20Krishna%20%F0%9F%99%8F";

export default function EnInvite() {
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
          <p className={styles.templeName}>Sri Gaura Radha Gokulananda Temple</p>
        </div>
      </div>

      {/* Event title */}
      <div className={styles.titleSection}>
        <h1 className={styles.eventTitle}>Sri Krishna<br />Janmashtami</h1>
        <p className={styles.eventYear}>2026</p>
      </div>

      {/* Date · Venue · Maps */}
      <div className={styles.dateVenueSection}>
        <p className={styles.eventDate}>Friday, 4 September 2026</p>
        <p className={styles.eventVenue}>Sona College Ground, Salem</p>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
          Open in Google Maps
        </a>
      </div>

      {/* Short invite */}
      <div className={styles.shortInvite}>
        <p className={styles.shortInvitePara}>
          You and your family are warmly invited to join ISKCON Salem
          in celebrating the divine appearance of Bhagavan Sri Krishna.
        </p>
      </div>

      {/* Front artwork */}
      <div className={styles.artworkWrap}>
        <img
          src="/images/invitation-front-full.jpg"
          alt="ISKCON Salem Sri Krishna Janmashtami 2026 – Official Invitation"
          className={styles.artImg}
        />
      </div>

      {/* Programme */}
      <div className={styles.progSection}>
        <h2 className={styles.sectionHeading}>Janmashtami Programme</h2>
        <img
          src="/images/invitation-programme.jpg"
          alt="ISKCON Salem Janmashtami 2026 – Full-Day Programme"
          className={styles.artImg}
        />
      </div>

      {/* ══════════════════════════════════════════
          PAGE 2  — all gold, no navy blocks
          ══════════════════════════════════════════ */}
      <div className={styles.page2}>

        {/* — Warm Invitation — */}
        <div className={styles.inviteSection}>
          <h2 className={styles.sectionHeading}>
            A Warm Invitation to You and Your Family
          </h2>
          <div className={styles.ornRow} aria-hidden="true">
            <span className={styles.ornLine} />
            <span className={styles.ornFlower}>✦</span>
            <span className={styles.ornLine} />
          </div>
          <p className={styles.inviteBody}>
            ISKCON Salem warmly welcomes you and your family to the
            Grand Sri Krishna Janmashtami Celebrations!
          </p>
          <p className={styles.inviteBody}>
            Over{" "}
            <strong className={styles.lakhHighlight}>1 Lakh Devotees</strong>
            {" "}are expected to join us this year.
          </p>
          <p className={styles.inviteBody}>
            Full Feast Prasadam will be distributed to all who attend.
            Come, be part of this auspicious occasion and receive the
            blessings of Sri Krishna.
          </p>
        </div>

        {/* — Prasadam Seva — */}
        <div className={styles.sevaSection}>
          <h2 className={styles.sectionHeading}>Prasadam Seva</h2>
          <img
            src="/images/invitation-seva.jpg"
            alt="ISKCON Salem Janmashtami 2026 – Prasadam Seva"
            className={styles.artImg}
          />
        </div>

        {/* — Existing donor thanks — */}
        <p className={styles.donorThanks}>
          If you have already donated, Thank you very much 🙏
        </p>

        {/* — VIP Pass — */}
        <div className={styles.vipSection}>
          <h2 className={styles.sectionHeading}>Donate &amp; Receive a VIP Pass</h2>
          <p className={styles.vipSub}>
            For your contribution towards the Sri Krishna Janmashtami 2026
            celebration, receive a VIP Pass for:
          </p>
          <div className={styles.vipGrid}>
            <div className={styles.vipCard}>Special Darshan</div>
            <div className={styles.vipCard}>Cultural &amp; devotional programs</div>
            <div className={styles.vipCard}>Feast Prasadam</div>
            <div className={styles.vipCard}>Parking facility</div>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          PAGE 3  — all gold, Hare Krishna at end
          ══════════════════════════════════════════ */}
      <div className={styles.page3}>

        {/* Stay Connected */}
        <div className={styles.staySection}>
          <h2 className={styles.sectionHeading}>Stay Connected with ISKCON Salem</h2>
          <p className={styles.staySub}>
            Visit our official website to know more about our temple,
            programs and upcoming festivals:
          </p>
          <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className={styles.sitesBtn}>
            Visit iskconsalem.com &rarr;
          </a>
          <p className={styles.trustLine}>
            <strong>Safe to open:</strong> This is the official ISKCON Salem website.
          </p>
        </div>

        {/* Receipt — share screenshot */}
        <div className={styles.contactSection}>
          <div className={styles.ornRow} aria-hidden="true">
            <span className={styles.ornLine} />
            <span className={styles.ornFlower}>✦</span>
            <span className={styles.ornLine} />
          </div>
          <p className={styles.receiptInstr}>
            📸 Please share your payment screenshot<br />
            to collect your donation receipt
          </p>
          <p className={styles.receiptNumber}>+91 8870016108</p>
          <a
            href="https://wa.me/918870016108"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
          >
            💬 Chat on WhatsApp &rarr;
          </a>
        </div>

        {/* Hare Krishna — small, at the very end */}
        <div className={styles.hkEnd}>
          <div className={styles.ornRow} aria-hidden="true">
            <span className={styles.ornLine} />
            <span className={styles.ornFlower}>✦</span>
            <span className={styles.ornLine} />
          </div>
          <p className={styles.hkText}>Hare Krishna.</p>
        </div>

      </div>
    </div>
  );
}
