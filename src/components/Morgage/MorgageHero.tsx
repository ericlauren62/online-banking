import Image from "next/image";
import morgageHero from "/public/morgageHero.jpg";

export default function MorgageHero() {
  return (
    <section className="min-h-[85vh] bg-secondary max-w-[1440px] mx-auto grid grid-cols-2 text-white items-center">
      <div className=" pl-20 pr-10">
        <h2 className="text-[2.8rem] font-medium mb-3">Unlock New Possibilities</h2>
        <p className="mb-5">Buy, refinance or build a new home with a team you can trust.</p>
        <button className="bg-white text-secondary hover:bg-transparent hover:border hover:border-white hover:text-white py-4 px-10 uppercase font-medium tracking-widest">
          Get Started
        </button>
      </div>
      <div className="relative h-full">
        <Image src={morgageHero} alt="morgage hero img" fill className="object-center object-cover" />
      </div>
    </section>
  );
}
