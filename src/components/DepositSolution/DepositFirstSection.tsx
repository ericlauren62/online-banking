import Card4 from "../Shared/Card4";

export default function DepositFirstSection() {
  return (
    <section className="container py-20">
      <h2 className="text-4xl font-medium max-w-[800px] mb-16 mx-auto text-center">
        Choose from checking that offers your business real flexibility, control and clarity.
      </h2>
      <div className="grid grid-cols-2 items-center gap-10">
        <Card4
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Check.svg"
          title="Account Analysis Checking"
        />
        <Card4
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-value-checking.svg"
          title="Business Interest Checking"
        />
        <Card4
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-laptopgraph.svg"
          title="Business Invest­ment Account"
        />
        <Card4
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-earnsinterest.svg"
          title="NOW Account"
        />
      </div>
    </section>
  );
}
