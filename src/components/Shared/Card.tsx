import Image from "next/image";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

interface CardProps {
  title: string;
  description: string;
  imgUrl: string;
}

export default function Card({ title, description, imgUrl }: CardProps) {
  return (
    <div className="bg-gray-100 p-12 flex flex-col-reverse xl:flex-row gap-x-12 bg-white">
      <div>
        <h2 className="font-medium text-lg mb-3 text-primary-hover">{title}</h2>
        <p className="mb-8">{description}</p>

        <Link href="#" className="flex items-center gap-x-4 font-medium tracking-wider">
          READ MORE
          <span className="block bg-primary text-white rounded-[100%] p-1">
            <IoChevronForwardOutline />
          </span>
        </Link>
      </div>
      <div className="w-[30%] mt-auto mb-10 xl:mb-0">
        <Image src={imgUrl} alt="love and money" height={70} width={70} />
      </div>
    </div>
  );
}
