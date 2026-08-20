"use client";

import { useEffect, useRef, useState } from "react";
import { buildGoogleCalendarUrl } from "@/lib/calendar";
import styles from "./CalendarMenu.module.css";

export default function CalendarMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const googleUrl = buildGoogleCalendarUrl();

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleOutside);
      document.addEventListener("keydown", handleKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        Add to Calendar
        <span className={styles.arrow} aria-hidden="true">&#9662;</span>
      </button>

      {open && (
        <div className={styles.dropdown} role="menu" aria-label="Calendar options">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.option}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <CalIcon />
            Google Calendar
          </a>
          <a
            href="/calendar/janmashtami-2026-iskcon-salem.ics"
            download="janmashtami-2026-iskcon-salem.ics"
            className={styles.option}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <CalIcon />
            Apple / Outlook / Other (.ics)
          </a>
        </div>
      )}
    </div>
  );
}

function CalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
