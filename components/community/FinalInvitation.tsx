import { eventData } from "@/data/eventData";
import type { LocaleContent } from "@/content/types";
import styles from "./FinalInvitation.module.css";

interface Props {
  content: LocaleContent["finalInvitation"];
  date: string;
  venue: string;
}

export default function FinalInvitation({ content, date, venue }: Props) {
  return (
    <section className={styles.section} aria-labelledby="final-heading">
      <div className="container">
        <div className={styles.inner}>
          <h2 id="final-heading" className={styles.heading}>
            {content.heading}
          </h2>
          <p className={styles.body}>{content.body}</p>
          <p className={styles.date}>{date}</p>
          <p className={styles.venue}>{venue}</p>
          <p className={styles.close}>{content.closing}</p>
        </div>
      </div>
    </section>
  );
}
