import "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
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

export const metadata = {
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kingdom-movement.vercel.app/",
    siteName: "Kingdom Movement",
    title: "Kingdom Movement | CrossFit & Fitness Training",
    description:
      "Built for glory, born to move. Transform your life through fitness, community, and relentless spirit.",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={`${anton.variable} ${bebasNeue.variable} ${robotoCondensed.variable}`}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
