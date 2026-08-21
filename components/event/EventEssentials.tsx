import CalendarMenu from "./CalendarMenu";
import type { LocaleContent } from "@/content/types";
import styles from "./EventEssentials.module.css";

interface Props {
  content: LocaleContent["eventEssentials"];
}

export default function EventEssentials({ content }: Props) {
  const { cards } = content;
  const cardList = [cards.date, cards.timing, cards.venue, cards.prasadam];

  return (
    <section id="event-details" className={styles.section} aria-labelledby="essentials-heading">
      <div className="container">
        <h2 id="essentials-heading" className="sr-only">
          Event Details
        </h2>
        <div className={styles.grid}>
          {cardList.map((card) => (
            <div key={card.kicker} className={styles.card}>
              <p className={styles.kicker}>{card.kicker}</p>
              <p className={styles.value}>{card.value}</p>
              <p className={styles.label}>{card.label}</p>
            </div>
          ))}
        </div>

        <p className={styles.tagline}>{content.tagline}</p>

        <div className={styles.calendarRow}>
          <CalendarMenu />
        </div>
      </div>
    </section>
  );
}
