import React from "react";
import Card from "../Shared/Card";

export default function PersonalSecondSection() {
  return (
    <section className="container mt-10 xl:mt-20">
      <h2 className="text-2xl text-center xl:text-left xl:text-4xl  font-medium mb-10">
        Keeping you financially savvy
      </h2>

      <div className="grid xl:grid-cols-2 gap-10 items-center">
        <Card
          title="Fraud Protection Tips"
          description="Fraud is on the rise, but you can keep scammers at bay and safeguard your financial life with these security tips."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Fraud-and-Security.svg"
        />
        <Card
          title="Understanding Your Credit Score"
          description="Answer a few questions to find out how ready you are for retirement. No matter your situation, our advisors are here to help."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-GraphOutline.svg"
        />
        <Card
          title="7 Things All Adults Should Know About Their Finances"
          description="Soak up market insights from Jerry Laurain, First Horizon Advisor’s Chief Investment Officer with over 30 years of industry experience."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-hand-w-dollar-sign-outline.svg"
        />
        <Card
          title="First-Time Homebuyers Checklist"
          description="Fraud is on the rise, but you can keep scammers at bay and safeguard your financial life with these security tips."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-house-outline.svg"
        />
      </div>
    </section>
  );
}
