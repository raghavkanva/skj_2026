import Image from "next/image";
import styles from "./DressContest.module.css";

export default function DressContest() {
  return (
    <section
      id="dress-contest"
      className={styles.section}
      aria-labelledby="dress-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/dress-contest.jpg"
              alt="Krishna Dress Contest – official artwork for ISKCON Salem Janmashtami 2026"
              width={320}
              height={250}
              className={styles.image}
              loading="lazy"
            />
          </div>
          <div className={styles.content}>
            <h2
              id="dress-heading"
              className={styles.heading}
            >
              Krishna Dress Contest
            </h2>
            <p className={styles.age}>For children aged 3 to 11</p>
            <p className={styles.desc}>
              Let your little Krishna be part of the Janmashtami celebration.
            </p>
            <span className={styles.badge}>Whole Day Event</span>
          </div>
        </div>
      </div>
    </section>
  );
}
