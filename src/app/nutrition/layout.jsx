const BASE_URL = "https://kingdom-movement.vercel.app";

export const metadata = {
  title: "Nutrition Menu",
  description:
    "Elevate your fitness journey with our exceptional range of nutrition products, including invigorating teas, powerful mega-teas, premium protein shakes, and unique specialty items, all designed to fuel your body and enhance your performance.",
  keywords: [
    "nutrition menu",
    "protein shakes",
    "fitness nutrition",
    "pre-workout drinks",
    "post-workout nutrition",
    "healthy shakes",
    "Kingdom Movement nutrition",
  ],
  alternates: {
    canonical: "/nutrition",
  },
  openGraph: {
    title: "Nutrition Menu | Kingdom Movement",
    description:
      "Elevate your fitness journey with our exceptional range of nutrition products, including invigorating teas, powerful mega-teas, premium protein shakes, and unique specialty items.",
    url: `${BASE_URL}/nutrition`,
    images: [
      {
        url: `${BASE_URL}/images/nutrition.jpeg`,
        width: 1200,
        height: 630,
        alt: "Kingdom Movement Nutrition Menu",
      },
    ],
  },
};

export default function NutritionLayout({ children }) {
  return <>{children}</>;
}
