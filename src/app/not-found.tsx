import Image from "next/image";
import Cta from "../components/home/main/cta/Cta";
import Footer from "../components/home/main/Footer";
import Navbar from "../components/home/main/Navbar";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <Image src="/notfound/image.webp" alt="404" width={400} height={400} />
        <h1 className="text-5xl font-bold">404</h1>
        <h1 className="text-5xl font-bold">Page not found.</h1>
        <p className="text-lg text-bluish-gray mt-2">
          Oops! The page you're looking for doesn't exist or has been removed..
        </p>
        <a
          href="/"
          className="mt-4 px-6 py-3 bg-acua-marine text-black font-semibold rounded-xl hover:opacity-80 transition"
        >
          Go Home
        </a>
        <Cta />
      </section>
      <Footer />
    </>
  );
}
