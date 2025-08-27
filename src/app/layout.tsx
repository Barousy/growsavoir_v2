import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrowSavoir - Site Éducatif Islamique Moderne",
  description: "Apprentissage ludique et structuré en langues, sciences, mathématiques et sciences islamiques",
  keywords: ["éducation", "islam", "arabe", "sciences", "mathématiques", "apprentissage"],
  authors: [{ name: "GrowSavoir Team" }],
  openGraph: {
    title: "GrowSavoir - Site Éducatif Islamique Moderne",
    description: "Apprentissage ludique et structuré en langues, sciences, mathématiques et sciences islamiques",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
