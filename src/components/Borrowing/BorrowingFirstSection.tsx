import Card5 from "../Shared/Card5";

export default function BorrowingFirstSection() {
  return (
    <section className="py-20 bg-white">
      <h2 className="container xl:text-center text-2xl xl:text-4xl font-medium mb-20">
        Find the financing solution that meets <br />
        your borrowing needs.
      </h2>
      <div className="container grid gap-y-10 xl:gap-y-0 xl:grid-cols-3">
        <Card5
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-house-outline.svg"
          title="Home loan solutions"
          description="Whether you're purchasing a new home, or are interested in refinancing, we have a wide range of mortgage solutions."
        />
        <div className="bg-gray">
          <Card5
            title="Home equity"
            url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-house-with-heart.svg"
            description="Take advantage of competitive home equity rates to make home improvements or consolidate your debt."
          />
        </div>
        <Card5
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-paper-statements.svg"
          title="Credit cards"
          description="Looking for a low-interest credit card and great benefits? We have a credit card for you."
        />
        <div className="bg-gray">
          <Card5
            url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-hand-w-dollar-sign-outline.svg"
            title="Auto loans"
            description="Get a competitive rate on the loan you need to buy or refinance a car."
          />
        </div>
        <Card5
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-paper-statements.svg"
          title="Personal loans"
          description="Competitive tiered interest rates let you earn more as you save more with Business Money Market Savings."
        />
        <div className="bg-gray">
          <Card5
            url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Bar-Graph-Outline.svg"
            title="Borrower's resources"
            description="Review useful information on how to understand credit and receive service members benefits."
          />
        </div>
      </div>
    </section>
  );
}
