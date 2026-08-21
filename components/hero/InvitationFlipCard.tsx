"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./InvitationFlipCard.module.css";

interface Props {
  frontSrc: string;
  programmeSrc: string;
}

export default function InvitationFlipCard({ frontSrc, programmeSrc }: Props) {
  const [showBack, setShowBack] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        {/* Front */}
        <Image
          src={frontSrc}
          alt="Official ISKCON Salem Sri Krishna Janmashtami 2026 front invitation"
          fill
          className={styles.img}
          style={{ opacity: showBack ? 0 : 1 }}
          priority
          sizes="(max-width: 768px) 100vw, 900px"
        />
        {/* Back / Programme */}
        <Image
          src={programmeSrc}
          alt="ISKCON Salem Janmashtami 2026 programme schedule – backside invitation"
          fill
          className={styles.img}
          style={{ opacity: showBack ? 1 : 0 }}
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>

      <div className={styles.toggleRow}>
        <button
          className={`${styles.toggleBtn} ${!showBack ? styles.active : ""}`}
          onClick={() => setShowBack(false)}
          aria-pressed={!showBack}
        >
          Front
        </button>
        <button
          className={`${styles.toggleBtn} ${showBack ? styles.active : ""}`}
          onClick={() => setShowBack(true)}
          aria-pressed={showBack}
        >
          Full Programme
        </button>
      </div>
    </div>
  );
}
