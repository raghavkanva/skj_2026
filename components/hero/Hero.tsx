import Image from "next/image";
import { eventData } from "@/data/eventData";
import InvitationFlipCard from "./InvitationFlipCard";
import type { LocaleContent } from "@/content/types";
import styles from "./Hero.module.css";

interface Props {
  content: LocaleContent["hero"];
  frontSrc: string;
  programmeSrc: string;
}

export default function Hero({ content, frontSrc, programmeSrc }: Props) {
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
            {content.heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < content.heading.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className={styles.year}>{content.year}</p>

          <div className={styles.dateLine}>
            <p className={styles.dateMain}>{content.date}</p>
            <p className={styles.dateSub}>{content.venue}</p>
          </div>

          <p className={styles.inviteMain}>{content.mainInvitation}</p>
          <p className={styles.inviteSub}>{content.supportingCopy}</p>

          <div className={styles.ctas}>
            <a href="#programme" className="btn-primary">
              {content.ctaProgramme}
            </a>
            <a href="#prasadam-seva" className="btn-secondary">
              {content.ctaSeva}
            </a>
          </div>
        </div>

        <InvitationFlipCard frontSrc={frontSrc} programmeSrc={programmeSrc} />
      </div>
    </section>
  );
}
