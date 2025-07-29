import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import blogs from "@/lib/data";
import Navbar from "@/components/home/main/Navbar";
import Footer from "@/components/home/main/Footer";
import Cta from "@/components/home/main/cta/Cta";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateMetadata() {
  const blog = blogs[0];
  if (!blog) return {};

  const blogUrl = `https://webtechstudio.site/blog/${blog.slug}`;

  return {
    title: `${blog.title} | Web Tech Studio`,
    description: `Read our latest insights on ${blog.category}. Learn more about ${blog.title} at WebTech Studio.`,
    keywords: `Web Tech, SEO, ${blog.category}, ${blog.title}, WebTech Studio, ${blog.slug} ${blog.key}`,
    authors: [{ name: "WebTech Studio", url: "https://webtechstudio.site" }],
    alternates: { canonical: blogUrl },
    openGraph: {
      title: `${blog.title} | Web Tech Studio`,
      description: `Learn about ${blog.title} in our latest blog.`,
      url: blogUrl,
      type: "article",
      publishedTime: blog.date,
      siteName: "Web Tech Studio",
      images: [{ url: blog.image, width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Web Tech Studio`,
      description: `Discover ${blog.title} and more on our blog.`,
      images: [blog.image],
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: { "@type": "WebPage", "@id": blogUrl },
        headline: blog.title,
        image: blog.image,
        datePublished: blog.date,
        dateModified: blog.date,
        author: { "@type": "Organization", name: "Web Tech Studio" },
        publisher: {
          "@type": "Organization",
          name: "Web Tech Studio",
          logo: {
            "@type": "ImageObject",
            url: "https://webtechstudio.site/logo.png",
          },
        },
        description: `Learn more about ${blog.title}.`,
      }),
    },
  };
}
export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPage({ params }) {
  if (!params) return notFound();

  // Ensure params are awaited before accessing slug
  const { slug } = await params;

  if (!slug) return notFound();

  const decodedSlug = decodeURIComponent(slug);
  const blog = blogs.find((b) => b.slug === decodedSlug);

  if (!blog) return notFound();
  const imageSrc = blog.imageExists ? blog.image : "/mainpage/image.webp";

  return (
    <>
      <Navbar />
      <section className="py-2 bg-black text-white">
        <div className="container mx-auto px-6 md:px-20 max-w-9xl">
          <header className="text-center">
            <Breadcrumb />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {blog.title}
            </h1>
            <div className="flex flex-wrap justify-between mt-2 text-lg text-bluish-gray">
              <span className="px-4 py-2 bg-text-bg text-white rounded-full">
                {blog.category}
              </span>
              <span>{blog.date}</span>
            </div>
          </header>

          <div className="mt-6 w-full h-64 md:h-96 lg:h-[500px] relative rounded-3xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-10 space-y-16 md:space-y-20">
            {blog.sections.map((section, index) => (
              <BlogSection key={index} section={section} />
            ))}
          </div>
        </div>
        <Cta />
      </section>
      <Footer />
    </>
  );
}

const BlogSection = ({ section }) => (
  <div className="space-y-5 ">
    {section.heading && (
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
        {section.heading}
      </h2>
    )}
    {section.content && (
      <p className="text-lg md:text-xl text-bluish-gray">{section.content}</p>
    )}
    {section.shortQA?.map((qa, i) => (
      <div
        key={i}
        className="border-l-4 border-[var(--acua-marine)] pl-4 space-y-2 py-2"
      >
        <p className="font-semibold text-xl md:text-2xl lg:text-4xl text-white">
          {qa.question}
        </p>
        <p className="text-lg text-bluish-gray">{qa.answer}</p>
      </div>
    ))}
    {section.keypoints?.map((kp, i) => (
      <div key={i} className="p-2">
        <p className="text-lg md:text-2xl font-bold text-acua-marine">
          {kp.point}
        </p>
        <p className="text-lg text-bluish-gray pt-2">
          {kp.explanation}{" "}
          {kp.link && (
            <Link href={kp.link} className="text-acua-marine hover:underline">
              Read more
            </Link>
          )}
        </p>
      </div>
    ))}
    {section.longAnswer?.map((la, i) => (
      <div key={i} className="p-2 rounded-lg">
        <p className="text-lg font-bold pb-1 text-acua-marine">{la.point}</p>
        <p className="text-lg text-bluish-gray">{la.explanation}</p>
      </div>
    ))}
    {section.conclusion && (
      <p className="text-lg text-bluish-gray italic pl-4">
        {section.conclusion}
      </p>
    )}
  </div>
);
