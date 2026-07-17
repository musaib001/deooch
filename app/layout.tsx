import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Deooch - Done-For-You AI Automation Agency for Any Business Process",
  description: "Save hours of manual work with done-for-you AI automation. Invoicing, marketing & sales ops, logistics, or any custom workflow—automated.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Deooch",
    url: SITE,
    title: "Deooch — Done-For-You AI Automation Agency",
    description: "Berlin-based, GDPR-compliant AI automation agency for SMBs. We build AI agents that run invoicing, marketing, operations, or any custom workflow. Clients save 28+ hours/month at 99%+ accuracy.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deooch — AI Automation Agency for SMBs",
    description: "Berlin-based, GDPR-compliant AI automation agency. Any repetitive workflow, automated. Save 28+ hours/month at 99%+ accuracy.",
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
        "Berlin-based, GDPR-compliant AI automation agency for SMBs — invoicing, marketing & sales ops, logistics documents, healthcare admin, and any custom workflow.",
      areaServed: "EU",
      address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
      sameAs: ["https://www.linkedin.com/in/musaib-khan/"],
      founder: { "@id": `${SITE}/#founder` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#founder`,
      name: "Musaib Khan",
      jobTitle: "Founder & CEO",
      worksFor: { "@id": `${SITE}/#organization` },
      url: `${SITE}/about`,
      sameAs: ["https://www.linkedin.com/in/musaib-khan/"],
      knowsAbout: [
        "AI automation",
        "business process automation",
        "invoice processing",
        "marketing automation",
        "workflow automation",
        "document digitization",
      ],
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
        <Analytics />
      </body>
    </html>
  );
}
