import Image from "next/image";
import { eventData } from "@/data/eventData";
import InvitationFlipCard from "./InvitationFlipCard";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      id="home"
      className={styles.hero}
      aria-label="ISKCON Salem Sri Krishna Janmashtami 2026"
    >
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.textBlock} animate-fade-up`}>
          <div className={styles.logoWrap}>
            <Image
              src="/images/logo.png"
              alt="ISKCON Salem"
              width={80}
              height={80}
              className={styles.logoImg}
              priority
            />
          </div>

          <p className={styles.organiserBadge}>{eventData.organiser}</p>
          <p className={styles.organiserSub}>Sri Gaura Radha-Gokulananda Temple</p>

          <h1 className={styles.title}>
            Sri Krishna
            <br />
            Janmashtami
          </h1>

          <p className={styles.year}>2026</p>

          <div className={styles.dateLine}>
            <p className={styles.dateMain}>{eventData.displayDate}</p>
            <p className={styles.dateSub}>{eventData.venue}</p>
          </div>

          <p className={styles.inviteMain}>
            You and your family are warmly invited to join us in celebrating
            the divine appearance of Sri Krishna.
          </p>
          <p className={styles.inviteSub}>
            A full day of darshan, kirtan, Krishna katha, cultural programmes
            and feast prasadam.
          </p>

          <div className={styles.ctas}>
            <a href="#programme" className="btn-primary">
              View Festival Programme
            </a>
            <a href="#prasadam-seva" className="btn-secondary">
              Offer Prasadam Seva
            </a>
          </div>
        </div>

        <InvitationFlipCard />
      </div>
    </section>
  );
}
