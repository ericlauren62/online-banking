import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface Card5Props {
  title: string;
  description: string;
  url: string;
}

export default function Card5({ title, description, url }: Card5Props) {
  return (
    <div className="py-10 px-6 flex flex-col gap-y-8 justify-between">
      <Image src={url} alt="card image" height={50} width={50} />
      <h2 className="text-2xl font-medium">{title}</h2>
      <p>{description}</p>
      <Link href="#" className="flex items-center gap-x-5 uppercase tracking-widest">
        LEARN MORE
        <span className="flex items-center justify-center bg-primary text-white p-1 rounded-[100%]">
          <IoIosArrowForward />
        </span>
      </Link>
    </div>
  );
}
