import { siteLinks } from "@/lib/siteLinks";
import { eventData } from "@/data/eventData";
import styles from "./StayConnected.module.css";

const WHATSAPP_CONTACT = `https://wa.me/919710772621?text=${encodeURIComponent(
  "Hare Krishna. I would like to know more about the ISKCON Salem Sri Krishna Janmashtami 2026 celebration."
)}`;

export default function StayConnected() {
  return (
    <section
      id="stay-connected"
      className={styles.section}
      aria-labelledby="connect-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 id="connect-heading" className={styles.heading}>
            Stay Connected with ISKCON Salem
          </h2>
          <p className={styles.desc}>
            For temple information, Bhagavad Gita classes, upcoming festivals
            and community updates, stay connected through the official ISKCON
            Salem channels.
          </p>

          <div className={styles.ctas}>
            <a
              href={siteLinks.janmashtami2026}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Janmashtami 2026 Event Site
            </a>
            <a
              href={eventData.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit ISKCON Salem Website
            </a>
            <a
              href={eventData.officialLinks}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View All Official Links
            </a>
          </div>

          <div className={styles.contactCard}>
            <p className={styles.contactLabel}>For More Information</p>
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
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
