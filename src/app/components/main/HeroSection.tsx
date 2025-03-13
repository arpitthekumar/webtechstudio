import Button from "./button/Button";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center"
      style={{
        backgroundImage: `url('/mainpage/image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"680px",
      }}
    >
      {/* Dark overlay only on the background */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative  flex flex-col md:flex-row justify-center md:justify-between items-center text-white text-center md:top-50 md:text-left px-6 md:px-20 w-full">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center md:items-start mb-6 md:mb-0">
          <div className="text-sm bg-white text-black px-4 py-1 rounded-full mb-4">
            Empowering Agencies
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Crafting Success
            <br />
            Elevating Brands
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-center md:items-start max-w-lg">
          <p className="mb-6">
            We deliver custom-crafted digital solutions that help agencies
            elevate their brands and achieve remarkable growth.
          </p>
          <Button text="Let's Get Started" mode="light" href="/contact" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
