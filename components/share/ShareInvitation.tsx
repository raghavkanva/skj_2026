"use client";

import { useState } from "react";
import Image from "next/image";
import ImageViewer from "@/components/media/ImageViewer";
import type { LocaleContent } from "@/content/types";
import {
  shareWithImages,
  buildWhatsAppShareUrl,
  buildShareMessageWithoutImages,
} from "@/lib/share";
import styles from "./ShareInvitation.module.css";

interface ShareImages {
  front: string;
  programme: string;
  seva: string;
}

interface Props {
  content: LocaleContent["shareInvitation"];
  images: ShareImages;
}

function CopyButton({ text, label, copiedLabel }: { text: string; label: string; copiedLabel: string }) {
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
      {copied ? copiedLabel : label}
    </button>
  );
}

function ShareWithImagesButton({
  sharingLabel,
  sharedLabel,
  shareLabel,
  fallbackNote,
  images,
  eventUrl,
}: {
  sharingLabel: string;
  sharedLabel: string;
  shareLabel: string;
  fallbackNote: string;
  images: ShareImages;
  eventUrl: string;
}) {
  const [status, setStatus] = useState<"idle" | "sharing" | "done" | "fallback">("idle");

  async function handleShare() {
    setStatus("sharing");
    const imageSrcs = [images.front, images.programme, images.seva];
    const result = await shareWithImages(imageSrcs, eventUrl);
    if (result === "success") setStatus("done");
    else setStatus("fallback");
    setTimeout(() => setStatus("idle"), 3000);
  }

  if (status === "fallback") {
    return (
      <span className={styles.fallbackNote}>{fallbackNote}</span>
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
        ? sharingLabel
        : status === "done"
        ? sharedLabel
        : shareLabel}
    </button>
  );
}

export default function ShareInvitation({ content, images }: Props) {
  const [viewerSrc, setViewerSrc] = useState<string | null>(null);
  const [viewerAlt, setViewerAlt] = useState("");

  const srcList = [images.front, images.programme, images.seva];
  const whatsappUrl = buildWhatsAppShareUrl(content.eventUrl);
  const copyText = buildShareMessageWithoutImages(content.eventUrl);

  function openViewer(src: string, caption: string) {
    setViewerSrc(src);
    setViewerAlt(caption);
  }

  return (
    <>
      <section
        id="share-invitation"
        className={styles.section}
        aria-labelledby="share-heading"
      >
        <div className="container">
          <div className={styles.inner}>
            <h2 id="share-heading" className={`section-heading ${styles.heading}`}>
              {content.heading}
            </h2>
            <p className={styles.desc}>{content.desc}</p>

            <div className={styles.previewRow}>
              {content.items.map((item, idx) => {
                const src = srcList[idx];
                return (
                  <div key={src} className={styles.previewCard}>
                    <button
                      className={styles.previewImgBtn}
                      onClick={() => openViewer(src, item.caption)}
                      aria-label={`View full: ${item.caption}`}
                    >
                      <div className={styles.previewImgWrap}>
                        <Image
                          src={src}
                          alt={item.caption}
                          width={0}
                          height={0}
                          sizes="(max-width: 768px) 90vw, 300px"
                          className={styles.previewImg}
                          loading="lazy"
                          style={{ width: "100%", height: "auto", display: "block" }}
                        />
                      </div>
                    </button>
                    <div className={styles.previewFooter}>
                      <p className={styles.previewLabel}>{item.caption}</p>
                      <div className={styles.previewActions}>
                        <button
                          className={styles.previewActionBtn}
                          onClick={() => openViewer(src, item.caption)}
                        >
                          {content.viewFullLabel}
                        </button>
                        <a
                          href={src}
                          download
                          className={styles.previewActionBtn}
                          rel="noopener noreferrer"
                        >
                          {content.downloadLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.actions}>
              <ShareWithImagesButton
                sharingLabel={content.sharingLabel}
                sharedLabel={content.sharedLabel}
                shareLabel={content.shareWithImagesBtn}
                fallbackNote={content.fallbackNote}
                images={images}
                eventUrl={content.eventUrl}
              />

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionBtn} ${styles.waBtn}`}
              >
                {content.shareWhatsAppBtn}
              </a>

              <CopyButton
                text={copyText}
                label={content.copyMessageBtn}
                copiedLabel={content.copiedLabel}
              />

              <a
                href="/downloads/ISKCON-Salem-Janmashtami-2026-Invitation.zip"
                download
                className={styles.actionBtn}
              >
                {content.downloadAllBtn}
              </a>

              <a
                href="/downloads/ISKCON-Salem-Janmashtami-2026-English.pdf"
                download
                className={`${styles.actionBtn} ${styles.pdfDownloadBtn}`}
              >
                Download PDF Invitation
              </a>
            </div>
          </div>
        </div>
      </section>

      <ImageViewer
        src={viewerSrc ?? ""}
        alt={viewerAlt}
        open={viewerSrc !== null}
        onClose={() => setViewerSrc(null)}
        downloadLabel="Download"
        downloadSrc={viewerSrc ?? ""}
      />
    </>
  );
}
