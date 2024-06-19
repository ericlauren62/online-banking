import React from "react";

export default function PersonalSecondSection() {
  return (
    <section className="container mt-20">
      <h2 className="text-4xl font-medium mb-10">Keeping you financially savvy</h2>

      <div className="grid grid-cols-2 gap-10 items-center">
        <HomeThirdSectionCard
          title="Fraud Protection Tips"
          description="Fraud is on the rise, but you can keep scammers at bay and safeguard your financial life with these security tips."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Fraud-and-Security.svg"
        />
        <HomeThirdSectionCard
          title="Understanding Your Credit Score"
          description="Answer a few questions to find out how ready you are for retirement. No matter your situation, our advisors are here to help."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-GraphOutline.svg"
        />
        <HomeThirdSectionCard
          title="7 Things All Adults Should Know About Their Finances"
          description="Soak up market insights from Jerry Laurain, First Horizon Advisor’s Chief Investment Officer with over 30 years of industry experience."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-hand-w-dollar-sign-outline.svg"
        />
        <HomeThirdSectionCard
          title="First-Time Homebuyers Checklist"
          description="Fraud is on the rise, but you can keep scammers at bay and safeguard your financial life with these security tips."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-house-outline.svg"
        />
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

interface HomeThirdSectionCardProps {
  title: string;
  description: string;
  imgUrl: string;
}

function HomeThirdSectionCard({ title, description, imgUrl }: HomeThirdSectionCardProps) {
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
        <Image src={imgUrl} alt="love and money" height={70} width={70} />
      </div>
    </div>
  );
}
