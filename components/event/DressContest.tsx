import Image from "next/image";
import type { LocaleContent } from "@/content/types";
import styles from "./DressContest.module.css";

interface Props {
  content: LocaleContent["dressContest"];
  imageSrc: string;
}

export default function DressContest({ content, imageSrc }: Props) {
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
              src={imageSrc}
              alt="Krishna Dress Contest – official artwork for ISKCON Salem Janmashtami 2026"
              width={320}
              height={250}
              className={styles.image}
              loading="lazy"
            />
          </div>
          <div className={styles.content}>
            <h2 id="dress-heading" className={styles.heading}>
              {content.heading}
            </h2>
            <p className={styles.age}>{content.age}</p>
            <p className={styles.desc}>{content.body}</p>
            <span className={styles.badge}>{content.badge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
