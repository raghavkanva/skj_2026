"use client";

import { useState } from "react";
import Image from "next/image";
import ImageViewer from "@/components/media/ImageViewer";
import styles from "./OfficialPosterViewer.module.css";

export default function OfficialPosterViewer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.caption}>
          Official full-day invitation, as printed
        </p>
        <button
          className={styles.posterBtn}
          onClick={() => setOpen(true)}
          aria-label="View full Janmashtami programme invitation in full screen"
        >
          <Image
            src="/images/invitation-programme.jpg"
            alt="ISKCON Salem Janmashtami 2026 programme schedule – official printed invitation"
            width={1600}
            height={565}
            className={styles.poster}
            loading="lazy"
          />
        </button>
        <p className={styles.hint}>Tap the image to view full screen</p>
      </div>

      <ImageViewer
        src="/images/invitation-programme.jpg"
        alt="ISKCON Salem Janmashtami 2026 – full programme invitation"
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
