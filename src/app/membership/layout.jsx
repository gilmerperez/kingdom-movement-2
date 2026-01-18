const BASE_URL = "https://kingdom-movement.vercel.app";

export const metadata = {
  title: "Membership",
  description:
    "Choose the plan that fits your fitness journey. Each membership tier is designed to support your goals, whether you're just starting out or ready to push your limits. Join our community and transform your life through movement.",
  keywords: [
    "CrossFit membership",
    "gym membership Orlando",
    "fitness membership",
    "Kingdom Movement membership",
    "CrossFit pricing",
    "gym pricing Orlando",
  ],
  alternates: {
    canonical: "/membership",
  },
  openGraph: {
    title: "Membership | Kingdom Movement",
    description:
      "Choose the plan that fits your fitness journey. Each membership tier is designed to support your goals, whether you're just starting out or ready to push your limits.",
    url: `${BASE_URL}/membership`,
    images: [
      {
        url: `${BASE_URL}/images/home2.jpg`,
        width: 1200,
        height: 630,
        alt: "Kingdom Movement Membership Tiers",
      },
    ],
  },
};

export default function MembershipLayout({ children }) {
  // Structured Data for Service/Product
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fitness Training Membership",
    provider: {
      "@type": "Gym",
      name: "Kingdom Movement",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Orlando",
    },
    description:
      "Choose the plan that fits your fitness journey. Each membership tier is designed to support your goals, whether you're just starting out or ready to push your limits.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
