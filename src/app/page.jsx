import styles from "./page.module.css";
import Banner from "../components/Banner/Banner";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import OurMission from "../components/OurMission/OurMission";
import Coaches from "../components/Coaches/Coaches";
import WhyUs from "../components/WhyUs/WhyUs";
import Nutrition from "../components/Nutrition/Nutrition";
import HomeCTA from "../components/HomeCTA/HomeCTA";

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
};

export default function Home() {
  return (
    <>
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
