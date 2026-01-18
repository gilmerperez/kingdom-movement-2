import "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { Anton, Bebas_Neue, Roboto_Condensed } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const BASE_URL = "https://kingdom-movement.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Kingdom Movement | CrossFit & Fitness Training",
    template: "%s | Kingdom Movement",
  },
  description:
    "Kingdom Movement - Built for glory, born to move. Transform your life through fitness, community, and relentless spirit. Expert CrossFit training, nutrition coaching, and personalized wellness programs in Orlando, FL.",
  keywords: [
    "CrossFit",
    "fitness training",
    "Orlando gym",
    "nutrition coaching",
    "wellness programs",
    "CrossFit classes",
    "fitness community",
    "personal training",
    "Kingdom Movement",
  ],
  authors: [{ name: "Kingdom Movement" }],
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Kingdom Movement",
    title: "Kingdom Movement | CrossFit & Fitness Training",
    description:
      "Built for glory, born to move. Transform your life through fitness, community, and relentless spirit.",
    images: [
      {
        url: `${BASE_URL}/images/home1.jpg`,
        width: 1200,
        height: 630,
        alt: "Kingdom Movement CrossFit Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingdom Movement | CrossFit & Fitness Training",
    description:
      "Built for glory, born to move. Transform your life through fitness, community, and relentless spirit.",
    images: [`${BASE_URL}/images/home1.jpg`],
  },
  verification: {
    // Add Google Search Console verification code if available
    google: "3FTfHaZrjPjKogJbOTyhOila5U11Fj2l512M51iBOH0",
  },
};

export default function RootLayout({ children }) {
  // Structured Data (JSON-LD) for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Gym",
    name: "Kingdom Movement",
    description:
      "Built for glory, born to move. Transform your life through fitness, community, and relentless spirit. Expert CrossFit training, nutrition coaching, and personalized wellness programs in Orlando, FL.",
    url: BASE_URL,
    logo: `${BASE_URL}/logo-white.png`,
    image: `${BASE_URL}/images/home1.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orlando",
      addressRegion: "FL",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "kngdm.mvmnt.llc@gmail.com",
      contactType: "Customer Service",
    },
    sameAs: [],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Orlando",
    },
  };

  return (
    <>
      <html lang="en" className={`${anton.variable} ${bebasNeue.variable} ${robotoCondensed.variable}`}>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
        </head>
        <body>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </>
  );
}
