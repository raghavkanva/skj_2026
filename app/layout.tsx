import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#28396F",
};

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "ISKCON Salem",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: SITE_TITLE,
  description: SITE_DESCRIPTION,
  startDate: "2026-09-04T08:00:00+05:30",
  endDate: "2026-09-04T23:59:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Sona College Ground",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salem",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "ISKCON Salem",
    url: "https://iskconsalem.com",
  },
  isAccessibleForFree: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
