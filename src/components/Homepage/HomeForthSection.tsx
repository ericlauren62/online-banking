import Image from "next/image";
import Link from "next/link";

export default function HomeForthSection() {
  return (
    <section className="container my-10 xl:my-20">
      <h2 className="mb-20 text-3xl font-medium">Lets Find {"What's"} Right For You</h2>
      <div className="grid xl:grid-cols-2 gap-10">
        <HomeForthSectionCard
          title="Personal"
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Check-and-pen.svg"
        />
        <HomeForthSectionCard
          title="Small Business"
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Dollar-bill.svg"
        />
        <HomeForthSectionCard
          title="Commercial & Specialty"
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Handshake.svg"
        />
        <HomeForthSectionCard
          title="Wealth Management"
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Hand-Holding-Money-Bag.svg"
        />
      </div>
    </section>
  );
}

interface HomeForthSectionCardProps {
  title: string;
  imgUrl: string;
}

const HomeForthSectionCard = ({ title, imgUrl }: HomeForthSectionCardProps) => {
  return (
    <Link
      href="#"
      className="card shadow-md p-8 border-t-4 border-t-primary text-primary hover:text-white hover:bg-primary "
    >
      <h3 className="font-medium text-xl mb-8 max-w-[140px]">{title}</h3>
      <div className="ml-auto">
        <Image src={imgUrl} alt="wealth" height={71} width={85} className="w-[85px] h-[71px] block ml-auto icon" />
      </div>
    </Link>
  );
};
