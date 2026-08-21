import type { LocaleContent } from "@/content/types";
import styles from "./CelebrationIntro.module.css";

interface Props {
  content: LocaleContent["celebrationIntro"];
}

export default function CelebrationIntro({ content }: Props) {
  return (
    <section className={styles.section} aria-labelledby="celebration-heading">
      <div className="container">
        <div className={styles.inner}>
          <h2 id="celebration-heading" className={styles.heading}>
            {content.heading}
          </h2>
          <p className={styles.body}>{content.body}</p>
        </div>
      </div>
    </section>
  );
}
