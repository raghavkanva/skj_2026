import { eventData } from "@/data/eventData";
import styles from "./VideoInvitation.module.css";

export default function VideoInvitation() {
  return (
    <section
      id="video"
      className={styles.section}
      aria-labelledby="video-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 id="video-heading" className={styles.heading}>
            A Special Invitation from ISKCON Salem
          </h2>

          <div className={styles.videoWrap}>
            <div className={styles.embed}>
              <iframe
                src={`https://www.youtube.com/embed/${eventData.videoEmbedId}`}
                title="ISKCON Salem Janmashtami 2026 Invitation"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className={styles.iframe}
              />
            </div>
          </div>

          <p className={styles.caption}>
            Watch the Janmashtami invitation and share it with your family and
            friends.
          </p>
        </div>
      </div>
    </section>
  );
}
