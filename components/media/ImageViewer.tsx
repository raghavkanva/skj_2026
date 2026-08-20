"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ImageViewer.module.css";

interface ImageViewerProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

export default function ImageViewer({ src, alt, open, onClose }: ImageViewerProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        ref={closeBtnRef}
        className={styles.closeBtn}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close full screen view"
      >
        &times;
      </button>
      <div
        className={styles.imageWrap}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          sizes="100vw"
        />
      </div>
    </div>
  );
}
