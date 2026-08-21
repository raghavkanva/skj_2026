"use client";

import { useState } from "react";
import {
  officialImages,
  shareWithImages,
  buildWhatsAppShareUrl,
  buildShareMessageWithoutImages,
} from "@/lib/share";
import styles from "./ShareInvitation.module.css";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button onClick={handleCopy} className={styles.actionBtn}>
      {copied ? "Copied!" : "Copy Invitation Message"}
    </button>
  );
}

function ShareWithImagesButton() {
  const [status, setStatus] = useState<"idle" | "sharing" | "done" | "fallback">("idle");

  async function handleShare() {
    setStatus("sharing");
    const result = await shareWithImages();
    if (result === "success") setStatus("done");
    else setStatus("fallback");
    setTimeout(() => setStatus("idle"), 3000);
  }

  if (status === "fallback") {
    return (
      <span className={styles.fallbackNote}>
        Your device does not support sharing files. Use the WhatsApp button or copy the invitation message below.
      </span>
    );
  }

  return (
    <button
      onClick={handleShare}
      disabled={status === "sharing"}
      className={`${styles.actionBtn} ${styles.primaryAction}`}
      aria-busy={status === "sharing"}
    >
      {status === "sharing"
        ? "Preparing..."
        : status === "done"
        ? "Shared!"
        : "Share with Images"}
    </button>
  );
}

export default function ShareInvitation() {
  const whatsappUrl = buildWhatsAppShareUrl();
  const copyText = buildShareMessageWithoutImages();

  return (
    <section
      id="share-invitation"
      className={styles.section}
      aria-labelledby="share-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 id="share-heading" className={`section-heading ${styles.heading}`}>
            Share the Invitation
          </h2>
          <p className={styles.desc}>
            Help us spread the joy of Janmashtami. Share this invitation with
            your family, friends and community.
          </p>

          <div className={styles.previewRow}>
            {officialImages.map((img) => (
              <div key={img.src} className={styles.previewCard}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className={styles.previewImg}
                  loading="lazy"
                />
                <p className={styles.previewLabel}>{img.caption}</p>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <ShareWithImagesButton />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionBtn} ${styles.waBtn}`}
            >
              Share via WhatsApp
            </a>

            <CopyButton text={copyText} />

            <a
              href="/downloads/ISKCON-Salem-Janmashtami-2026-Invitation.zip"
              download
              className={styles.actionBtn}
            >
              Download All Images
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
