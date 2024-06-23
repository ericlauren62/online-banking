import Image from "next/image";
import img from "/public/morgageImg2.jpg";

export default function MorgageThirdSection() {
  return (
    <section className="flex items-center max-w-[1440px] mx-auto bg-white">
      <div>
        <Image src={img} alt="a man holding a package" />
      </div>
      <div className="pl-20 ">
        <h2 className="text-4xl mb-8">
          Affordable Housing <br /> Program
        </h2>
        <p className="max-w-[500px]">
          Bring your dream of owning your own home into reach with the Affordable Housing Program.
        </p>
      </div>
    </section>
  );
}
