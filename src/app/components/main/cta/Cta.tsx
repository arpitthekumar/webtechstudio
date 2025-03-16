import Button from "../button/Button";
import Chip from "../chip/chip";

const Cta: React.FC = () => {
  return (
    <>
      <div className="bg-[linear-gradient(#181823,#101017)] rounded-4xl text-center p-12  max-w-9xl  my-20 mx-6 md:mx-20">
        <div className="flex flex-col items-center text-center pb-12">
          <Chip text="What Our Clients Say" isDark={true} />
        <h1 className="text-6xl font-bold text-white">
          Ready to Elevate Your Digital Presence?
        </h1>
        <p className="text-bluish-gray mt-4 max-w-xl">
          Partner with us to bring your vision to life. From websites to
          branding and design, we've got you covered.
        </p>
        </div>
        <div className="flex justify-center gap-4 ">
        <Button text="Get Started" mode="light" href="/contact" />
        <Button text=" Get A Quote" mode="dark" href="/contact" />
        </div>
      </div>
    </>
  );
};

export default Cta;
