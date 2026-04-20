import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eugene Leow — Fractional SEO Consultant",
  description:
    "Digital name card for Eugene Leow — Fractional SEO Consultant, Managing Director at Marketing Agency Singapore.",
  openGraph: {
    title: "Eugene Leow — Fractional SEO Consultant",
    description:
      "Fractional SEO Consultant · Enterprise Sales & Account Management · Singapore",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eugene Leow — Fractional SEO Consultant",
    description:
      "Fractional SEO Consultant · Enterprise Sales & Account Management · Singapore",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
