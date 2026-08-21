import { eventData } from "@/data/eventData";
import OfficialPosterViewer from "./OfficialPosterViewer";
import type { LocaleContent } from "@/content/types";
import styles from "./ProgrammeSection.module.css";

interface Props {
  content: LocaleContent["programme"];
  venue: string;
  date: string;
}

export default function ProgrammeSection({ content, venue, date }: Props) {
  const morningItems = content.items.filter((i) => i.period === "morning");
  const eveningItems = content.items.filter((i) => i.period === "evening");

  return (
    <section
      id="programme"
      className={styles.section}
      aria-labelledby="programme-heading"
    >
      <div className="container">
        <h2 id="programme-heading" className={`${styles.heading} section-heading`}>
          {content.heading}
        </h2>
        <p className={styles.sub}>
          {venue} &middot; {date}
        </p>

        <div className={styles.columns}>
          <div>
            <h3 className={styles.periodHeading}>{content.morningLabel}</h3>
            <ul className={styles.timeline}>
              {morningItems.map((item) => (
                <li key={item.time + item.title} className={styles.item}>
                  <span className={styles.time}>{item.time}</span>
                  <span className={styles.title}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.periodHeading}>{content.eveningLabel}</h3>
            <ul className={styles.timeline}>
              {eveningItems.map((item) => (
                <li key={item.time + item.title} className={styles.item}>
                  <span className={styles.time}>{item.time}</span>
                  <span className={styles.title}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <OfficialPosterViewer />
      </div>
    </section>
  );
}
