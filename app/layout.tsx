import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE = "https://www.deooch.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Deooch - AI Automation for Business",
  description: "Save hours of manual work with AI-powered automation. Invoice processing, document scanning, data entry—automated.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Deooch",
    url: SITE,
    title: "Deooch — AI Automation for Invoices, Freight Docs & Healthcare",
    description: "Berlin-based, GDPR-compliant AI automation for SMBs. Clients save 28+ hours/month at 99%+ accuracy.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deooch — AI Automation for SMBs",
    description: "Berlin-based, GDPR-compliant AI automation. Save 28+ hours/month at 99%+ accuracy.",
  },
};

// Site-wide entity graph for search engines and AI answer engines.
const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Deooch",
      url: SITE,
      logo: `${SITE}/logo.png`,
      description:
        "Berlin-based, GDPR-compliant AI automation for SMBs — invoice processing, freight & shipping documents, and healthcare admin.",
      areaServed: "EU",
      address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Deooch",
      publisher: { "@id": `${SITE}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
