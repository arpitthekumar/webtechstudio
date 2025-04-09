import hardwareData from "@/app/lib/hardware.json";
import { notFound } from "next/navigation";
import HardwareDetailPage from "@/app/components/hardware/Hardware";

// ✅ SEO Metadata (like BlogPage)
export async function generateMetadata({ params }) {
  const product = hardwareData.products.find((p) => p.id === params.slug);
  if (!product) return { title: "Product Not Found | Web Tech Studio" };

  const productUrl = `https://webtechstudio.site/hardware/${product.id}`;

  return {
    title: `${product.name} | POS Hardware - WebTech Studio`,
    description: product.description,
    keywords: `${product.name}, Gym Hardware, POS Devices, WebTech Studio`,
    alternates: { canonical: productUrl },
    openGraph: {
      title: product.name,
      description: product.description,
      url: productUrl,
      type: "product",
      siteName: "WebTech Studio",
      images: [{ url: product.image, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image],
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.image,
        description: product.description,
        brand: {
          "@type": "Organization",
          name: "Web Tech Studio",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: product.price.replace(/[^\d]/g, ""),
          availability: "http://schema.org/InStock",
          url: productUrl,
        },
      }),
    },
  };
}

// ✅ Generate Static Params for all slugs
export function generateStaticParams() {
  return hardwareData.products.map((product) => ({ slug: product.id }));
}

// ✅ Render the Component (like BlogPage)
export default function Page({ params }) {
  const product = hardwareData.products.find((p) => p.id === params.slug);
  if (!product) return notFound();

  return <HardwareDetailPage product={product} />;
}
