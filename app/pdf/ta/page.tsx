import type { Metadata } from "next";
import { ta } from "@/content/ta";
import { sevaOptions } from "@/data/sevaData";
import { eventData } from "@/data/eventData";
import { siteLinks } from "@/lib/siteLinks";
import styles from "../en/pdf.module.css";

export const metadata: Metadata = {
  title: "ISKCON சேலம் ஸ்ரீ கிருஷ்ண ஜென்மாஷ்டமி 2026 – அழைப்பிதழ்",
  robots: { index: false, follow: false },
};

const morningItems = ta.programme.items.filter((i) => i.period === "morning");
const eveningItems = ta.programme.items.filter((i) => i.period === "evening");

export default function PDFTamilPage() {
  return (
    <div className={styles.pdfRoot}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.logoWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="ISKCON சேலம்" className={styles.logo} />
        </div>
        <p className={styles.organiserBadge}>{eventData.organiser}</p>
        <p className={styles.organiserSub}>Sri Gaura Radha-Gokulananda Temple</p>
        <h1 className={styles.heroTitle}>
          ஸ்ரீ கிருஷ்ண<br />ஜென்மாஷ்டமி
        </h1>
        <p className={styles.heroYear}>2026</p>
        <p className={styles.heroDate}>{ta.hero.date}</p>
        <p className={styles.heroVenue}>{ta.hero.venue}</p>
        <p className={styles.heroInvite}>{ta.hero.mainInvitation}</p>
        <p className={styles.heroSub}>{ta.hero.supportingCopy}</p>
        <div className={styles.heroImgWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/invitation-front-full-ta.jpg"
            alt="ISKCON சேலம் ஸ்ரீ கிருஷ்ண ஜென்மாஷ்டமி 2026 அழைப்பிதழ்"
            className={styles.heroImg}
          />
        </div>
      </section>

      {/* ── PERSONAL INVITATION ── */}
      <section className={styles.personalInvitation}>
        <h2 className={styles.sectionHeading}>{ta.personalInvitation.heading}</h2>
        <p className={styles.inviteGreeting}>{ta.personalInvitation.openingGreeting}</p>
        {ta.personalInvitation.paragraphs.map((p, i) => (
          <p key={i} className={styles.invitePara}>{p}</p>
        ))}
        <p className={styles.inviteGreeting}>{ta.personalInvitation.closingGreeting}</p>
      </section>

      {/* ── EVENT ESSENTIALS ── */}
      <section className={styles.essentials}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "5mm" }}>விழா விவரங்கள்</h2>
        <div className={styles.essentialsGrid}>
          {[
            ta.eventEssentials.cards.date,
            ta.eventEssentials.cards.timing,
            ta.eventEssentials.cards.venue,
            ta.eventEssentials.cards.prasadam,
          ].map((card) => (
            <div key={card.kicker} className={styles.essCard}>
              <p className={styles.essKicker}>{card.kicker}</p>
              <p className={styles.essValue}>{card.value}</p>
              <p className={styles.essLabel}>{card.label}</p>
            </div>
          ))}
        </div>
        <p className={styles.essTagline}>{ta.eventEssentials.tagline}</p>
      </section>

      {/* ── CELEBRATION INTRO ── */}
      <section className={styles.celebrationIntro}>
        <h2 className={styles.celebHeading}>{ta.celebrationIntro.heading}</h2>
        <p className={styles.celebBody}>{ta.celebrationIntro.body}</p>
      </section>

      {/* ── 2025 HIGHLIGHTS ── */}
      <section id="janmashtami-2025" className={styles.highlights}>
        <p className={styles.highlightsKicker}>{ta.highlights.kicker}</p>
        <h2 className={styles.highlightsHeading}>{ta.highlights.heading}</h2>
        <p className={styles.highlightsSub}>{ta.highlights.subheading}</p>
        <a
          href={eventData.videoUrl}
          className={styles.highlightsLink}
          rel="noopener noreferrer"
        >
          ஜென்மாஷ்டமி 2025 சிறப்பம்சங்களை காணவும்
        </a>
        <p className={styles.highlightsJoinLine}>{ta.highlights.joinLine}</p>
      </section>

      {/* ── PROGRAMME ── */}
      <section id="programme" className={styles.programme}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "6mm" }}>
          {ta.programme.heading}
        </h2>
        <p style={{ textAlign: "center", fontSize: "12px", color: "#3a3a3a", marginBottom: "6mm" }}>
          {ta.venue.name}, {ta.venue.city} &middot; {ta.hero.date}
        </p>

        <div className={styles.programmeCols}>
          <div className={styles.programmeGroup}>
            <h3 className={styles.periodHeading}>{ta.programme.morningLabel}</h3>
            <ul className={styles.timeline}>
              {morningItems.map((item) => (
                <li key={item.time + item.title} className={styles.timelineItem}>
                  <span className={styles.timeSlot}>{item.time}</span>
                  <span className={styles.timeTitle}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.programmeGroup}>
            <h3 className={styles.periodHeading}>{ta.programme.eveningLabel}</h3>
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

        <div className={styles.programmeImgBlock}>
          <p className={styles.programmeImgCaption}>அதிகாரப்பூர்வ அழைப்பிதழ் – நிகழ்ச்சி அட்டவணை</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/invitation-programme-ta.jpg"
            alt="ISKCON சேலம் ஜென்மாஷ்டமி 2026 நிகழ்ச்சி அட்டவணை"
            className={styles.programmeImg}
          />
        </div>
      </section>

      {/* ── VENUE ── */}
      <section id="venue" className={styles.venue}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "5mm" }}>{ta.venue.heading}</h2>
        <div className={styles.venueCard}>
          <div>
            <p className={styles.venueName}>{ta.venue.name}</p>
            <p className={styles.venueCity}>{ta.venue.city}</p>
            <p className={styles.venueDate}>{ta.hero.date}</p>
            <p className={styles.venueTime}>காலை 8:00 மணி முதல் நிகழ்ச்சிகள்</p>
          </div>
          <a href={eventData.mapUrl} rel="noopener noreferrer" className={styles.mapsLink}>
            {ta.venue.mapsLabel}
          </a>
        </div>
        <p className={styles.venueNote}>{ta.venue.note}</p>
      </section>

      {/* ── DRESS CONTEST ── */}
      <section id="dress-contest" className={styles.dressContest}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "5mm" }}>{ta.dressContest.heading}</h2>
        <div className={styles.dressInner}>
          <div className={styles.dressImgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dress-contest-ta.jpg"
              alt="கிருஷ்ண உடை போட்டி – ISKCON சேலம் ஜென்மாஷ்டமி 2026"
              className={styles.dressImg}
            />
          </div>
          <div className={styles.dressContent}>
            <p className={styles.dressAge}>{ta.dressContest.age}</p>
            <p className={styles.dressBody}>{ta.dressContest.body}</p>
            <span className={styles.dressBadge}>{ta.dressContest.badge}</span>
          </div>
        </div>
      </section>

      {/* ── FEAST PRASADAM ── */}
      <section id="prasadam" className={styles.feastPrasadam}>
        <h2 className={styles.feastHeading}>{ta.feastPrasadam.heading}</h2>
        {ta.feastPrasadam.paragraphs.map((p, i) => (
          <p key={i} className={styles.feastBody}>{p}</p>
        ))}
      </section>

      {/* ── PRASADAM SEVA ── */}
      <section id="prasadam-seva" className={styles.seva}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "4mm" }}>{ta.prasadamSeva.heading}</h2>
        <p className={styles.sevaDesc}>{ta.prasadamSeva.desc}</p>
        <p className={styles.sevaCost}>{ta.prasadamSeva.costHighlight}</p>

        <div className={styles.sevaGrid}>
          {sevaOptions.map((opt) => (
            <div key={opt.amount} className={styles.sevaCard}>
              <p className={styles.sevaPlates}>{opt.plates.toLocaleString("en-IN")} தட்டுகள்</p>
              <p className={styles.sevaAmount}>₹{opt.amount.toLocaleString("en-IN")}</p>
            </div>
          ))}
        </div>

        <div className={styles.sevaCustomCard}>
          <p className={styles.sevaCustomHeading}>{ta.prasadamSeva.customHeading}</p>
          <p className={styles.sevaCustomBody}>
            குறைந்தது 50 தட்டுகள். ₹50 ஒரு தட்டிற்கு. 50 தட்டுகளுக்கு மேல் எத்தனை வேண்டுமானாலும்.
          </p>
        </div>

        <div className={styles.sevaNetBanking}>
          ₹1,00,000-க்கு மேல் நெட் பேங்கிங் மூலம் செலுத்தவும். WhatsApp-ல் தொடர்பு கொள்ளவும்.
        </div>
      </section>

      {/* ── DONATION DETAILS ── */}
      <section id="donation" className={styles.donation}>
        <div className={styles.donationInner}>
          <h2 className={styles.sectionHeading} style={{ marginBottom: "5mm" }}>{ta.donationSection.heading}</h2>

          <div className={styles.qrRow}>
            <div className={styles.qrBlock}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/qr-crop.jpg"
                alt="ISKCON சேலம் பிரசாத சேவை QR குறியீடு"
                className={styles.qrImg}
              />
            </div>

            <div className={styles.bankBlock}>
              <p className={styles.bankHeading}>{ta.donationSection.accountDetailsHeading}</p>
              <dl className={styles.bankDl}>
                {[
                  ["கணக்கு பெயர்", "ISKCON PRASADAM SEVA"],
                  ["கணக்கு எண்", "737101000040"],
                  ["IFSC குறியீடு", "ICIC0007371"],
                  ["வங்கி", "ICICI Bank"],
                  ["கிளை", "Salem"],
                  ["UPI ID", eventData.upiId],
                ].map(([dt, dd]) => (
                  <div key={dt} className={styles.bankRow}>
                    <dt>{dt}</dt>
                    <dd>{dd}</dd>
                  </div>
                ))}
              </dl>
              {ta.donationSection.noteLines.map((line, i) => (
                <p key={i} className={styles.bankNote}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICIAL INVITATION IMAGES ── */}
      <section id="official-invitation" className={styles.officialInvitation}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: "5mm" }}>
          {ta.officialInvitation.heading}
        </h2>

        <div className={styles.invGallery}>
          {[
            { src: "/images/invitation-front-full-ta.jpg", caption: ta.officialInvitation.items[0].caption, alt: ta.officialInvitation.items[0].alt },
            { src: "/images/invitation-programme-ta.jpg", caption: ta.officialInvitation.items[1].caption, alt: ta.officialInvitation.items[1].alt },
            { src: "/images/invitation-seva-ta.jpg", caption: ta.officialInvitation.items[2].caption, alt: ta.officialInvitation.items[2].alt },
          ].map((item) => (
            <div key={item.src} className={styles.invCard}>
              <div className={styles.invImgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} className={styles.invImg} />
              </div>
              <p className={styles.invCaption}>{item.caption}</p>
            </div>
          ))}
        </div>

        <div className={styles.sevaFullImg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/invitation-seva-ta.jpg"
            alt="ISKCON சேலம் ஜென்மாஷ்டமி 2026 பிரசாத சேவை விவரங்கள்"
            className={styles.sevaFullImgEl}
          />
        </div>

        <div className={styles.founderBlock}>
          <div className={styles.founderImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/prabhupada-panel-ta.jpg"
              alt="பரமபூஜ்ய ஏ.சி. பக்திவேதாந்த சுவாமி பிரபுபாதர் – ISKCON நிறுவனர்-ஆச்சாரியர்"
              className={styles.founderImgEl}
            />
          </div>
          <div>
            <p className={styles.founderName}>{ta.officialInvitation.founderName}</p>
            <p className={styles.founderRole}>{ta.officialInvitation.founderRole}</p>
          </div>
        </div>
      </section>

      {/* ── STAY CONNECTED ── */}
      <section id="stay-connected" className={styles.stayConnected}>
        <h2 className={styles.stayHeading}>{ta.stayConnected.heading}</h2>
        <p className={styles.stayDesc}>{ta.stayConnected.desc}</p>

        <div className={styles.stayLinks}>
          {[
            { label: ta.stayConnected.eventSiteLabel, url: siteLinks.janmashtami2026, href: siteLinks.janmashtami2026 },
            { label: ta.stayConnected.websiteLabel, url: "iskconsalem.com", href: eventData.officialWebsite },
            { label: ta.stayConnected.linksLabel, url: "sites.google.com/view/iskconstonetemple", href: eventData.officialLinks },
            { label: "Google Maps – Sona College Ground", url: "maps.app.goo.gl/h4jugsJbuYzx3Gzc9", href: siteLinks.mapsUrl },
          ].map((link) => (
            <a key={link.href} href={link.href} rel="noopener noreferrer" className={styles.stayLink}>
              <span className={styles.stayLinkLabel}>{link.label}</span>
              <span className={styles.stayLinkUrl}>{link.url}</span>
            </a>
          ))}
        </div>

        <div className={styles.contactCard}>
          <p className={styles.contactLabel}>{ta.stayConnected.contactLabel}</p>
          <p className={styles.contactName}>{eventData.contact.name}</p>
          <p className={styles.contactPhone}>+91 {eventData.contact.displayPhone}</p>
        </div>
      </section>

      {/* ── FINAL INVITATION ── */}
      <section className={styles.finalInvitation}>
        <h2 className={styles.finalHeading}>{ta.finalInvitation.heading}</h2>
        <p className={styles.finalBody}>{ta.finalInvitation.body}</p>
        <p className={styles.finalClosing}>{ta.finalInvitation.closing}</p>
      </section>

    </div>
  );
}
