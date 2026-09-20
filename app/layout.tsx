import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import { Navbar, BottomNav } from "@/components/navbar";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://hidayatnur.site";
const SITE_NAME = "Hidayat Nur Hakim";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hidayat Nur Hakim — Full-Stack Developer & AI/LLM Enthusiast",
    template: "%s | Hidayat Nur Hakim",
  },
  description:
    "Hidayat Nur Hakim — Full-Stack Developer & AI/LLM Enthusiast. Top 20 Finalist LIDM 2025, Top 20 Capstone DBS 2025, Finalist Hackathon INFEST XI, 2nd Winner INFINITERA 1.0, Ex-AI Intern @ Diskominsa Aceh, Teaching Assistant @ Informatics USK. Specialized in React, Next.js, TypeScript, and cloud technologies.",
  keywords: [
    "Hidayat Nur Hakim",
    "Hidayat Nur Hakim portfolio",
    "Full-Stack Developer",
    "Software Engineer",
    "AI Engineer",
    "LLM Enthusiast",
    "React Developer",
    "Next.js Developer",
    "Web Developer Indonesia",
    "Informatics USK",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Hidayat Nur Hakim", url: SITE_URL }],
  creator: "Hidayat Nur Hakim",
  publisher: "Hidayat Nur Hakim",
  applicationName: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Hidayat Nur Hakim — Full-Stack Developer & AI/LLM Enthusiast",
    description:
      "Full-Stack Developer & AI/LLM Enthusiast. Top 20 Finalist LIDM 2025, Ex-AI Intern @ Diskominsa Aceh, Teaching Assistant @ Informatics USK. Building scalable web applications with React, Next.js & cloud technologies.",
    locale: "id_ID",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Hidayat Nur Hakim — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hidayat Nur Hakim — Full-Stack Developer & AI/LLM Enthusiast",
    description:
      "Full-Stack Developer & AI/LLM Enthusiast. Building scalable web applications with React, Next.js & cloud technologies.",
    images: ["/opengraph-image.png"],
    creator: "@Hidayattt24",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const messages = await getMessages();

  return (
    <html lang="en">
      <body className={`${dmSerif.variable} antialiased`}>
        <ClientProviders>
          <div className="min-h-screen bg-white flex items-start justify-center p-4 md:p-8 pt-8">
            <div className="w-full max-w-7xl flex gap-8">
              <Navbar />
              <main className="flex-1 min-w-0 pb-24 md:pb-8">{children}</main>
            </div>
          </div>
          <BottomNav />
        </ClientProviders>
      </body>
    </html>
  );
}
