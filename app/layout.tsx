import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
