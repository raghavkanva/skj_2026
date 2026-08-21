"use client";

import Image from "next/image";
import QRCodeBlock from "./QRCodeBlock";
import { buildBaseUpiUri, buildUpiUriWithAmount } from "@/lib/upi";
import { formatINR } from "@/lib/formatCurrency";
import { eventData } from "@/data/eventData";
import type { LocaleContent } from "@/content/types";
import styles from "./DonationSection.module.css";

interface DonationSectionProps {
  totalPlates: number;
  totalAmount: number;
  content: LocaleContent["donationSection"];
}

function buildWhatsAppUrl(totalAmount: number): string {
  let message =
    "Hare Krishna. I have offered Prasadam Seva for Sri Krishna Janmashtami 2026.";
  if (totalAmount > 0) {
    message += ` Seva Amount: ${formatINR(totalAmount)}.`;
  }
  return `https://wa.me/919710772621?text=${encodeURIComponent(message)}`;
}

export default function DonationSection({
  totalPlates,
  totalAmount,
  content,
}: DonationSectionProps) {
  const requiresNetBanking = totalAmount > 100000;
  const upiUri =
    totalAmount > 0 ? buildUpiUriWithAmount(totalAmount) : buildBaseUpiUri();

  return (
    <section
      id="donation"
      className={styles.section}
      aria-labelledby="donation-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 id="donation-heading" className={styles.heading}>
            {content.heading}
          </h2>

          {totalPlates > 0 && (
            <div className={styles.summary}>
              <p className={styles.summaryLabel}>{content.selectedSevaLabel}</p>
              <p className={styles.summaryPlates}>
                {totalPlates.toLocaleString("en-IN")} Plates
              </p>
              <p className={styles.summaryAmount}>{formatINR(totalAmount)}</p>
            </div>
          )}

          {requiresNetBanking ? (
            <div className={styles.netBankingNote}>
              <p className={styles.netBankingTitle}>{content.netBankingTitle}</p>
              <p className={styles.netBankingBody}>{content.netBankingBody}</p>
            </div>
          ) : (
            <div id="qr-section" className={styles.qrRow}>
              <QRCodeBlock value={upiUri} />
              <div className={styles.officialQr}>
                <Image
                  src="/images/qr-crop.jpg"
                  alt="Official QR code for ISKCON Salem Prasadam Seva donation"
                  width={280}
                  height={470}
                  className={styles.officialQrImg}
                  loading="lazy"
                />
              </div>
            </div>
          )}

          <div className={styles.bankDetails}>
            <p className={styles.bankDetailsHeading}>{content.accountDetailsHeading}</p>
            <dl className={styles.dl}>
              <div className={styles.dlRow}>
                <dt>A/C Name</dt>
                <dd>ISKCON PRASADAM SEVA</dd>
              </div>
              <div className={styles.dlRow}>
                <dt>A/C No</dt>
                <dd>737101000040</dd>
              </div>
              <div className={styles.dlRow}>
                <dt>IFSC Code</dt>
                <dd>ICIC0007371</dd>
              </div>
              <div className={styles.dlRow}>
                <dt>Bank</dt>
                <dd>ICICI Bank</dd>
              </div>
              <div className={styles.dlRow}>
                <dt>Branch</dt>
                <dd>Salem</dd>
              </div>
              <div className={styles.dlRow}>
                <dt>UPI ID</dt>
                <dd>{eventData.upiId}</dd>
              </div>
            </dl>

            {content.noteLines.map((line, i) => (
              <p key={i} className={styles.note}>{line}</p>
            ))}

            <a
              href={buildWhatsAppUrl(totalAmount)}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary ${styles.waBtn}`}
            >
              {content.whatsappBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
