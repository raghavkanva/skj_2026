"use client";

import { useState } from "react";
import { eventData } from "@/data/eventData";
import styles from "./WhatsAppFloat.module.css";

const WHATSAPP_MESSAGE =
  "Hare Krishna. I would like to know more about the ISKCON Salem Sri Krishna Janmashtami 2026 celebration.";

export default function WhatsAppFloat() {
  const [expanded, setExpanded] = useState(false);

  const whatsappUrl = `https://wa.me/919710772621?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className={styles.container}>
      {expanded && (
        <div className={styles.panel} role="dialog" aria-label="Contact ISKCON Salem">
          <p className={styles.panelLabel}>Need more information?</p>
          <p className={styles.panelName}>{eventData.contact.name}</p>
          <p className={styles.panelOrg}>ISKCON Salem</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.panelBtn}
            onClick={() => setExpanded(false)}
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
      <button
        className={styles.fab}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-label={expanded ? "Close WhatsApp contact" : "Contact us on WhatsApp"}
      >
        <WhatsAppIcon />
      </button>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.58A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22c-1.79 0-3.54-.48-5.07-1.38l-.36-.22-3.73.95.99-3.63-.24-.38A10 10 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10Zm5.49-7.68c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07a8.2 8.2 0 0 1-4.1-3.58c-.31-.53.31-.49.89-1.64.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}
