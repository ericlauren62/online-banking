import Card from "../Shared/Card";

export default function WealthThirdSection() {
  return (
    <section className="container mt-20 xl:mb-40">
      <h2 className="text-2xl xl:text-4xl font-medium mb-10">Wealth management resources </h2>
      <div className="grid xl:grid-cols-2 gap-10 items-center">
        <Card
          title="Estate Planning"
          description="A trust that considers the dynamics within your family can best serve your heirs and alleviate their worries and workload."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-FHBEstate-planning.svg"
        />
        <Card
          title="Business Succession and Estate Planning"
          description="Coordinating the details of your business succession plan and estate plan can help to ensure that your heirs get the most of what you've worked hard to build."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-checklist.svg"
        />
        <Card
          title="What You Need to Know About Trusts"
          description="Anticipate the contingencies and prepare for the what-ifs with trusts that are as flexible as they are thorough."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Overview.svg"
        />
        <Card
          title="Retirement Confidence Quiz"
          description="Answer a few questions to find out how ready you are for retirement. No matter your situation, our advisors are here to help."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-RetirementQuiz.svg"
        />
      </div>
    </section>
  );
}
