import Image from "next/image";
import img from "/public/morgageImg2.jpg";

export default function MorgageThirdSection() {
  return (
    <section className="mb-10 xl:mb-0 xl:flex items-center max-w-[1440px] mx-auto bg-white">
      <div className="mb-5">
        <Image src={img} alt="a man holding a package" />
      </div>
      <div className="xl:pl-20  px-5 xl:px-0">
        <h2 className="text-2xl mb-5 xl:text-4xl xl:mb-8">
          Affordable Housing <br /> Program
        </h2>
        <p className="xl:max-w-[500px]">
          Bring your dream of owning your own home into reach with the Affordable Housing Program.
        </p>
      </div>
    </section>
  );
}
