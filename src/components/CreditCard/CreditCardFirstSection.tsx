import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

export default function CreditCardFirstSection() {
  return (
    <section className=" container bg-gray py-20">
      <h2 className="font-medium text-4xl mb-10 text-center">Visa® credit cards</h2>
      <div className="grid grid-cols-2 gap-10">
        <CreditCardFirstSectionCard
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-credit-card-outline.svg"
          title="Visa Signature"
        />
        <CreditCardFirstSectionCard
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-credit-card-outline.svg"
          title="Platinum Visa"
        />
        <CreditCardFirstSectionCard
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-credit-card-outline.svg"
          title="Visa Classic"
        />
        <CreditCardFirstSectionCard
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-credit-card-outline.svg"
          title="Secured Visa"
        />
      </div>
    </section>
  );
}

interface CreditCardFirstSectionCardProps {
  url: string;
  title: string;
}

const CreditCardFirstSectionCard = ({ url, title }: CreditCardFirstSectionCardProps) => {
  return (
    <div className="bg-white py-10 px-10">
      <div className="mb-8">
        <Image src={url} alt="card" height={60} width={60} />
      </div>
      <h2 className="text-2xl font-medium mb-16">{title}</h2>
      <button className="flex items-center gap-x-4 tracking-widest">
        LEARN MORE
        <span className="bg-primary text-white block p-1 rounded-[100%]">
          <MdArrowForwardIos />
        </span>
      </button>
    </div>
  );
};
