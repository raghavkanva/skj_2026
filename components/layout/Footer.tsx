import { eventData } from "@/data/eventData";
import styles from "./Footer.module.css";

const footerNav = [
  { href: "#programme", label: "Programme" },
  { href: "#seva", label: "Prasadam Seva" },
  { href: "#hero", label: "Venue" },
  { href: "#video", label: "Video" },
  { href: "#connect", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.brandName}>ISKCON Salem</span>
            <span className={styles.brandSub}>
              Sri Gaura Radha-Gokulananda Temple
              <br />
              Hare Krishna Land, Karuppur, Salem 636012, Tamil Nadu
            </span>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            {footerNav.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.links}>
            <a
              href={eventData.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.extLink}
            >
              Official Website
            </a>
            <a
              href={eventData.officialLinks}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.extLink}
            >
              Official Links
            </a>
            <a
              href={`https://wa.me/919710772621`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.extLink}
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            {eventData.organiser} &middot;{" "}
            <a
              href={eventData.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bottomLink}
            >
              iskconsalem.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
