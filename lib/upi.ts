/**
 * The raw URI supplied by ISKCON Salem.
 *
 * Note: The supplied URI contains two `tr=` (transaction reference) parameters:
 *   tr=EZYSrasadam Seva Salem  (appears to be a partial/malformed value)
 *   tr=EZYS9655626108           (the intended transaction reference)
 *
 * Duplicate `tr` parameters may cause interoperability issues with some UPI
 * apps. This value is preserved exactly as supplied so the payment identity is
 * not silently altered. Replace with a corrected URI here when confirmed.
 */
export const RAW_UPI_URI =
  "upi://pay?pa=iskconpssalem@icici&pn=ISKCON Prasadam Seva Salem&tr=EZYSrasadam Seva Salem&tr=EZYS9655626108&cu=INR&mc=5411";

const BASE_PARAMS = {
  pa: "iskconpssalem@icici",
  pn: "ISKCON Prasadam Seva Salem",
  cu: "INR",
  mc: "5411",
  // Using the second (likely intended) transaction reference.
  // See note on RAW_UPI_URI above regarding duplicate tr values.
  tr: "EZYS9655626108",
} as const;

export function buildBaseUpiUri(): string {
  const params = new URLSearchParams(BASE_PARAMS);
  return `upi://pay?${params.toString()}`;
}

export function buildUpiUriWithAmount(amount: number): string {
  const params = new URLSearchParams({
    ...BASE_PARAMS,
    am: String(amount),
  });
  return `upi://pay?${params.toString()}`;
}
