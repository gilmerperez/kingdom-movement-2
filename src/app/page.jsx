import styles from "./page.module.css";
import Banner from "../components/Banner/Banner";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import OurMission from "../components/OurMission/OurMission";
import Coaches from "../components/Coaches/Coaches";
import WhyUs from "../components/WhyUs/WhyUs";
import Nutrition from "../components/Nutrition/Nutrition";
import HomeCTA from "../components/HomeCTA/HomeCTA";

const BASE_URL = "https://kingdom-movement.vercel.app";

export const metadata = {
  title: "Home",
  description:
    "Kingdom Movement - Built for glory, born to move. Transform your life through fitness, community, and relentless spirit. Expert CrossFit training, nutrition coaching, and personalized wellness programs in Orlando, FL.",
  keywords: [
    "CrossFit Orlando",
    "fitness training",
    "gym Orlando",
    "nutrition coaching",
    "wellness programs",
    "CrossFit classes",
    "fitness community",
    "personal training",
    "Kingdom Movement",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home | Kingdom Movement",
    description:
      "Kingdom Movement - Built for glory, born to move. Transform your life through fitness, community, and relentless spirit.",
    url: BASE_URL,
  },
};

export default function Home() {
  // Structured Data for Homepage (BreadcrumbList and WebSite)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kingdom Movement",
    url: BASE_URL,
    description:
      "Built for glory, born to move. Transform your life through fitness, community, and relentless spirit.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/nutrition?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Banner */}
      <Banner
        imageSrc="/images/home1.jpg"
        text="BUILT FOR GLORY — BORN TO MOVE"
        secondaryText="EVERY PERSON IS TRAINED TO RISE — MENTALLY, PHYSICALLY, SPIRITUALLY"
      />

      <main>
        <div className={styles.homeContainer}>
          {/* Who we are */}
          <WhoWeAre />
          {/* Our mission */}
          <OurMission />
          {/* Coaches */}
          <Coaches />
          {/* Why us */}
          <WhyUs />
          {/* Nutrition */}
          <Nutrition />
          {/* CTA component */}
          <HomeCTA />
        </div>
      </main>
    </>
  );
}
