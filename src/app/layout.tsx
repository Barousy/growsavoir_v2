import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { NextAuthProvider } from "@/components/NextAuthProvider";

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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "GrowSavoir - Site Éducatif Islamique Moderne",
    description: "Apprentissage ludique et structuré en langues, sciences, mathématiques et sciences islamiques",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GrowSavoir - Site Éducatif Islamique Moderne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowSavoir - Site Éducatif Islamique Moderne',
    description: 'Apprentissage ludique et structuré en langues, sciences, mathématiques et sciences islamiques',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <Navigation />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
