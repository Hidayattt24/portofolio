import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import { Navbar } from "@/components/navbar";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hidayat Nur Hakim - Portfolio",
  description: "Full-Stack Developer | AI & LLM Enthusiast",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>
            <div className="min-h-screen bg-white flex items-start justify-center p-4 md:p-8 pt-8">
              <div className="w-full max-w-7xl flex gap-8">
                <Navbar />
                <main className="flex-1 pb-20">
                  {children}
                </main>
              </div>
            </div>
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
