import { eventData } from "@/data/eventData";
import styles from "./VenueSection.module.css";

export default function VenueSection() {
  return (
    <section
      id="venue"
      className={styles.section}
      aria-labelledby="venue-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 id="venue-heading" className={`section-heading ${styles.heading}`}>
            Venue
          </h2>

          <div className={styles.card}>
            <div className={styles.venueInfo}>
              <p className={styles.venueName}>Sona College Ground</p>
              <p className={styles.venueCity}>Salem, Tamil Nadu</p>
              <p className={styles.venueDate}>{eventData.displayDate}</p>
              <p className={styles.venueTime}>Programmes from 8:00 AM</p>
            </div>

            <a
              href={eventData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary ${styles.mapsBtn}`}
              aria-label="Open Sona College Ground, Salem in Google Maps"
            >
              Open in Google Maps
            </a>
          </div>

          <p className={styles.note}>
            The venue is centrally located in Salem and is accessible by
            public transport, auto-rickshaw and private vehicles. Ample
            parking space is available nearby.
          </p>
        </div>
      </div>
    </section>
  );
}
