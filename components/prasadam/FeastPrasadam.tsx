import styles from "./FeastPrasadam.module.css";

export default function FeastPrasadam() {
  return (
    <section
      id="prasadam"
      className={styles.section}
      aria-labelledby="feast-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 id="feast-heading" className={styles.heading}>
            Feast Prasadam for Everyone
          </h2>
          <p className={styles.body}>
            As part of the Sri Krishna Janmashtami celebrations, feast prasadam
            will be served throughout the event.
          </p>
          <p className={styles.body}>
            More than 1 lakh devotees are expected to participate in the
            celebration.
          </p>
        </div>
      </div>
    </section>
  );
}
