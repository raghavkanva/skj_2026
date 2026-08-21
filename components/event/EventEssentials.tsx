import CalendarMenu from "./CalendarMenu";
import styles from "./EventEssentials.module.css";

const cards = [
  {
    kicker: "Date",
    value: "4 September 2026",
    label: "Friday",
  },
  {
    kicker: "Timing",
    value: "From 8:00 AM",
    label: "Programmes throughout the day",
  },
  {
    kicker: "Venue",
    value: "Sona College Ground",
    label: "Salem, Tamil Nadu",
  },
  {
    kicker: "Prasadam",
    value: "Feast Prasadam",
    label: "Served throughout the event",
  },
];

export default function EventEssentials() {
  return (
    <section id="event-details" className={styles.section} aria-labelledby="essentials-heading">
      <div className="container">
        <h2 id="essentials-heading" className="sr-only">
          Event Details
        </h2>
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.kicker} className={styles.card}>
              <p className={styles.kicker}>{card.kicker}</p>
              <p className={styles.value}>{card.value}</p>
              <p className={styles.label}>{card.label}</p>
            </div>
          ))}
        </div>

        <p className={styles.tagline}>
          Everyone is welcome. Please come with your family and friends.
        </p>

        <div className={styles.calendarRow}>
          <CalendarMenu />
        </div>
      </div>
    </section>
  );
}
