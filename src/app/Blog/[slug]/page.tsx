import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

// Sample Blog Data
const blogs = [
  {
    slug: "modern-web-design-trends-2025",
    title: "Top 10 Modern Web Design Trends for 2025",
    date: "March 10, 2025",
    category: "Web Design",
    image: "/blogs/web-design-trends.png",
    content: "Here is a detailed article about the top web design trends for 2025...",
  },
  {
    slug: "seo-best-practices-2025",
    title: "SEO Best Practices to Rank Higher in Google",
    date: "March 15, 2025",
    category: "SEO",
    image: "/blogs/seo-best-practices.png",
    content: "Learn how to optimize your website with the latest SEO strategies...",
  },
  {
    slug: "high-converting-ecommerce-website",
    title: "How to Build a High-Converting E-Commerce Website",
    date: "March 20, 2025",
    category: "E-Commerce",
    image: "/blogs/ecommerce-website-guide.png",
    content: "This guide covers all aspects of building a high-converting e-commerce site...",
  },
];

// Generate Metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find((blog) => blog.slug === params.slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.content.slice(0, 160),
  };
}

// Dynamic Blog Page Component
export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 md:px-20 max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold">{blog.title}</h1>
        <p className="text-gray-400 mt-2">{blog.date} - {blog.category}</p>
        <div className="mt-6 relative w-full h-[400px]">
          <Image src={blog.image} alt={blog.title} fill className="object-cover rounded-xl" />
        </div>
        <p className="mt-6 text-lg">{blog.content}</p>
      </div>
    </section>
  );
}
