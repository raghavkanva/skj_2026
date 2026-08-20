import styles from "./PersonalInvitation.module.css";

export default function PersonalInvitation() {
  return (
    <section className={styles.section} aria-labelledby="invite-heading">
      <div className="container">
        <div className={styles.inner}>
          <h2 id="invite-heading" className={styles.heading}>
            A Warm Invitation to You and Your Family
          </h2>
          <div className={styles.body}>
            <p className={styles.harekrishna}>Hare Krishna!</p>

            <p>
              With great happiness, we invite you and your family to join us
              for the Sri Krishna Janmashtami celebrations organised by ISKCON
              Salem on Friday, 4 September 2026.
            </p>

            <p>
              Janmashtami is a very special occasion to come together, remember
              Sri Krishna, hear about His pastimes, chant His holy names,
              participate in kirtan, take darshan and honour Krishna prasadam.
            </p>

            <p>
              We would be very happy to have you with us and share this
              auspicious celebration together. Please come with your family and
              friends.
            </p>

            <p className={styles.harekrishna}>Hare Krishna.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
