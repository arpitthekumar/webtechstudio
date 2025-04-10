import { notFound } from "next/navigation";
import { hardwareData } from "@/app/lib/hardware";
import HardwareDetailPage from "@/app/Hardware/[slug]/component/hardwarepage/Hardwarepage";

// ✅ Get Product by Slug
async function getProduct(slug) {
  return hardwareData.products.find((p) => p.id === decodeURIComponent(slug));
}

// ✅ Metadata
export async function generateMetadata({ params }) {
  const product = await getProduct(params.slug);
  if (!product) {
    return {
      title: "Product Not Found | Web Tech Studio",
      description: "We couldn't find the hardware you're looking for.",
    };
  }

  const productUrl = `https://webtechstudio.site/HardWare/${product.id}`;
  return {
    title: `${product.name} | Hardware - WebTech Studio`,
    description: product.description,
    keywords: `${product.name}, POS Hardware, WebTech Studio`,
    alternates: { canonical: productUrl },
    openGraph: {
      title: product.name,
      description: product.description,
      url: productUrl,
      type: "website",
      siteName: "WebTech Studio",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
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

// ✅ Static Params for SSG
export function generateStaticParams() {
  return hardwareData.products.map((p) => ({ slug: p.id }));
}

// ✅ Page
export default async function Page({ params }) {
  const product = await getProduct(params.slug);
  if (!product) return notFound();

  return (
    <div className="bg-black text-white min-h-screen">
     <HardwareDetailPage product={product}/>
    </div>
  );
}
