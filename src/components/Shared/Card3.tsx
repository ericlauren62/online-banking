import Image, { StaticImageData } from "next/image";

interface Card3Props {
  img: StaticImageData;
  description: string;
  btntext: string;
}

export default function Card3({ img, description, btntext }: Card3Props) {
  return (
    <div className="flex items-center max-w-[1440px] mx-auto gap-x-24">
      <div className="w-[55%] relative h-[480px]">
        <Image src={img} alt="contact image" fill className="object-center object-cover" />
      </div>
      <div>
        <h2 className="text-4xl mb-5">Need some help?</h2>
        <p className="mb-5">{description}</p>
        <button className="text-white tracking-widest text-sm flex items-center font-medium border-2 border-primary bg-primary hover:bg-primary-hover px-10 py-3">
          {btntext}
        </button>
      </div>
    </div>
  );
}
