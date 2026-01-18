import nutritionData from "../../../data/nutrition.json";

const BASE_URL = "https://kingdom-movement.vercel.app";

export async function generateMetadata({ params }) {
  const { itemId } = await params;
  const menuItem = nutritionData.menuItems.find((item) => item.id === itemId);

  if (!menuItem) {
    return {
      title: "Nutrition Item Not Found",
      description: "The requested nutrition item could not be found.",
    };
  }

  return {
    title: menuItem.name,
    description: menuItem.description,
    keywords: [
      menuItem.name,
      menuItem.category,
      "Kingdom Movement nutrition",
      "fitness nutrition",
      menuItem.category === "protein-shakes" ? "protein shake" : "",
      menuItem.category === "teas" ? "tea" : "",
      menuItem.category === "mega-teas" ? "mega tea" : "",
      menuItem.category === "specialty-items" ? "specialty item" : "",
    ].filter(Boolean),
    alternates: {
      canonical: `/nutrition/${itemId}`,
    },
    openGraph: {
      title: `${menuItem.name} | Kingdom Movement`,
      description: menuItem.description,
      url: `${BASE_URL}/nutrition/${itemId}`,
      images: [
        {
          url: `${BASE_URL}${menuItem.imagePath}`,
          width: 1200,
          height: 630,
          alt: menuItem.name,
        },
      ],
    },
  };
}

export default function NutritionItemLayout({ children }) {
  return <>{children}</>;
}
