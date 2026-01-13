"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "../../components/Banner/Banner";
import nutritionData from "../../data/nutrition.json";
import Image from "next/image";

export default function Nutrition() {
  const router = useRouter();

  // * Get all categories for filter buttons
  const categories = [{ id: "all", name: "All Items" }, ...nutritionData.categories];

  // * State for managing selected category filter
  const [selectedCategory, setSelectedCategory] = useState("all");

  // * Filter menu items based on selected category
  const filteredMenuItems =
    selectedCategory === "all"
      ? nutritionData.menuItems
      : nutritionData.menuItems.filter((item) => item.category === selectedCategory);

  // * Get the appropriate introduction text based on selected category
  const getIntroductionText = () => {
    // Get the appropriate introduction text
    if (selectedCategory === "all") {
      return "Elevate your fitness journey with our exceptional range of nutrition products, including invigorating teas, powerful mega-teas, premium protein shakes, and unique specialty items, all designed to fuel your body and enhance your performance.";
    }
    // Get the appropriate category data
    const selectedCategoryData = nutritionData.categories.find((category) => category.id === selectedCategory);
    // Return the appropriate introduction text
    return selectedCategoryData
      ? selectedCategoryData.description
      : "Fuel your workouts with our premium nutrition offerings";
  };

  // * Handle category filter selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // * Handle menu item click
  const handleMenuItemClick = (itemId) => {
    router.push(`/nutrition/${itemId}`);
  };

  // * Function to truncate text with ellipsis
  const truncateText = (text, maxLength = 80) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <>
      {/* Banner */}
      <Banner
        imageSrc="/images/gym.jpg"
        text="STRENGTH. SPIRIT. KINGDOM"
        secondaryText="BODIES, MINDS, AND LIVES. WE CHANGE LIVES THROUGH CHALLENGE AND CONSISTENCY"
      />

      <main>
        <div className={styles.nutritionContainer}>
          {/* Introduction */}
          <section className={styles.nutritionIntroduction}>
            {/* Title */}
            <h1 className={styles.nutritionTitle}>NUTRITION MENU</h1>
            {/* Description */}
            <p className={styles.nutritionDescription}>{getIntroductionText()}</p>
          </section>

          {/* Category filters */}
          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`${styles.filterButton} ${selectedCategory === category.id ? styles.activeFilter : ""}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <div className={styles.menuGrid}>
            {filteredMenuItems.map((item) => (
              // Individual menu item
              <div key={item.id} className={styles.menuCard} onClick={() => handleMenuItemClick(item.id)}>
                {/* Food image */}
                <div className={styles.imageContainer}>
                  <Image
                    alt={item.name}
                    src={item.imagePath}
                    fill
                    className={styles.foodImage}
                    onError={(e) => {
                      // Fallback for missing images
                      e.target.style.display = "none";
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = "block";
                      }
                    }}
                  />
                  <div className={styles.imagePlaceholder}>
                    <span>{item.name} Image</span>
                  </div>
                </div>
                {/* Food details */}
                <div className={styles.foodDetails}>
                  <h3 className={styles.foodName}>{item.name}</h3>
                  <p className={styles.foodDescription}>{truncateText(item.description)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* If no items are found in the category */}
          {filteredMenuItems.length === 0 && (
            <div className={styles.emptyState}>
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
