import Image from "next/image";
import img from "/public/commitment.jpg";
import Link from "next/link";

export default function AboutSixSection() {
  return (
    <section className="flex pb-10">
      <div className="w-[55%]">
        <Image src={img} alt="commitment img" />
      </div>
      <div className="w-[45%] pl-24 flex flex-col justify-center">
        <h2 className="text-4xl mb-7">
          Our DEI commitment – <br />
          elevates equity every day.
        </h2>
        <p className="max-w-[500px] mb-5">
          Diversity, Equity and Inclusion shape the way we make decisions, build relationships and plan for future
          growth. When you find your horizon here, you can be sure it will be defined by your perspective and your voice
          and ideas will matter.{" "}
        </p>
        <Link href="#" className="tracking-widest bg-secondary text-white py-4 px-8 text-center w-[200px]">
          LEARN MORE
        </Link>
      </div>
    </section>
  );
}
