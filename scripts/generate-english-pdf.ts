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

  // Scroll to bottom so every element is rendered, then wait for all images
  await page.evaluate(() =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" })
  );
  await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});

  // Wait for every <img> to finish loading
  await page.evaluate(() =>
    Promise.all(
      Array.from(document.querySelectorAll("img")).map(
        (img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              })
      )
    )
  );

  // Scroll back to top, then give fonts a moment
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(2000);

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
