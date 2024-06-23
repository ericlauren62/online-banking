import Image, { StaticImageData } from "next/image";
// import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

interface FeaturedCardProps {
  title: string;
  description: string;
  img: StaticImageData;
  //   link: string;
}

export default function FeaturedCard({ img, title, description }: FeaturedCardProps) {
  return (
    <div className="flex flex-col justify-between -mt-20">
      <div className="mb-5">
        <Image src={img} alt="featured 1 image" className="max-h-full h-[32.1875rem] object-cover" />
      </div>
      <h4 className="mb-4 font-medium text-xl">{title}</h4>
      <p className="mb-8">{description}</p>
      <button className="flex items-center gap-x-5  text-white">
        LEARN MORE{" "}
        <span className="flex items-center justify-center bg-white text-secondary p-1 rounded-[100%]">
          <MdArrowForwardIos />
        </span>
      </button>
    </div>
  );
}
