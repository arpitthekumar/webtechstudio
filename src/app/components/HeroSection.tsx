const HeroSection = () => {
  return (
    <section
      className=""
      style={{
        backgroundImage: `url('/mainpage/image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "680px",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative flex flex-row top-90  justify-between items-center text-white text-center py-20">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-start pl-16">
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
        <div className="flex justify-center items-center pr-16">
          <p className="max-w-xl mb-6 text-left">
            We deliver custom-crafted digital solutions that help agencies
            elevate their brands and achieve remarkable growth.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full">
            Let's Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
