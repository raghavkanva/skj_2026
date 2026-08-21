import type { LocaleContent } from "@/content/types";
import styles from "./PersonalInvitation.module.css";

interface Props {
  content: LocaleContent["personalInvitation"];
}

export default function PersonalInvitation({ content }: Props) {
  return (
    <section className={styles.section} aria-labelledby="invite-heading">
      <div className="container">
        <div className={styles.inner}>
          <h2 id="invite-heading" className={styles.heading}>
            {content.heading}
          </h2>
          <div className={styles.body}>
            <p className={styles.harekrishna}>{content.openingGreeting}</p>
            {content.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className={styles.harekrishna}>{content.closingGreeting}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
