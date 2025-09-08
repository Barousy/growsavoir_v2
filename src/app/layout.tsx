import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import { cookies } from "next/headers";
import { defaultLocale, isRtl, Locale, locales } from "@/i18n/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "GrowSavoir - Site Éducatif Islamique Moderne",
  description: "Apprentissage ludique et structuré en langues, sciences, mathématiques et sciences islamiques",
  keywords: ["éducation", "islam", "arabe", "sciences", "mathématiques", "apprentissage"],
  authors: [{ name: "GrowSavoir Team" }],
  icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }] },
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('locale')?.value as Locale | undefined
  const locale = locales.includes(localeCookie as Locale) ? (localeCookie as Locale) : defaultLocale
  return (
    <html lang={locale} dir={isRtl(locale) ? 'rtl' : 'ltr'}>
      <body
        className="antialiased"
        style={{
          '--font-geist-sans': geistSans.variable,
          '--font-geist-mono': geistMono.variable,
        } as React.CSSProperties}
      >
        <NextAuthProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
