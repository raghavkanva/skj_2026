"use client";

import Image from "next/image";
import QRCodeBlock from "./QRCodeBlock";
import { buildBaseUpiUri, buildUpiUriWithAmount } from "@/lib/upi";
import { formatINR } from "@/lib/formatCurrency";
import { eventData } from "@/data/eventData";
import styles from "./DonationSection.module.css";

interface DonationSectionProps {
  totalPlates: number;
  totalAmount: number;
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
            Prasadam Seva Details
          </h2>

          {totalPlates > 0 && (
            <div className={styles.summary}>
              <p className={styles.summaryLabel}>Your Selected Seva</p>
              <p className={styles.summaryPlates}>
                {totalPlates.toLocaleString("en-IN")} Plates
              </p>
              <p className={styles.summaryAmount}>{formatINR(totalAmount)}</p>
            </div>
          )}

          {requiresNetBanking ? (
            <div className={styles.netBankingNote}>
              <p className={styles.netBankingTitle}>
                For amounts above &#8377;1,00,000, please use Net Banking or NEFT/RTGS.
              </p>
              <p className={styles.netBankingBody}>
                Please use the bank account details below to transfer the seva
                amount, then share the details with us on WhatsApp.
              </p>
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
              href={buildWhatsAppUrl(totalAmount)}
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
