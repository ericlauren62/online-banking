import Link from "next/link";
import img from "/public/unity.jpg";
import Image from "next/image";

export default function AboutSevenSection() {
  return (
    <section className="flex max-w-[1440px] mx-auto">
      <div className="w-[45%] pl-10  flex flex-col justify-center">
        <h2 className="text-4xl mb-7">
          Our community – inspires <br />
          action.
        </h2>
        <p className="max-w-[500px] mb-5">
          Our investment in the neighborhoods we serve goes beyond our front door. It’s more than a financial commitment
          alone – we show up and do the work. Because that’s what good neighbors do.{" "}
        </p>
        <Link href="#" className="tracking-widest bg-secondary text-white py-4 px-8 text-center w-[200px]">
          LEARN MORE
        </Link>
      </div>
      <div className="w-[55%]">
        <Image src={img} alt="commitment img" />
      </div>
    </section>
  );
}
