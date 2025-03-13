import Button from "./button/Button";

const HeroSection = () => {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: `url('/mainpage/image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "680px",
      }}
    >
      {/* Dark overlay only on the background */}
      <div className="absolute inset-0  bg-black/20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative flex flex-row top-100 justify-between items-center text-white text-center px-20">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-start ">
          <div className="text-sm bg-white text-black px-4 py-1 rounded-full mb-4">
            Empowering Agencies
          </div>
          <h1 className="text-5xl font-bold mb-4 text-left">
            Crafting Success
            <br />
            Elevating Brands
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-start max-w-xl">
          <p className="mb-6 text-left">
            We deliver custom-crafted digital solutions that help agencies
            elevate their brands and achieve remarkable growth.
          </p>
          <Button text="Let's Get Started" mode="light" href="/contact" />
          <Button text="Let's Get Started" mode="dark" href="/contact" />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
