import { eventData } from "@/data/eventData";
import styles from "./FinalInvitation.module.css";

export default function FinalInvitation() {
  return (
    <section className={styles.section} aria-labelledby="final-heading">
      <div className="container">
        <div className={styles.inner}>
          <h2 id="final-heading" className={styles.heading}>
            We Look Forward to Welcoming You
          </h2>
          <p className={styles.body}>
            Please come with your family and friends and spend this auspicious
            Janmashtami in the association of devotees, hearing about Sri
            Krishna, chanting His holy names and honouring Krishna prasadam.
          </p>
          <p className={styles.date}>{eventData.displayDate}</p>
          <p className={styles.venue}>{eventData.venue}</p>
          <p className={styles.close}>Hare Krishna.</p>
        </div>
      </div>
    </section>
  );
}
