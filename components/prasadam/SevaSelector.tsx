"use client";

import { useState } from "react";
import { sevaOptions, PLATE_COST } from "@/data/sevaData";
import { formatINR } from "@/lib/formatCurrency";
import type { SevaOption } from "@/types/seva";
import styles from "./SevaSelector.module.css";

interface SevaSelectorProps {
  onSelectionChange: (selected: SevaOption[]) => void;
  customPlates: number;
  onCustomChange: (plates: number) => void;
  customHeading?: string;
  customInputLabel?: string;
  customHelper?: string;
  customValidation?: string;
}

export default function SevaSelector({
  onSelectionChange,
  customPlates,
  onCustomChange,
  customHeading,
  customInputLabel,
  customHelper,
  customValidation,
}: SevaSelectorProps) {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  function toggle(amount: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(amount)) {
        next.delete(amount);
      } else {
        next.add(amount);
      }
      const selectedOpts = sevaOptions.filter((o) => next.has(o.amount));
      onSelectionChange(selectedOpts);
      return next;
    });
  }

  function handleCustomInput(val: string) {
    setInputValue(val);
    if (val === "") {
      setError("");
      onCustomChange(0);
      return;
    }
    const num = parseInt(val, 10);
    if (isNaN(num) || num <= 0) {
      setError("Please enter a valid number of plates.");
      onCustomChange(0);
    } else if (num < 50) {
      setError(customValidation || "Minimum 50 plates for custom seva.");
      onCustomChange(0);
    } else {
      setError("");
      onCustomChange(num);
    }
  }

  return (
    <div>
      <div className={styles.grid} role="group" aria-label="Select prasadam seva options">
        {sevaOptions.map((opt) => {
          const active = selected.has(opt.amount);
          return (
            <button
              key={opt.amount}
              onClick={() => toggle(opt.amount)}
              aria-pressed={active}
              className={`${styles.card} ${active ? styles.active : ""}`}
            >
              <span
                className={`${styles.check} ${active ? styles.checkActive : ""}`}
                aria-hidden="true"
              >
                {active && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <p className={styles.plates}>
                {opt.plates.toLocaleString("en-IN")} Plates
              </p>
              <p className={styles.amount}>{formatINR(opt.amount)}</p>
            </button>
          );
        })}
      </div>

      <div className={styles.customCard}>
        <label htmlFor="custom-plates" className={styles.customLabel}>
          {customInputLabel || `Custom Seva (min. 50 plates, ${formatINR(PLATE_COST)}/plate)`}
        </label>
        <div className={styles.customInputRow}>
          <input
            id="custom-plates"
            type="number"
            inputMode="numeric"
            min="50"
            step="1"
            placeholder="Enter number of plates"
            value={inputValue}
            onChange={(e) => handleCustomInput(e.target.value)}
            className={`${styles.customInput} ${error ? styles.inputError : ""}`}
            aria-describedby={error ? "custom-error" : undefined}
          />
          {customPlates >= 50 && (
            <span className={styles.customCalc}>
              = {formatINR(customPlates * PLATE_COST)}
            </span>
          )}
        </div>
        {error && (
          <p id="custom-error" className={styles.errorMsg} role="alert">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
