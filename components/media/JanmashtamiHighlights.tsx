import { eventData } from "@/data/eventData";
import styles from "./VideoInvitation.module.css";

export default function JanmashtamiHighlights() {
  return (
    <section
      id="janmashtami-2025"
      className={styles.section}
      aria-labelledby="highlights-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.kicker}>A Glimpse of Janmashtami at ISKCON Salem</p>
          <h2 id="highlights-heading" className={styles.heading}>
            Highlights from Sri Krishna Janmashtami 2025
          </h2>
          <p className={styles.subheading}>
            Take a glimpse at the joyful Janmashtami celebrations at ISKCON Salem from 2025.
          </p>

          <div className={styles.videoWrap}>
            <div className={styles.embed}>
              <iframe
                src={`https://www.youtube.com/embed/${eventData.videoEmbedId}`}
                title="ISKCON Salem Janmashtami 2025 Highlights"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className={styles.iframe}
              />
            </div>
          </div>

          <p className={styles.caption}>
            Watch and share with your family and friends.
          </p>
          <p className={styles.joinLine}>
            Join us again this year on {eventData.displayDate} at {eventData.venue}.
          </p>
        </div>
      </div>
    </section>
  );
}
