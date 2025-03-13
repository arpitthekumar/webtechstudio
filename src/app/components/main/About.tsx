import Image from 'next/image';
import Button from './button/Button';

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-20 px-20 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side */}
      <div className="flex-1">
        <div className="text-sm flex bg-white/30 text-white px-4 py-2 rounded-full mb-4 w-fit">
        <div className=' justify-center items-center h-2 w-2 mt-1 mr-2 rounded-full bg-acua-marine'></div>
          Who We Are
          </div>
        <p className="text-lg mb-4">
          At <span className="font-bold">Kairos</span>, we provide custom digital solutions designed to help agencies
          grow. Our team blends creativity, innovation, and expertise to deliver
          exceptional results, empowering brands to succeed in a rapidly evolving
          digital world.
        </p>

        <div className="flex space-x-10 mb-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold">700+</h3>
            <p className="text-acua-marine">Projects Delivered</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">98%</h3>
            <p className="text-acua-marine">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-acua-marine">Industry Experience</p>
          </div>
        </div>

        <p className="text-gray-400 mb-6">
          With a commitment to excellence, we have successfully helped over 100
          brands enhance their digital presence. Our tailored approach ensures
          impactful results for every client.
        </p>
        <Button text="Discover Our Story" mode="light" href="/contact" />
      </div>

      {/* Right Side */}
      <div className="flex-1 relative">
        <Image
        width={800}
        height={800}
          src="/mainpage/image.png"
          alt="Video"
          className="rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center">

        <div className=" absolute justify-center inset-0 w-16 h-16 rounded-ful bg-white/40 pointer-events-none"></div>
          <button className="bg-acua-marine text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
