const BASE_URL = "https://kingdom-movement.vercel.app";

export const metadata = {
  title: "Class Schedule",
  description:
    "Discover the perfect schedule to elevate your fitness journey. Each day offers unique activities designed to challenge and inspire you. Join us and unlock your potential through consistent movement and dedication.",
  keywords: [
    "CrossFit schedule",
    "gym class schedule",
    "fitness class times",
    "workout schedule",
    "Kingdom Movement schedule",
    "CrossFit classes Orlando",
  ],
  alternates: {
    canonical: "/schedule",
  },
  openGraph: {
    title: "Class Schedule | Kingdom Movement",
    description:
      "Discover the perfect schedule to elevate your fitness journey. Each day offers unique activities designed to challenge and inspire you.",
    url: `${BASE_URL}/schedule`,
    images: [
      {
        url: `${BASE_URL}/images/group3.jpg`,
        width: 1200,
        height: 630,
        alt: "Kingdom Movement Class Schedule",
      },
    ],
  },
};

export default function ScheduleLayout({ children }) {
  // Structured Data for Event Schedule
  const scheduleSchema = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: "Kingdom Movement",
    url: BASE_URL,
    description:
      "Discover the perfect schedule to elevate your fitness journey. Each day offers unique activities designed to challenge and inspire you.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scheduleSchema) }}
      />
      {children}
    </>
  );
}
