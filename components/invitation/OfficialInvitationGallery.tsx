"use client";

import { useState } from "react";
import Image from "next/image";
import ImageViewer from "@/components/media/ImageViewer";
import type { LocaleContent } from "@/content/types";
import styles from "./OfficialInvitationGallery.module.css";

interface GalleryImages {
  front: string;
  programme: string;
  seva: string;
  prabhupadaPanel: string;
}

interface Props {
  content: LocaleContent["officialInvitation"];
  images: GalleryImages;
}

export default function OfficialInvitationGallery({ content, images }: Props) {
  const [viewerSrc, setViewerSrc] = useState<string | null>(null);
  const [viewerAlt, setViewerAlt] = useState("");

  const srcList = [images.front, images.programme, images.seva];

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
            {content.heading}
          </h2>

          <div className={styles.grid}>
            {content.items.map((item, idx) => {
              const src = srcList[idx];
              return (
                <div key={src} className={styles.card}>
                  <button
                    className={styles.imgBtn}
                    onClick={() => openViewer(src, item.alt)}
                    aria-label={`${content.viewFullLabel}: ${item.caption}`}
                  >
                    <div className={styles.imgWrap}>
                      <Image
                        src={src}
                        alt={item.alt}
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw, 380px"
                        className={styles.img}
                        loading="lazy"
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                  </button>
                  <div className={styles.cardFooter}>
                    <p className={styles.caption}>{item.caption}</p>
                    <div className={styles.cardActions}>
                      <button
                        className={styles.cardActionBtn}
                        onClick={() => openViewer(src, item.alt)}
                      >
                        {content.viewFullLabel}
                      </button>
                      <a
                        href={src}
                        download
                        className={styles.cardActionBtn}
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

          <div className={styles.founder}>
            <div className={styles.founderImg}>
              <Image
                src={images.prabhupadaPanel}
                alt="His Divine Grace A.C. Bhaktivedanta Swami Prabhupada – Founder-Acharya of ISKCON"
                fill
                className={styles.founderImgEl}
                loading="lazy"
                sizes="320px"
              />
            </div>
            <div className={styles.founderText}>
              <p className={styles.founderName}>{content.founderName}</p>
              <p className={styles.founderRole}>{content.founderRole}</p>
            </div>
          </div>
        </div>
      </section>

      <ImageViewer
        src={viewerSrc ?? ""}
        alt={viewerAlt}
        open={viewerSrc !== null}
        onClose={() => setViewerSrc(null)}
        downloadLabel={content.downloadLabel}
        downloadSrc={viewerSrc ?? ""}
      />
    </>
  );
}
