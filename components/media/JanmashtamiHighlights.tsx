import { eventData } from "@/data/eventData";
import type { LocaleContent } from "@/content/types";
import styles from "./VideoInvitation.module.css";

interface Props {
  content: LocaleContent["highlights"];
}

export default function JanmashtamiHighlights({ content }: Props) {
  return (
    <section
      id="janmashtami-2025"
      className={styles.section}
      aria-labelledby="highlights-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.kicker}>{content.kicker}</p>
          <h2 id="highlights-heading" className={styles.heading}>
            {content.heading}
          </h2>
          <p className={styles.subheading}>{content.subheading}</p>

          <div className={styles.videoWrap}>
            <div className={styles.embed}>
              <iframe
                src={`https://www.youtube.com/embed/${eventData.videoEmbedId}`}
                title="ISKCON Salem Janmashtami 2025 Highlights"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className={styles.iframe}
              />
            </div>
          </div>

          <p className={styles.caption}>{content.body}</p>
          <p className={styles.joinLine}>{content.joinLine}</p>
        </div>
      </div>
    </section>
  );
}
