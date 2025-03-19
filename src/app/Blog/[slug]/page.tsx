import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import blogs from "./data";

type BlogType = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  sections: {
    heading?: string;
    content?: string;
    shortQA?: { question: string; answer: string }[];
    faqs?: { question: string; answer: string }[];
    keypoints?: { point: string; explanation: string; link?: string }[];
    longAnswer?: { point: string; explanation: string }[];
    conclusion?: string;
  }[];
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);
  return blog
    ? {
        title: blog.title,
        description: `Read our latest insights on ${blog.category} at WebTech Studio.`,
      }
    : {};
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold">{blog.title}</h1>
          <p className="text-gray-400 mt-2">
            {blog.date} - {blog.category}
          </p>
        </header>

        {/* Blog Image */}
        <div className="mt-6 relative w-full h-[400px] rounded-xl overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="mt-10 space-y-10">
          {blog.sections.map((section, index) => (
            <BlogSection key={index} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Blog Section Component
const BlogSection = ({ section }: { section: BlogType["sections"][0] }) => (
  <div className="space-y-4">
    {section.heading && (
      <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
    )}
    {section.content && <p className="text-gray-300">{section.content}</p>}

    {/* FAQs */}
    {section.shortQA?.map((qa, i) => (
      <div key={i} className="border-l-4 border-yellow-500 pl-4 py-2">
        <p className="font-semibold text-gray-200">{qa.question}</p>
        <p className="text-gray-300">{qa.answer}</p>
      </div>
    ))}

    {/* Keypoints */}
    {section.keypoints?.map((kp, i) => (
      <div key={i} className="bg-gray-900 p-4 rounded-lg">
        <p className="text-lg font-bold text-blue-400">{kp.point}</p>
        <p className="text-gray-300">
          {kp.explanation}{" "}
          {kp.link && (
            <Link href={kp.link} className="text-blue-500 hover:underline">
              Read more
            </Link>
          )}
        </p>
      </div>
    ))}

    {/* Long Answer */}
    {section.longAnswer?.map((la, i) => (
      <div key={i} className="p-4 bg-gray-800 rounded-lg">
        <p className="text-lg font-bold text-green-400">{la.point}</p>
        <p className="text-gray-300">{la.explanation}</p>
      </div>
    ))}

    {/* Conclusion */}
    {section.conclusion && (
      <p className="text-lg text-gray-400 italic border-l-4 border-blue-500 pl-4">
        {section.conclusion}
      </p>
    )}
  </div>
);
