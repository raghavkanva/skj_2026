import styles from "./CelebrationIntro.module.css";

export default function CelebrationIntro() {
  return (
    <section className={styles.section} aria-labelledby="celebration-heading">
      <div className="container">
        <div className={styles.inner}>
          <h2 id="celebration-heading" className={styles.heading}>
            Come Celebrate Sri Krishna Janmashtami
          </h2>
          <p className={styles.body}>
            Join devotees from across Salem for a joyful day dedicated to Sri
            Krishna, with darshan, arati, bhajan, Krishna katha, cultural
            programmes, maha abhisheka and feast prasadam.
          </p>
        </div>
      </div>
    </section>
  );
}
