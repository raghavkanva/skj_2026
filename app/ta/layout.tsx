import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISKCON Salem ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி 2026",
  description:
    "ISKCON Salem சார்பில் நடைபெறும் ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி 2026 கொண்டாட்டத்திற்கு தங்களையும் தங்கள் குடும்பத்தினரையும் அன்புடன் அழைக்கிறோம். வெள்ளிக்கிழமை, 4 செப்டம்பர் 2026, Sona College Ground, Salem.",
  openGraph: {
    type: "website",
    title: "ISKCON Salem ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி 2026",
    description:
      "வெள்ளிக்கிழமை, 4 செப்டம்பர் 2026 அன்று Sona College Ground, Salem-ல் நடைபெறும் ஜன்மாஷ்டமி கொண்டாட்டத்தில் கலந்து கொள்ளுங்கள்.",
    siteName: "ISKCON Salem",
    images: [{ url: "/images/og-image-ta.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://skj2026.vercel.app/ta",
  },
};

export default function TamilLayout({ children }: { children: React.ReactNode }) {
  return children;
}
