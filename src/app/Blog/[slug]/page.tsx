import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import blogs from "./data";
import Navbar from "@/app/components/main/Navbar";
import Footer from "@/app/components/main/Footer";
import Cta from "@/app/components/main/cta/Cta";

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

// interface PageProps {
//   params: { slug?: string };
// }

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const resolvedParams = await params;
//   if (!resolvedParams?.slug) return {};

//   const slug = resolvedParams.slug;
//   const blog = blogs.find((b) => b.slug === slug);
//   if (!blog) return {};

//   return {
//     title: `${blog.title} | WebTech Studio`,
//     description: `Read our latest insights on ${blog.category}. Learn more about ${blog.title} at WebTech Studio.`,
//     openGraph: {
//       title: `${blog.title} | WebTech Studio`,
//       description: `Learn about ${blog.title} in our latest blog.`,
//       url: `https://webtechstudio.site/blog/${slug}`,
//       type: "article",
//       images: [{ url: blog.image, width: 1200, height: 630, alt: blog.title }],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: `${blog.title} | WebTech Studio`,
//       description: `Discover ${blog.title} and more on our blog.`,
//       images: [blog.image],
//     },
//   };
// }

export default function BlogPage() {
  const blog = blogs[0]; // ✅ Just using the first blog (Can be changed dynamically)

  if (!blog) return notFound();

  return (
    <>
      <Navbar />
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 md:px-20 max-w-9xl">
          <header className="text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{blog.title}</h1>
            <div className="flex flex-wrap justify-between mt-2 text-lg text-bluish-gray">
              <span className="px-4 py-2 bg-text-bg text-white rounded-full">{blog.category}</span>
              <span>{blog.date}</span>
            </div>
          </header>

          <div className="mt-6 w-full h-64 md:h-96 lg:h-[500px] relative rounded-3xl overflow-hidden">
            <Image src={blog.image} alt={blog.title} fill className="object-cover" />
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

const BlogSection = ({ section }: { section: BlogType["sections"][0] }) => (
  <div className="space-y-5 px-4 md:px-0">
    {section.heading && (
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
        {section.heading}
      </h2>
    )}
    {section.content && <p className="text-lg md:text-xl text-bluish-gray">{section.content}</p>}

    {section.shortQA?.map((qa, i) => (
      <div key={i} className="border-l-4 border-[var(--acua-marine)] pl-4 space-y-2 py-2">
        <p className="font-semibold text-xl md:text-2xl lg:text-4xl text-white">{qa.question}</p>
        <p className="text-lg text-bluish-gray">{qa.answer}</p>
      </div>
    ))}

    {section.keypoints?.map((kp, i) => (
      <div key={i} className="p-2">
        <p className="text-lg md:text-2xl font-bold text-acua-marine">{kp.point}</p>
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
      <p className="text-lg text-bluish-gray italic pl-4">{section.conclusion}</p>
    )}
  </div>
);
