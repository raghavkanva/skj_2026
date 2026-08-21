import type { LocaleContent } from "@/content/types";
import styles from "./FeastPrasadam.module.css";

interface Props {
  content: LocaleContent["feastPrasadam"];
}

export default function FeastPrasadam({ content }: Props) {
  return (
    <section
      id="prasadam"
      className={styles.section}
      aria-labelledby="feast-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 id="feast-heading" className={styles.heading}>
            {content.heading}
          </h2>
          {content.paragraphs.map((p, i) => (
            <p key={i} className={styles.body}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
