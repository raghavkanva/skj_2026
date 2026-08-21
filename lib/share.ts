import { siteLinks } from "./siteLinks";
import { formatINR } from "./formatCurrency";

export const shareConfig = {
  title: "ISKCON Salem Sri Krishna Janmashtami 2026",
  eventUrl: siteLinks.janmashtami2026,
  officialWebsite: siteLinks.officialWebsite,
  officialLinks: siteLinks.officialLinks,
};

const BASE_MESSAGE = `Hare Krishna! 🙏

ISKCON Salem warmly invites you and your family to join the Sri Krishna Janmashtami celebrations on Friday, 4 September 2026 at Sona College Ground, Salem.

The celebration will include darshan, arati, kirtan, Krishna katha, cultural programmes, Maha Abhisheka and feast prasadam.

We would be very happy to have you and your family with us on this auspicious day.

📅 Friday, 4 September 2026
⏰ From 8:00 AM
📍 Sona College Ground, Salem`;

const LINKS_BLOCK = `Janmashtami 2026 Event Website:
${siteLinks.janmashtami2026}

ISKCON Salem Official Website:
${siteLinks.officialWebsite}

Official Links, YouTube, WhatsApp & Facebook:
${siteLinks.officialLinks}

Please share this invitation with your family and friends.

Hare Krishna! 🙏`;

export function buildShareMessageWithImages(): string {
  return `${BASE_MESSAGE}

Please find the official Janmashtami invitation, programme and prasadam seva details attached.

${LINKS_BLOCK}`;
}

export function buildShareMessageWithoutImages(): string {
  return `${BASE_MESSAGE}

${LINKS_BLOCK}`;
}

export function buildWhatsAppShareUrl(): string {
  return `https://wa.me/?text=${encodeURIComponent(buildShareMessageWithoutImages())}`;
}

export function buildWhatsAppContactUrl(total?: number): string {
  let message =
    "Hare Krishna. I have offered Prasadam Seva for Sri Krishna Janmashtami 2026. I am sharing the donation details here.";
  if (total && total > 0) {
    message += ` Selected Seva Amount: ${formatINR(total)}.`;
  }
  return `https://wa.me/919710772621?text=${encodeURIComponent(message)}`;
}

export const officialImages = [
  {
    src: "/images/invitation-front-full.jpg",
    filename: "ISKCON-Salem-Janmashtami-2026-Front.jpg",
    alt: "Official ISKCON Salem Sri Krishna Janmashtami 2026 front invitation",
    caption: "Front Invitation",
  },
  {
    src: "/images/invitation-programme.jpg",
    filename: "ISKCON-Salem-Janmashtami-2026-Programme.jpg",
    alt: "ISKCON Salem Janmashtami 2026 programme schedule",
    caption: "Full-Day Programme",
  },
  {
    src: "/images/invitation-seva.jpg",
    filename: "ISKCON-Salem-Janmashtami-2026-Prasadam-Seva.jpg",
    alt: "ISKCON Salem Janmashtami 2026 Prasadam Seva and donation details",
    caption: "Prasadam Seva Details",
  },
];

export async function shareWithImages(): Promise<"success" | "fallback" | "error"> {
  try {
    if (!navigator.share) return "fallback";

    const response = await fetch(officialImages[0].src);
    if (!response.ok) return "fallback";

    const files = await Promise.all(
      officialImages.map(async (img) => {
        const res = await fetch(img.src);
        const blob = await res.blob();
        return new File([blob], img.filename, { type: blob.type });
      })
    );

    if (!navigator.canShare?.({ files })) return "fallback";

    await navigator.share({
      title: shareConfig.title,
      text: buildShareMessageWithImages(),
      files,
    });

    return "success";
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") return "success";
    return "error";
  }
}
