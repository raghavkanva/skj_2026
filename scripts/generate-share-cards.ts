import { chromium, type Browser } from "playwright";
import path from "path";

const SCALE = 4; // 4K quality (4320 px wide)

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
  // Tall viewport so the full card is always visible before we clip
  const page = await browser.newPage({
    viewport: { width: 1080, height: 4000 },
    deviceScaleFactor: SCALE,
  });

  console.log(`Opening ${url} ...`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

  // Wait for all images to load
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

  await page.waitForTimeout(2000);

  // Measure card bounds precisely (logical pixels)
  const box = await page.evaluate(() => {
    const el = document.querySelector("[data-card]");
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: r.left, y: r.top, width: r.width, height: r.height };
  });

  if (!box) {
    console.error("Could not find [data-card] element — falling back to fullPage");
    await page.screenshot({ path: outPath, fullPage: true, type: "jpeg", quality: 100 });
  } else {
    console.log(`Card bounds: ${Math.round(box.width)}×${Math.round(box.height)} logical px`);
    await page.screenshot({
      path: outPath,
      clip: { x: box.x, y: box.y, width: box.width, height: box.height },
      type: "jpeg",
      quality: 100,
    });
  }

  await page.close();
  console.log(`Done: ${outRel}`);
}

async function main() {
  const args = process.argv.slice(2);
  const jobs = args.length
    ? JOBS.filter((j) => args.some((a) => j.url.includes(a)))
    : JOBS;

  console.log(`Launching Chromium at ${SCALE}x scale... (${jobs.length} card${jobs.length === 1 ? "" : "s"})`);
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
