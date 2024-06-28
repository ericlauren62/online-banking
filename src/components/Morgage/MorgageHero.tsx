import Image from "next/image";
import morgageHero from "/public/morgageHero.jpg";

export default function MorgageHero() {
  return (
    <section className="min-h-[80vh] xl:min-h-[85vh] bg-secondary max-w-[1440px] mx-auto py-10 px-4 xl:py-0 xl:px-0 xl:grid xl:grid-cols-2 text-white items-center">
      <div className="xl:pl-20 xl:pr-10 mb-10 xl:mb-0">
        <h2 className="text-2xl xl:text-[2.8rem] font-medium mb-3">Unlock New Possibilities</h2>
        <p className="mb-5">Buy, refinance or build a new home with a team you can trust.</p>
        <button className="bg-white text-secondary hover:bg-transparent hover:border hover:border-white hover:text-white py-4 px-10 uppercase font-medium tracking-widest">
          Get Started
        </button>
      </div>
      <div className="relative h-[40vh]">
        <Image src={morgageHero} alt="morgage hero img" fill className="object-center object-cover" />
      </div>
    </section>
  );
}
