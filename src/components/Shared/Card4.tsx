import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface Card4Props {
  title: string;
  url: string;
}

export default function Card4({ url, title }: Card4Props) {
  return (
    <div className="bg-white p-12 h-[300px]">
      <div className="mb-8">
        <Image src={url} alt="card image" height={60} width={60} />
      </div>
      <h3 className="font-medium mb-10 text-2xl">{title}</h3>
      <Link href="#" className="flex items-center gap-x-5 uppercase tracking-widest">
        Details
        <span className="flex items-center justify-center bg-primary text-white p-1 rounded-[100%]">
          <IoIosArrowForward />
        </span>
      </Link>
    </div>
  );
}
