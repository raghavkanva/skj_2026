"use client";

import QRCode from "react-qr-code";
import styles from "./QRCodeBlock.module.css";

interface QRCodeBlockProps {
  value: string;
}

export default function QRCodeBlock({ value }: QRCodeBlockProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.qr}>
        <QRCode
          value={value}
          size={200}
          bgColor="#ffffff"
          fgColor="#1a1a1a"
          level="M"
        />
      </div>
      <p className={styles.label}>Scan to offer Prasadam Seva</p>
    </div>
  );
}
