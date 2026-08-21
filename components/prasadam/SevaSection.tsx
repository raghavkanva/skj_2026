"use client";

import { useState, useCallback } from "react";
import SevaSelector from "./SevaSelector";
import DonationSection from "./DonationSection";
import { formatINR } from "@/lib/formatCurrency";
import type { SevaOption } from "@/types/seva";
import type { LocaleContent } from "@/content/types";
import styles from "./SevaSection.module.css";

interface Props {
  sevaContent: LocaleContent["prasadamSeva"];
  donationContent: LocaleContent["donationSection"];
}

export default function SevaSection({ sevaContent, donationContent }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<SevaOption[]>([]);
  const [customPlates, setCustomPlates] = useState<number>(0);

  const presetPlates = selectedOptions.reduce((sum, o) => sum + o.plates, 0);
  const presetAmount = selectedOptions.reduce((sum, o) => sum + o.amount, 0);
  const customAmount = customPlates * 50;
  const totalPlates = presetPlates + customPlates;
  const totalAmount = presetAmount + customAmount;

  const handleChange = useCallback((opts: SevaOption[]) => {
    setSelectedOptions(opts);
  }, []);

  const handleCustomChange = useCallback((plates: number) => {
    setCustomPlates(plates);
  }, []);

  return (
    <>
      <section
        id="prasadam-seva"
        className={styles.section}
        aria-labelledby="seva-heading"
      >
        <div className="container">
          <div className={styles.inner}>
            <h2 id="seva-heading" className={styles.heading}>
              {sevaContent.heading}
            </h2>
            <p className={styles.desc}>{sevaContent.desc}</p>
            <p className={styles.cost}>
              {sevaContent.costHighlight}
            </p>

            <SevaSelector
              onSelectionChange={handleChange}
              customPlates={customPlates}
              onCustomChange={handleCustomChange}
              customHeading={sevaContent.customHeading}
              customInputLabel={sevaContent.customInputLabel}
              customHelper={sevaContent.customHelper}
              customValidation={sevaContent.customValidation}
            />

            {totalPlates > 0 && (
              <div className={styles.summary}>
                <p className={styles.summaryLabel}>{sevaContent.summaryLabel}</p>
                <p className={styles.summaryPlates}>
                  {totalPlates.toLocaleString("en-IN")} Plates
                </p>
                <p className={styles.summaryAmount}>{formatINR(totalAmount)}</p>
              </div>
            )}

            <div className={styles.ctaRow}>
              <a href="#donation" className="btn-primary">
                {sevaContent.donateNow}
              </a>
            </div>
          </div>
        </div>
      </section>

      <DonationSection
        totalPlates={totalPlates}
        totalAmount={totalAmount}
        content={donationContent}
      />
    </>
  );
}
