import { chromium, type Browser } from "playwright";
import path from "path";

const JOBS = [
  {
    url: "http://localhost:3000/pdf/en",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-English.pdf",
  },
  {
    url: "http://localhost:3000/pdf/ta",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-Tamil.pdf",
  },
  {
    url: "http://localhost:3000/pdf/en-invite",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-English-Invitation.pdf",
  },
  {
    url: "http://localhost:3000/pdf/en-text",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-English-Text-Invitation.pdf",
  },
  {
    url: "http://localhost:3000/pdf/ta-invite",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-Tamil-Invitation.pdf",
  },
  {
    url: "http://localhost:3000/pdf/ta-text",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-Tamil-Text-Invitation.pdf",
  },
  {
    url: "http://localhost:3000/pdf/qr-pass",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-QR-Pass-Information.pdf",
  },
  {
    url: "http://localhost:3000/pdf/qr-pass-plain",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-QR-Pass-Information-Plain.pdf",
  },
  {
    url: "http://localhost:3000/pdf/en-invite-plain",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-English-Invitation-Plain.pdf",
  },
  {
    url: "http://localhost:3000/pdf/ta-invite-plain",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-Tamil-Invitation-Plain.pdf",
  },
];

async function generateOne(browser: Browser, url: string, outRel: string) {
  const outPath = path.resolve(process.cwd(), outRel);
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });

  console.log(`Opening ${url} ...`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

  // Scroll to bottom so every element is rendered
  await page.evaluate(() =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" })
  );
  await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});

  // Wait for every <img> to finish decoding
  await page.evaluate(() =>
    Promise.all(
      Array.from(document.querySelectorAll("img")).map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            })
      )
    )
  );

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(2000);

  console.log(`Writing PDF → ${outPath}`);
  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
    margin: { top: "0", bottom: "0", left: "0", right: "0" },
  });

  await page.close();
  console.log(`Done: ${outRel}`);
}

async function main() {
  // Which jobs to run: pass route slugs as CLI args, or run all
  const args = process.argv.slice(2);
  const jobs = args.length
    ? JOBS.filter((j) => args.some((a) => j.url.includes(a)))
    : JOBS;

  console.log(`Launching Chromium... (${jobs.length} PDF${jobs.length === 1 ? "" : "s"})`);
  const browser = await chromium.launch({
    executablePath: "/opt/pw-browsers/chromium",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const job of jobs) {
    await generateOne(browser, job.url, job.out);
  }

  await browser.close();
  console.log("All PDFs generated.");
}

main().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
