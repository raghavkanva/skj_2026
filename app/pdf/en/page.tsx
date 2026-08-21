import Image from "next/image";
import type { Metadata } from "next";
import { en } from "@/content/en";
import { sevaOptions } from "@/data/sevaData";
import { eventData } from "@/data/eventData";
import { siteLinks } from "@/lib/siteLinks";
import styles from "./pdf.module.css";

export const metadata: Metadata = {
  title: "ISKCON Salem Sri Krishna Janmashtami 2026 – Official Invitation",
  robots: { index: false, follow: false },
};

const morningItems = en.programme.items.filter((i) => i.period === "morning");
const eveningItems = en.programme.items.filter((i) => i.period === "evening");

export default function PDFEnglishPage() {
  return (
    <div className={styles.pdfRoot}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.logoWrap}>
          <Image
            src="/images/logo.png"
            alt="ISKCON Salem"
            width={64}
            height={64}
            className={styles.logo}
            priority
          />
        </div>
        <p className={styles.organiserBadge}>{eventData.organiser}</p>
        <p className={styles.organiserSub}>Sri Gaura Radha-Gokulananda Temple</p>
        <h1 className={styles.heroTitle}>
          Sri Krishna<br />Janmashtami
        </h1>
        <p className={styles.heroYear}>2026</p>
        <p className={styles.heroDate}>{en.hero.date}</p>
        <p className={styles.heroVenue}>{en.hero.venue}</p>
        <p className={styles.heroInvite}>{en.hero.mainInvitation}</p>
        <p className={styles.heroSub}>{en.hero.supportingCopy}</p>
        <div className={styles.heroImgWrap}>
          <Image
            src="/images/invitation-front-full.jpg"
            alt="Official ISKCON Salem Sri Krishna Janmashtami 2026 front invitation"
            width={1600}
            height={565}
            className={styles.heroImg}
            priority
          />
        </div>
      </section>

      {/* ── PERSONAL INVITATION ── */}
      <section className={styles.personalInvitation}>
        <h2 className={styles.sectionHeading}>{en.personalInvitation.heading}</h2>
        <p className={styles.inviteGreeting}>{en.personalInvitation.openingGreeting}</p>
        {en.personalInvitation.paragraphs.map((p, i) => (
          <p key={i} className={styles.invitePara}>{p}</p>
        ))}
        <p className={styles.inviteGreeting}>{en.personalInvitation.closingGreeting}</p>
      </section>

      {/* ── EVENT ESSENTIALS ── */}
      <section className={styles.essentials}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "5mm" }}>Event Details</h2>
        <div className={styles.essentialsGrid}>
          {[
            en.eventEssentials.cards.date,
            en.eventEssentials.cards.timing,
            en.eventEssentials.cards.venue,
            en.eventEssentials.cards.prasadam,
          ].map((card) => (
            <div key={card.kicker} className={styles.essCard}>
              <p className={styles.essKicker}>{card.kicker}</p>
              <p className={styles.essValue}>{card.value}</p>
              <p className={styles.essLabel}>{card.label}</p>
            </div>
          ))}
        </div>
        <p className={styles.essTagline}>{en.eventEssentials.tagline}</p>
      </section>

      {/* ── CELEBRATION INTRO ── */}
      <section className={styles.celebrationIntro}>
        <h2 className={styles.celebHeading}>{en.celebrationIntro.heading}</h2>
        <p className={styles.celebBody}>{en.celebrationIntro.body}</p>
      </section>

      {/* ── 2025 HIGHLIGHTS (no video) ── */}
      <section id="janmashtami-2025" className={styles.highlights}>
        <p className={styles.highlightsKicker}>{en.highlights.kicker}</p>
        <h2 className={styles.highlightsHeading}>{en.highlights.heading}</h2>
        <p className={styles.highlightsSub}>{en.highlights.subheading}</p>
        <a
          href={eventData.videoUrl}
          className={styles.highlightsLink}
          rel="noopener noreferrer"
        >
          Watch Janmashtami 2025 Highlights
        </a>
        <p className={styles.highlightsJoinLine}>{en.highlights.joinLine}</p>
      </section>

      {/* ── PROGRAMME ── */}
      <section id="programme" className={styles.programme}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "6mm" }}>
          {en.programme.heading}
        </h2>
        <p style={{ textAlign: "center", fontSize: "12px", color: "var(--text-secondary)", marginBottom: "6mm" }}>
          {en.venue.name}, {en.venue.city} &middot; {en.hero.date}
        </p>

        <div className={styles.programmeCols}>
          {/* Morning */}
          <div className={styles.programmeGroup}>
            <h3 className={styles.periodHeading}>{en.programme.morningLabel}</h3>
            <ul className={styles.timeline}>
              {morningItems.map((item) => (
                <li key={item.time + item.title} className={styles.timelineItem}>
                  <span className={styles.timeSlot}>{item.time}</span>
                  <span className={styles.timeTitle}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Evening */}
          <div className={styles.programmeGroup}>
            <h3 className={styles.periodHeading}>{en.programme.eveningLabel}</h3>
            <ul className={styles.timeline}>
              {eveningItems.map((item) => (
                <li key={item.time + item.title} className={styles.timelineItem}>
                  <span className={styles.timeSlot}>{item.time}</span>
                  <span className={styles.timeTitle}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Programme artwork – starts a new page so it's never split */}
        <div className={styles.programmeImgBlock}>
          <p className={styles.programmeImgCaption}>Official full-day invitation, as printed</p>
          <Image
            src="/images/invitation-programme.jpg"
            alt="ISKCON Salem Janmashtami 2026 programme schedule – official printed invitation"
            width={1600}
            height={565}
            className={styles.programmeImg}
            loading="lazy"
          />
        </div>
      </section>

      {/* ── VENUE ── */}
      <section id="venue" className={styles.venue}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "5mm" }}>{en.venue.heading}</h2>
        <div className={styles.venueCard}>
          <div>
            <p className={styles.venueName}>{en.venue.name}</p>
            <p className={styles.venueCity}>{en.venue.city}</p>
            <p className={styles.venueDate}>{en.hero.date}</p>
            <p className={styles.venueTime}>Programmes from 8:00 AM</p>
          </div>
          <a
            href={eventData.mapUrl}
            rel="noopener noreferrer"
            className={styles.mapsLink}
          >
            {en.venue.mapsLabel}
          </a>
        </div>
        <p className={styles.venueNote}>{en.venue.note}</p>
      </section>

      {/* ── DRESS CONTEST ── */}
      <section id="dress-contest" className={styles.dressContest}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "5mm" }}>{en.dressContest.heading}</h2>
        <div className={styles.dressInner}>
          <div className={styles.dressImgWrap}>
            <Image
              src="/images/dress-contest.jpg"
              alt="Krishna Dress Contest – official artwork for ISKCON Salem Janmashtami 2026"
              width={320}
              height={250}
              className={styles.dressImg}
              loading="lazy"
            />
          </div>
          <div className={styles.dressContent}>
            <p className={styles.dressAge}>{en.dressContest.age}</p>
            <p className={styles.dressBody}>{en.dressContest.body}</p>
            <span className={styles.dressBadge}>{en.dressContest.badge}</span>
          </div>
        </div>
      </section>

      {/* ── FEAST PRASADAM ── */}
      <section id="prasadam" className={styles.feastPrasadam}>
        <h2 className={styles.feastHeading}>{en.feastPrasadam.heading}</h2>
        {en.feastPrasadam.paragraphs.map((p, i) => (
          <p key={i} className={styles.feastBody}>{p}</p>
        ))}
      </section>

      {/* ── PRASADAM SEVA ── */}
      <section id="prasadam-seva" className={styles.seva}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "4mm" }}>{en.prasadamSeva.heading}</h2>
        <p className={styles.sevaDesc}>{en.prasadamSeva.desc}</p>
        <p className={styles.sevaCost}>{en.prasadamSeva.costHighlight}</p>

        <div className={styles.sevaGrid}>
          {sevaOptions.map((opt) => (
            <div key={opt.amount} className={styles.sevaCard}>
              <p className={styles.sevaPlates}>{opt.plates.toLocaleString("en-IN")} Plates</p>
              <p className={styles.sevaAmount}>
                ₹{opt.amount.toLocaleString("en-IN")}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.sevaCustomCard}>
          <p className={styles.sevaCustomHeading}>{en.prasadamSeva.customHeading}</p>
          <p className={styles.sevaCustomBody}>
            Minimum 50 plates. ₹50 per plate. For any number of plates above 50.
          </p>
        </div>

        <div className={styles.sevaNetBanking}>
          For seva above ₹1,00,000, please use Net Banking. Contact us on WhatsApp to arrange.
        </div>
      </section>

      {/* ── DONATION DETAILS ── */}
      <section id="donation" className={styles.donation}>
        <div className={styles.donationInner}>
          <h2 className={styles.sectionHeading} style={{ marginBottom: "5mm" }}>{en.donationSection.heading}</h2>

          <div className={styles.qrRow}>
            {/* Official QR code */}
            <div className={styles.qrBlock}>
              <Image
                src="/images/qr-crop.jpg"
                alt="Official QR code for ISKCON Salem Prasadam Seva donation"
                width={280}
                height={470}
                className={styles.qrImg}
                loading="lazy"
              />
            </div>

            {/* Bank details */}
            <div className={styles.bankBlock}>
              <p className={styles.bankHeading}>{en.donationSection.accountDetailsHeading}</p>
              <dl className={styles.bankDl}>
                {[
                  ["A/C Name", "ISKCON PRASADAM SEVA"],
                  ["A/C No", "737101000040"],
                  ["IFSC Code", "ICIC0007371"],
                  ["Bank", "ICICI Bank"],
                  ["Branch", "Salem"],
                  ["UPI ID", eventData.upiId],
                ].map(([dt, dd]) => (
                  <div key={dt} className={styles.bankRow}>
                    <dt>{dt}</dt>
                    <dd>{dd}</dd>
                  </div>
                ))}
              </dl>
              {en.donationSection.noteLines.map((line, i) => (
                <p key={i} className={styles.bankNote}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICIAL INVITATION (images, no buttons) ── */}
      <section id="official-invitation" className={styles.officialInvitation}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "5mm" }}>
          {en.officialInvitation.heading}
        </h2>

        <div className={styles.invGallery}>
          {[
            { src: "/images/invitation-front-full.jpg", caption: en.officialInvitation.items[0].caption, alt: en.officialInvitation.items[0].alt },
            { src: "/images/invitation-programme.jpg", caption: en.officialInvitation.items[1].caption, alt: en.officialInvitation.items[1].alt },
            { src: "/images/invitation-seva.jpg", caption: en.officialInvitation.items[2].caption, alt: en.officialInvitation.items[2].alt },
          ].map((item) => (
            <div key={item.src} className={styles.invCard}>
              <div className={styles.invImgWrap}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={0}
                  height={0}
                  sizes="200px"
                  className={styles.invImg}
                  loading="lazy"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <p className={styles.invCaption}>{item.caption}</p>
            </div>
          ))}
        </div>

        {/* Seva artwork full width */}
        <div style={{ marginBottom: "6mm", break_inside: "avoid", pageBreakInside: "avoid" } as React.CSSProperties}>
          <Image
            src="/images/invitation-seva.jpg"
            alt="Official ISKCON Salem Janmashtami 2026 Prasadam Seva details"
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "10px", boxShadow: "0 4px 18px rgba(40,57,111,0.12)" }}
          />
        </div>

        {/* Founder panel */}
        <div className={styles.founderBlock}>
          <div className={styles.founderImg}>
            <Image
              src="/images/prabhupada-panel.jpg"
              alt="His Divine Grace A.C. Bhaktivedanta Swami Prabhupada – Founder-Acharya of ISKCON"
              width={0}
              height={0}
              sizes="220px"
              className={styles.founderImgEl}
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div>
            <p className={styles.founderName}>{en.officialInvitation.founderName}</p>
            <p className={styles.founderRole}>{en.officialInvitation.founderRole}</p>
          </div>
        </div>
      </section>

      {/* ── STAY CONNECTED ── */}
      <section id="stay-connected" className={styles.stayConnected}>
        <h2 className={styles.stayHeading}>{en.stayConnected.heading}</h2>
        <p className={styles.stayDesc}>{en.stayConnected.desc}</p>

        <div className={styles.stayLinks}>
          {[
            { label: en.stayConnected.eventSiteLabel, url: siteLinks.janmashtami2026, href: siteLinks.janmashtami2026 },
            { label: en.stayConnected.websiteLabel, url: "iskconsalem.com", href: eventData.officialWebsite },
            { label: en.stayConnected.linksLabel, url: "sites.google.com/view/iskconstonetemple", href: eventData.officialLinks },
            { label: "Google Maps – Sona College Ground", url: "maps.app.goo.gl/h4jugsJbuYzx3Gzc9", href: siteLinks.mapsUrl },
          ].map((link) => (
            <a key={link.href} href={link.href} rel="noopener noreferrer" className={styles.stayLink}>
              <span className={styles.stayLinkLabel}>{link.label}</span>
              <span className={styles.stayLinkUrl}>{link.url}</span>
            </a>
          ))}
        </div>

        <div className={styles.contactCard}>
          <p className={styles.contactLabel}>{en.stayConnected.contactLabel}</p>
          <p className={styles.contactName}>{eventData.contact.name}</p>
          <p className={styles.contactPhone}>+91 {eventData.contact.displayPhone}</p>
        </div>
      </section>

      {/* ── FINAL INVITATION ── */}
      <section className={styles.finalInvitation}>
        <h2 className={styles.finalHeading}>{en.finalInvitation.heading}</h2>
        <p className={styles.finalBody}>{en.finalInvitation.body}</p>
        <p className={styles.finalClosing}>{en.finalInvitation.closing}</p>
      </section>

    </div>
  );
}
