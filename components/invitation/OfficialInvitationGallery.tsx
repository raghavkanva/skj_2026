"use client";

import { useState } from "react";
import Image from "next/image";
import ImageViewer from "@/components/media/ImageViewer";
import styles from "./OfficialInvitationGallery.module.css";

const galleryItems = [
  {
    src: "/images/invitation-front-full.jpg",
    alt: "Official ISKCON Salem Sri Krishna Janmashtami 2026 front invitation – Founder-Acharya and Sri Krishna",
    caption: "Front Invitation – Founder-Acharya & Sri Krishna",
  },
  {
    src: "/images/invitation-programme.jpg",
    alt: "ISKCON Salem Janmashtami 2026 programme schedule – official printed invitation",
    caption: "Full-Day Programme",
  },
  {
    src: "/images/invitation-seva.jpg",
    alt: "ISKCON Salem Janmashtami 2026 Prasadam Seva and donation details",
    caption: "Prasadam Seva & Donation Details",
  },
];

export default function OfficialInvitationGallery() {
  const [viewerSrc, setViewerSrc] = useState<string | null>(null);
  const [viewerAlt, setViewerAlt] = useState("");

  function openViewer(src: string, alt: string) {
    setViewerSrc(src);
    setViewerAlt(alt);
  }

  return (
    <>
      <section
        id="official-invitation"
        className={styles.section}
        aria-labelledby="gallery-heading"
      >
        <div className="container">
          <h2 id="gallery-heading" className={`section-heading ${styles.heading}`}>
            Official Janmashtami Invitation
          </h2>

          <div className={styles.grid}>
            {galleryItems.map((item) => (
              <button
                key={item.src}
                className={styles.card}
                onClick={() => openViewer(item.src, item.alt)}
                aria-label={`View full screen: ${item.caption}`}
              >
                <div className={styles.imgWrap}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={styles.img}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
                <p className={styles.caption}>{item.caption}</p>
              </button>
            ))}
          </div>

          <div className={styles.founder}>
            <div className={styles.founderImg}>
              <Image
                src="/images/prabhupada-panel.jpg"
                alt="His Divine Grace A.C. Bhaktivedanta Swami Prabhupada – Founder-Acharya of ISKCON"
                fill
                className={styles.founderImgEl}
                loading="lazy"
                sizes="320px"
              />
            </div>
            <div className={styles.founderText}>
              <p className={styles.founderName}>
                His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
              </p>
              <p className={styles.founderRole}>
                Founder-Acharya of the International Society for Krishna
                Consciousness
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageViewer
        src={viewerSrc ?? ""}
        alt={viewerAlt}
        open={viewerSrc !== null}
        onClose={() => setViewerSrc(null)}
      />
    </>
  );
}
