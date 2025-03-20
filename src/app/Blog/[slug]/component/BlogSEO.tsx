import { Metadata } from "next";

export async function generateMetadata({
  title,
  description,
  slug,
  image,
  date,
  category,
}: {
  title: string;
  description: string;
  slug: string;
  image: string;
  date: string;
  category: string;
}): Promise<Metadata> {
  const blogUrl = `https://webtechstudio.site/blog/${slug}`;

  return {
    title: `${title} | Web Tech Studio`,
    description,
    keywords: `Web Tech, SEO, ${category}, ${title}, WebTech Studio, ${slug}`,
    authors: [{ name: "WebTech Studio", url: "https://webtechstudio.site" }],
    alternates: { canonical: blogUrl },
    openGraph: {
      title: `${title} | Web Tech Studio`,
      description,
      url: blogUrl,
      type: "article",
      publishedTime: date,
      siteName: "Web Tech Studio",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Web Tech Studio`,
      description,
      images: [image],
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": { "@type": "WebPage", "@id": blogUrl },
        "headline": title,
        "image": image,
        "datePublished": date,
        "dateModified": date,
        "author": { "@type": "Organization", "name": "Web Tech Studio" },
        "publisher": {
          "@type": "Organization",
          "name": "Web Tech Studio",
          "logo": { "@type": "ImageObject", "url": "https://webtechstudio.site/logo.png" },
        },
        "description": description,
      }),
    },
  };
}

export default function BlogSEO(props: {
  title: string;
  description: string;
  slug: string;
  image: string;
  date: string;
  category: string;
}) {
  generateMetadata(props);
  return null; // No UI needed
}
