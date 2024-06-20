import Image from "next/image";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function CommercialSecondSection() {
  return (
    <section className="container mt-20">
      <h2 className="text-4xl font-medium mb-10">Business resources</h2>

      <div className="grid grid-cols-2 gap-10 items-center">
        <CommercialSecondSectionCard
          title="Business Succession Planning"
          description="A succession plan can protect businesses from being devalued if founders or CEOs are unable to continue in their roles."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-checklist.svg"
        />
        <CommercialSecondSectionCard
          title=" Business Succession and Estate Planning"
          description="Coordinating the details of your business succession plan and estate plan can help to ensure that your heirs get the most of what you've worked hard to build."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Business-succession-and-EP.svg"
        />
        <CommercialSecondSectionCard
          title="International Trade Basics"
          description="Preparing an international business plan? Learn about global payment options, product distribution, foreign markets and more."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-learning.svg"
        />
        <CommercialSecondSectionCard
          title="Associates: Your Internal Fraud Stopper"
          description="One of your best weapons to prevent fraud: your staff. Train associates to perform internal audits and uphold checks and balances."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Fraud-and-Security.svg"
        />
      </div>
    </section>
  );
}

interface CommercialSecondSectionProps {
  title: string;
  description: string;
  imgUrl: string;
}

function CommercialSecondSectionCard({ title, description, imgUrl }: CommercialSecondSectionProps) {
  return (
    <div className="bg-gray-100 p-12 flex gap-x-12 bg-white">
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
      <div className="w-[30%] mt-auto">
        <Image src={imgUrl} alt="love and money" height={60} width={60} />
      </div>
    </div>
  );
}
