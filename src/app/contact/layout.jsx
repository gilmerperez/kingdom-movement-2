const BASE_URL = "https://kingdom-movement.vercel.app";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Kingdom Movement. Whether you're exploring business opportunities, potential sponsorships, community partnerships, or have questions about our programs — we'd love to connect with you.",
  keywords: [
    "contact Kingdom Movement",
    "CrossFit Orlando contact",
    "fitness gym contact",
    "Kingdom Movement email",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Kingdom Movement",
    description:
      "Get in touch with Kingdom Movement. Whether you're exploring business opportunities, potential sponsorships, community partnerships, or have questions about our programs — we'd love to connect with you.",
    url: `${BASE_URL}/contact`,
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
