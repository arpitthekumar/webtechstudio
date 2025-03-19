import { notFound } from "next/navigation";
import Image from "next/image";

const blogs = [
  { slug: "modern-web-design-trends-2025", title: "Top 10 Web Design Trends", image: "/blogs/web-design-trends.png", content: "Here is a detailed article about web design trends for 2025..." },
  { slug: "seo-best-practices-2025", title: "SEO Best Practices for 2025", image: "/blogs/seo-best-practices.png", content: "Learn the latest SEO strategies for 2025..." },
  { slug: "best-ecommerce-platforms-for-online-store", title: "Best E-Commerce Platforms", image: "/blogs/ecommerce-platforms.png", content: "Guide to selecting the best e-commerce platform..." },
];

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  
  if (!blog) return notFound();  // Show 404 if blog not found

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-6 md:px-20 max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold">{blog.title}</h1>
        <div className="mt-6 relative w-full h-[400px]">
          <Image src={blog.image} alt={blog.title} fill className="object-cover rounded-xl" />
        </div>
        <p className="mt-6 text-lg">{blog.content}</p>
      </div>
    </section>
  );
}
