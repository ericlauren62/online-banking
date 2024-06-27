import React from "react";
import HomeThirdSectionCard from "./HomeThirdSectionCard";

export default function HomeThirdSection() {
  return (
    <section className="container mt-20 mb-40">
      <h2 className="text-2xl text-center xl:text-left xl:text-4xl font-medium mb-10">Keeping you financially savvy</h2>

      <div className="grid xl:grid-cols-2 gap-y-10 xl:gap-x-10 items-center">
        <HomeThirdSectionCard
          title="Love and Money: 3 Things to Consider Before You Combine Your Finances"
          description="To help you decide if combining finances is right for your relationship, consider these financial factors."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Family-Heart.svg"
        />
        <HomeThirdSectionCard
          title="Retirement Confidence Quiz"
          description="Answer a few questions to find out how ready you are for retirement. No matter your situation, our advisors are here to help."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-RetirementQuiz.svg"
        />
        <HomeThirdSectionCard
          title="Subscription for Jerry Laurain’s Market News and Views"
          description="Soak up market insights from Jerry Laurain, First Horizon Advisor’s Chief Investment Officer with over 30 years of industry experience."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Journalist-Contacts.svg"
        />
        <HomeThirdSectionCard
          title="Fraud Protection Tips"
          description="Fraud is on the rise, but you can keep scammers at bay and safeguard your financial life with these security tips."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Fraud-and-Security.svg"
        />
      </div>
    </section>
  );
}
