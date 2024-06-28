import Card from "../Shared/Card";

export default function MorgageSecondSection() {
  return (
    <section className="container pb-20">
      <h2 className="mb-10 xl:mb-16 text-2xl xl:text-4xl">Mortgage Loan Resources</h2>
      <div className="grid xl:grid-cols-2 items-center gap-6">
        <Card
          title="Mortgage application checklist"
          description="Help streamline your application process with this checklist and turn your homeowner dreams into reality."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-checklist.svg"
        />
        <Card
          title="Mortgage FAQs"
          description="Get answers to the most commonly asked mortgage loan questions."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-FAQ.svg"
        />
        <Card
          title="3 Ways to Know You're Ready to Buy a House"
          description="Make sure you consider these three things before setting out on the homebuying journey."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-FHBEstate-planning.svg"
        />
        <Card
          title="Real Estate Investment Quiz"
          description="What Real Estate Investment Is Right for You?"
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Hand-holding-house.svg"
        />
      </div>
    </section>
  );
}
