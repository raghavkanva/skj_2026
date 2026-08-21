import type { Locale } from "@/content/types";

interface ImageSet {
  invitationFront: string;
  programme: string;
  seva: string;
  dressContest: string;
  prabhupadaPanel: string;
  ogImage: string;
}

export const localizedImages: Record<Locale, ImageSet> = {
  en: {
    invitationFront: "/images/invitation-front-full.jpg",
    programme: "/images/invitation-programme.jpg",
    seva: "/images/invitation-seva.jpg",
    dressContest: "/images/dress-contest.jpg",
    prabhupadaPanel: "/images/prabhupada-panel.jpg",
    ogImage: "/images/og-image.jpg",
  },
  ta: {
    invitationFront: "/images/invitation-front-full-ta.jpg",
    programme: "/images/invitation-programme-ta.jpg",
    seva: "/images/invitation-seva-ta.jpg",
    dressContest: "/images/dress-contest-ta.jpg",
    prabhupadaPanel: "/images/prabhupada-panel-ta.jpg",
    ogImage: "/images/og-image-ta.jpg",
  },
  hi: {
    invitationFront: "/images/invitation-front-full.jpg",
    programme: "/images/invitation-programme.jpg",
    seva: "/images/invitation-seva.jpg",
    dressContest: "/images/dress-contest.jpg",
    prabhupadaPanel: "/images/prabhupada-panel.jpg",
    ogImage: "/images/og-image.jpg",
  },
};

export const sharedQrImage = "/images/qr-crop.jpg";
