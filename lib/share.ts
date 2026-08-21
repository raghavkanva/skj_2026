import { siteLinks } from "./siteLinks";
import { formatINR } from "./formatCurrency";

export const shareConfig = {
  title: "ISKCON Salem Sri Krishna Janmashtami 2026",
  eventUrl: siteLinks.janmashtami2026,
  officialWebsite: siteLinks.officialWebsite,
  officialLinks: siteLinks.officialLinks,
};

function buildBaseMessage(eventUrl: string): string {
  return `Hare Krishna! 🙏

ISKCON Salem warmly invites you and your family to join the Sri Krishna Janmashtami celebrations on Friday, 4 September 2026 at Sona College Ground, Salem.

The celebration will include darshan, arati, kirtan, Krishna katha, cultural programmes, Maha Abhisheka and feast prasadam.

We would be very happy to have you and your family with us on this auspicious day.

📅 Friday, 4 September 2026
⏰ From 8:00 AM
📍 Sona College Ground, Salem`;
}

function buildLinksBlock(eventUrl: string): string {
  return `Janmashtami 2026 Event Website:
${eventUrl}

ISKCON Salem Official Website:
${siteLinks.officialWebsite}

Official Links, YouTube, WhatsApp & Facebook:
${siteLinks.officialLinks}

Please share this invitation with your family and friends.

Hare Krishna! 🙏`;
}

export function buildShareMessageWithImages(eventUrl: string = siteLinks.janmashtami2026): string {
  return `${buildBaseMessage(eventUrl)}

Please find the official Janmashtami invitation, programme and prasadam seva details attached.

${buildLinksBlock(eventUrl)}`;
}

export function buildShareMessageWithoutImages(eventUrl: string = siteLinks.janmashtami2026): string {
  return `${buildBaseMessage(eventUrl)}

${buildLinksBlock(eventUrl)}`;
}

export function buildWhatsAppShareUrl(eventUrl: string = siteLinks.janmashtami2026): string {
  return `https://wa.me/?text=${encodeURIComponent(buildShareMessageWithoutImages(eventUrl))}`;
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

export async function shareWithImages(
  imageSrcs?: string[],
  eventUrl: string = siteLinks.janmashtami2026
): Promise<"success" | "fallback" | "error"> {
  try {
    if (!navigator.share) return "fallback";

    const srcs = imageSrcs ?? officialImages.map((i) => i.src);
    const filenames = officialImages.map((i) => i.filename);

    const response = await fetch(srcs[0]);
    if (!response.ok) return "fallback";

    const files = await Promise.all(
      srcs.map(async (src, idx) => {
        const res = await fetch(src);
        const blob = await res.blob();
        const name = filenames[idx] ?? `image-${idx + 1}.jpg`;
        return new File([blob], name, { type: blob.type });
      })
    );

    if (!navigator.canShare?.({ files })) return "fallback";

    await navigator.share({
      title: shareConfig.title,
      text: buildShareMessageWithImages(eventUrl),
      files,
    });

    return "success";
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") return "success";
    return "error";
  }
}
