import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteData } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: siteData.name,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  keywords: ['apartmány Šumava', 'ubytování Prášily', 'ubytování Železná Ruda', 'apartmán Šumava', 'dovolená Šumava'],
  authors: [{ name: siteData.name }],
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    siteName: siteData.name,
    title: siteData.name,
    description: siteData.description,
  },
  metadataBase: new URL('https://www.sumava-apartmany.cz'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
