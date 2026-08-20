"use client";

import { useState } from "react";
import { sevaOptions } from "@/data/sevaData";
import { formatINR } from "@/lib/formatCurrency";
import type { SevaOption } from "@/types/seva";
import styles from "./SevaSelector.module.css";

interface SevaSelectorProps {
  onSelectionChange: (selected: SevaOption[]) => void;
}

export default function SevaSelector({ onSelectionChange }: SevaSelectorProps) {
  const [selected, setSelected] = useState<Set<number>>(new Set());

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

  return (
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
  );
}
