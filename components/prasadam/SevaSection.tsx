"use client";

import { useState, useCallback } from "react";
import SevaSelector from "./SevaSelector";
import DonationSection from "./DonationSection";
import { formatINR } from "@/lib/formatCurrency";
import type { SevaOption } from "@/types/seva";
import styles from "./SevaSection.module.css";

export default function SevaSection() {
  const [selectedOptions, setSelectedOptions] = useState<SevaOption[]>([]);

  const total = selectedOptions.reduce((sum, o) => sum + o.amount, 0);

  const handleChange = useCallback((opts: SevaOption[]) => {
    setSelectedOptions(opts);
  }, []);

  return (
    <>
      <section
        id="seva"
        className={styles.section}
        aria-labelledby="seva-heading"
      >
        <div className="container">
          <div className={styles.inner}>
            <h2 id="seva-heading" className={styles.heading}>
              Offer Prasadam Seva
            </h2>
            <p className={styles.desc}>
              On Sri Krishna Janmashtami, you may also participate by helping
              us serve prasadam to the devotees attending the celebration.
            </p>
            <p className={styles.cost}>
              The seva for one prasadam plate is{" "}
              <strong>&#8377;50</strong>.
            </p>

            <SevaSelector onSelectionChange={handleChange} />

            {total > 0 && (
              <div className={styles.totalRow}>
                <span>Total Seva Amount:</span>
                <strong>{formatINR(total)}</strong>
              </div>
            )}

            <div className={styles.ctaRow}>
              <a href="#donation" className="btn-primary">
                I Would Like to Offer Seva
              </a>
            </div>
          </div>
        </div>
      </section>

      <DonationSection selectedOptions={selectedOptions} total={total} />
    </>
  );
}
