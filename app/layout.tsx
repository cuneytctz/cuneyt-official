import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cüneyt Tanrıverdi",
    template: "%s | Cüneyt Tanrıverdi",
  },

  description:
    "Official website of Cüneyt Tanrıverdi. Entrepreneur, founder of CTZ Group, sharing his business journey, projects, experiences and personal blog.",

  keywords: [
    "Cüneyt Tanrıverdi",
    "CTZ Group",
    "Kazakhstan",
    "Cold Storage",
    "Cold Room",
    "Entrepreneur",
    "Business",
    "Almaty",
    "Industrial Refrigeration",
  ],

  authors: [
    {
      name: "Cüneyt Tanrıverdi",
    },
  ],

  creator: "Cüneyt Tanrıverdi",

  openGraph: {
    title: "Cüneyt Tanrıverdi",
    description:
      "Entrepreneur • Founder of CTZ Group • Personal Website",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}