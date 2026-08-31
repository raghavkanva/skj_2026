import { chromium, type Browser } from "playwright";
import path from "path";

const JOBS = [
  {
    url: "http://localhost:3000/pdf/en-share-card",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-English-Share-Card.jpg",
  },
  {
    url: "http://localhost:3000/pdf/ta-share-card",
    out: "public/downloads/ISKCON-Salem-Janmashtami-2026-Tamil-Share-Card.jpg",
  },
];

async function generateOne(browser: Browser, url: string, outRel: string) {
  const outPath = path.resolve(process.cwd(), outRel);
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });

  console.log(`Opening ${url} ...`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

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

  await page.waitForTimeout(2500);

  console.log(`Writing JPG → ${outPath}`);
  await page.screenshot({
    path: outPath,
    fullPage: true,
    type: "jpeg",
    quality: 97,
  });

  await page.close();
  console.log(`Done: ${outRel}`);
}

async function main() {
  const args = process.argv.slice(2);
  const jobs = args.length
    ? JOBS.filter((j) => args.some((a) => j.url.includes(a)))
    : JOBS;

  console.log(`Launching Chromium... (${jobs.length} card${jobs.length === 1 ? "" : "s"})`);
  const browser = await chromium.launch({
    executablePath: "/opt/pw-browsers/chromium",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const job of jobs) {
    await generateOne(browser, job.url, job.out);
  }

  await browser.close();
  console.log("All share cards generated.");
}

main().catch((err) => {
  console.error("Share card generation failed:", err);
  process.exit(1);
});
