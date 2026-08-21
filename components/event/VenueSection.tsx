import { eventData } from "@/data/eventData";
import type { LocaleContent } from "@/content/types";
import styles from "./VenueSection.module.css";

interface Props {
  content: LocaleContent["venue"];
  date: string;
}

export default function VenueSection({ content, date }: Props) {
  return (
    <section
      id="venue"
      className={styles.section}
      aria-labelledby="venue-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 id="venue-heading" className={`section-heading ${styles.heading}`}>
            {content.heading}
          </h2>

          <div className={styles.card}>
            <div className={styles.venueInfo}>
              <p className={styles.venueName}>{content.name}</p>
              <p className={styles.venueCity}>{content.city}</p>
              <p className={styles.venueDate}>{date}</p>
              <p className={styles.venueTime}>Programmes from 8:00 AM</p>
            </div>

            <a
              href={eventData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary ${styles.mapsBtn}`}
              aria-label="Open Sona College Ground, Salem in Google Maps"
            >
              {content.mapsLabel}
            </a>
          </div>

          <p className={styles.note}>{content.note}</p>
        </div>
      </div>
    </section>
  );
}
