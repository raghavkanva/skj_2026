import { chromium } from "playwright";
import path from "path";

const PDF_URL = "http://localhost:3000/pdf/en";
const OUT_PATH = path.resolve(process.cwd(), "public/downloads/ISKCON-Salem-Janmashtami-2026-English.pdf");

async function generatePDF() {
  console.log("Launching Chromium...");
  const browser = await chromium.launch({
    executablePath: "/opt/pw-browsers/chromium",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage({
    viewport: { width: 794, height: 1123 },
  });

  console.log(`Opening ${PDF_URL} ...`);
  await page.goto(PDF_URL, { waitUntil: "networkidle", timeout: 60000 });

  // Wait for network to settle, then give fonts and images time to render
  await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);

  console.log(`Writing PDF to ${OUT_PATH} ...`);
  await page.pdf({
    path: OUT_PATH,
    format: "A4",
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
    margin: { top: "0", bottom: "0", left: "0", right: "0" },
  });

  await browser.close();
  console.log("PDF generated successfully.");
}

generatePDF().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
