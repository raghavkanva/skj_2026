import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISKCON Salem श्री कृष्ण जन्माष्टमी 2026",
  description:
    "ISKCON Salem की ओर से श्री कृष्ण जन्माष्टमी 2026 के पावन उत्सव में आपको और आपके परिवार को सादर आमंत्रित किया जाता है। शुक्रवार, 4 सितंबर 2026, Sona College Ground, Salem।",
  openGraph: {
    type: "website",
    title: "ISKCON Salem श्री कृष्ण जन्माष्टमी 2026",
    description:
      "शुक्रवार, 4 सितंबर 2026 को Sona College Ground, Salem में होने वाले जन्माष्टमी उत्सव में सम्मिलित हों।",
    siteName: "ISKCON Salem",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://skj2026.vercel.app/hi",
  },
};

export default function HindiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
