"use client";

import Image from "next/image";
import QRCodeBlock from "./QRCodeBlock";
import { buildBaseUpiUri, buildUpiUriWithAmount } from "@/lib/upi";
import { formatINR } from "@/lib/formatCurrency";
import { eventData } from "@/data/eventData";
import type { SevaOption } from "@/types/seva";
import styles from "./DonationSection.module.css";

interface DonationSectionProps {
  selectedOptions: SevaOption[];
  total: number;
}

function buildWhatsAppUrl(total: number): string {
  let message =
    "Hare Krishna. I have offered Prasadam Seva for Sri Krishna Janmashtami 2026. I am sharing the donation details here.";
  if (total > 0) {
    message += ` Selected Seva Amount: ${formatINR(total)}.`;
  }
  return `https://wa.me/919710772621?text=${encodeURIComponent(message)}`;
}

export default function DonationSection({
  selectedOptions,
  total,
}: DonationSectionProps) {
  const upiUri =
    total > 0 ? buildUpiUriWithAmount(total) : buildBaseUpiUri();

  function handleDonate() {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = upiUri;
    } else {
      const el = document.getElementById("qr-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      id="donation"
      className={styles.section}
      aria-labelledby="donation-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 id="donation-heading" className={styles.heading}>
            Prasadam Seva Details
          </h2>

          {selectedOptions.length > 0 && (
            <div className={styles.summary}>
              <h3 className={styles.summaryTitle}>Your Selected Seva</h3>
              <ul className={styles.summaryList}>
                {selectedOptions.map((o) => (
                  <li key={o.amount} className={styles.summaryItem}>
                    <span>
                      {o.plates.toLocaleString("en-IN")} Plates
                    </span>
                    <span>{formatINR(o.amount)}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.summaryTotal}>
                <span>Total Seva</span>
                <strong>{formatINR(total)}</strong>
              </div>
            </div>
          )}

          {total > 0 && (
            <p className={styles.selectedTotal}>
              Your selected seva total: {formatINR(total)}
            </p>
          )}

          <div className={styles.donateRow}>
            <button onClick={handleDonate} className="btn-red" aria-label="Donate now via UPI">
              Donate Now via UPI
            </button>
          </div>

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

          <div className={styles.bankDetails}>
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

            <p className={styles.note}>
              For your kind contribution, an appropriate gift and receipt will
              be provided.
            </p>
            <p className={styles.note}>
              After offering your seva, please WhatsApp the donation details
              to{" "}
              <strong>+91 {eventData.contact.displayPhone}</strong>.
            </p>

            <a
              href={buildWhatsAppUrl(total)}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary ${styles.waBtn}`}
            >
              Send Donation Details on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
