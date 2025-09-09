import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import Preloader from "@/components/Preloader";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://growsavoir.com'),
  title: {
    default: "GrowSavoir - Plateforme Éducative Islamique Moderne",
    template: "%s | GrowSavoir"
  },
  description: "Plateforme éducative moderne pour l'apprentissage des langues (arabe, français, anglais), sciences, mathématiques et sciences islamiques. Cours structurés pour tous les âges avec approche progressive et ludique.",
  keywords: [
    "éducation islamique", "apprentissage arabe", "cours en ligne", "sciences islamiques",
    "mathématiques", "langue française", "anglais", "fiqh", "aqida", "sira", "histoire islamique",
    "plateforme éducative", "cours gratuits", "apprentissage progressif", "enfants", "adolescents"
  ],
  authors: [{ name: "GrowSavoir Team" }],
  creator: "GrowSavoir",
  publisher: "GrowSavoir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: { 
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }]
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "GrowSavoir - Plateforme Éducative Islamique Moderne",
    description: "Plateforme éducative moderne pour l'apprentissage des langues, sciences et sciences islamiques. Cours structurés pour tous les âges.",
    type: "website",
    locale: "fr_FR",
    url: "https://growsavoir.com",
    siteName: "GrowSavoir",
    images: [
      {
        url: "/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "GrowSavoir - Plateforme Éducative Islamique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowSavoir - Plateforme Éducative Islamique Moderne",
    description: "Plateforme éducative moderne pour l'apprentissage des langues, sciences et sciences islamiques.",
    images: ["/og-homepage.jpg"],
    creator: "@growsavoir",
    site: "@growsavoir",
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
    google: 'your-google-verification-code', // À remplacer par votre code
  },
  alternates: {
    canonical: "https://growsavoir.com",
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
        <ThemeProvider>
          <NextAuthProvider>
            <Preloader>
              <Navigation />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
            </Preloader>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
