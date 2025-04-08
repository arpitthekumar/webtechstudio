import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../button/Button";
import Link from "next/link";

type BlogCard = {
  title: string;
  category: string;
  date: string;
  image: string;
  link: string;
};

const blogs: BlogCard[] = [
  {
    title: "Using CMS For E-Commerce Success",
    category: "Web Design",
    date: "19 May, 24",
    image: "https://cdn.prod.website-files.com/672f3fc8c234a64d78681a73/67480cad9a341a11b7fd252e_caucasian-supervisor-helping-new-asian-employee.png",
    link: "/blog-collection/cms-for-e-commerce",
  },
  {
    title: "The Future Of Content Management",
    category: "Web Design",
    date: "19 May, 24",
    image: "https://cdn.prod.website-files.com/672f3fc8c234a64d78681a73/67480cd9d48127bf356f6b29_caucasian-supervisor-helping-new-asian-employee%20(3).png",
    link: "/blog-collection/future-of-cms",
  },
  {
    title: "Optimizing Content For SEO In Your CMS",
    category: "Web Design",
    date: "19 May, 24",
    image: "https://cdn.prod.website-files.com/672f3fc8c234a64d78681a73/67480cc943a57d0936eedde1_caucasian-supervisor-helping-new-asian-employee%20(2).png",
    link: "/blog-collection/optimizing-content-for-seo",
  },
];

const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom", // when the top of the section reaches the bottom of the viewport
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="blog-section py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-28">
        <div className="text-center md:text-left justify-between flex items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg uppercase px-5 py-2 rounded-full">
              Our Blog
            </div>
            <h2 className="text-4xl font-extrabold text-white mt-4">
              Explore Fresh Ideas And Perspectives Here
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              text="Latest Blog"
              href="/contact"
              className="px-6 py-2"
              icon="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/6727128b273f00c151622b3e_button-arrow.png"
              hoverColor="#0a0a0a"
            />
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="blog-card bg-wwrcolor rounded-3xl overflow-hidden"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>
                <motion.div className="absolute bottom-0 right-0 opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                  <Link href="/about">
                    <div className="flex items-center justify-center rounded-md w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300">
                      <p className="text-3xl text-center text-white">↗</p>
                    </div>
                  </Link>
                </motion.div>
              </div>
              <a href={blog.link} className="p-12 block">
                <h3 className="text-2xl font-semibold text-white mb-8">
                  {blog.title}
                </h3>
                <div className="flex items-center text-xl text-gray-400">
                  <span className="mr-4">{blog.category}</span>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 15.75l-1.5-1.5a6 6 0 1111.627-2.751m.923 4.29a6.003 6.003 0 01-9.05 2.658L4.5 19.5V15.75"
                      />
                    </svg>
                    {blog.date}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
