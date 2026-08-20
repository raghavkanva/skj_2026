import { morningProgramme, eveningProgramme } from "@/data/programmeData";
import { eventData } from "@/data/eventData";
import OfficialPosterViewer from "./OfficialPosterViewer";
import styles from "./ProgrammeSection.module.css";

export default function ProgrammeSection() {
  return (
    <section
      id="programme"
      className={styles.section}
      aria-labelledby="programme-heading"
    >
      <div className="container">
        <h2 id="programme-heading" className={`${styles.heading} section-heading`}>
          Janmashtami Programme
        </h2>
        <p className={styles.sub}>
          {eventData.venue} &middot; {eventData.displayDate}
        </p>

        <div className={styles.columns}>
          <div>
            <h3 className={styles.periodHeading}>Morning Programme</h3>
            <ul className={styles.timeline}>
              {morningProgramme.map((item) => (
                <li key={item.time + item.title} className={styles.item}>
                  <span className={styles.time}>{item.time}</span>
                  <span className={styles.title}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.periodHeading}>Evening Programme</h3>
            <ul className={styles.timeline}>
              {eveningProgramme.map((item) => (
                <li key={item.time + item.title} className={styles.item}>
                  <span className={styles.time}>{item.time}</span>
                  <span className={styles.title}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={eventData.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.venueBlock}
          aria-label="Open Sona College Ground, Salem in Google Maps"
        >
          <span className={styles.venueMain}>
            Venue: Sona College Ground, Salem
          </span>
          <span className={styles.venueSub}>Open in Google Maps</span>
        </a>

        <OfficialPosterViewer />
      </div>
    </section>
  );
}
