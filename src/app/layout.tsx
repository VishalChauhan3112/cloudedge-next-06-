import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

import "./globals.css";

const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CloudEdge — Next.js Redesign",
    template: "%s | CloudEdge",
  },
  description: "CloudEdge Tech Services website rebuilt with Next.js App Router.",
  openGraph: {
    title: "CloudEdge — Next.js Redesign",
    description: "Managed IT, cloud migration, and cybersecurity services.",
    url: siteUrl,
    siteName: "CloudEdge",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
