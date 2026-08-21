import { siteLinks } from "@/lib/siteLinks";
import { eventData } from "@/data/eventData";
import type { LocaleContent } from "@/content/types";
import styles from "./StayConnected.module.css";

interface Props {
  content: LocaleContent["stayConnected"];
}

const WHATSAPP_CONTACT = `https://wa.me/919710772621?text=${encodeURIComponent(
  "Hare Krishna. I would like to know more about the ISKCON Salem Sri Krishna Janmashtami 2026 celebration."
)}`;

export default function StayConnected({ content }: Props) {
  return (
    <section
      id="stay-connected"
      className={styles.section}
      aria-labelledby="connect-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 id="connect-heading" className={styles.heading}>
            {content.heading}
          </h2>
          <p className={styles.desc}>{content.desc}</p>

          <div className={styles.ctas}>
            <a
              href={siteLinks.janmashtami2026}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {content.eventSiteLabel}
            </a>
            <a
              href={eventData.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {content.websiteLabel}
            </a>
            <a
              href={eventData.officialLinks}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {content.linksLabel}
            </a>
          </div>

          <div className={styles.contactCard}>
            <p className={styles.contactLabel}>{content.contactLabel}</p>
            <p className={styles.contactName}>{eventData.contact.name}</p>
            <p className={styles.contactPhone}>
              +91 {eventData.contact.displayPhone}
            </p>
            <a
              href={WHATSAPP_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              {content.chatLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
