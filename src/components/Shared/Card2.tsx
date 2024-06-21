import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

interface Card2Props {
  title: string;
  url: string;
}

export default function Card2({ url, title }: Card2Props) {
  return (
    <Link
      href={url}
      className="bg-secondary border-t-4 border-primary hover:bg-primary px-5 text-white flex items-center justify-between pt-12 pb-4"
    >
      <h4 className="font-medium">{title}</h4>
      <div className="bg-white p-1 text-secondary rounded-[100%] flex items-center justify-center">
        <MdArrowForwardIos />
      </div>
    </Link>
  );
}
