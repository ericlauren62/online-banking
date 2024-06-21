import Card5 from "../Shared/Card5";

export default function DepositThirdSection() {
  return (
    <section className=" bg-white py-20">
      <div className="container grid grid-cols-3">
        <Card5
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-paper-statements.svg"
          title="Add-On CD"
          description="Make deposits to your Add-On CD almost any time and start saving at your own pace."
        />
        <div className="bg-gray">
          <Card5
            title="Regular CD"
            url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Targetwitharrow.svg"
            description="Flexible terms and fixed interest let you design a CD that keeps you right on target with your savings strategy."
          />
        </div>
        <Card5
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-paper-statements.svg"
          title="Jumbo CD"
          description="Earn considerable interest on your large deposits, even with a very short-term CD."
        />
        <div className="bg-gray">
          <Card5
            url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-hand-w-dollar-sign-outline.svg"
            title="Business Money Market Savings"
            description="Competitive tiered interest rates let you earn more as you save more with Business Money Market Savings."
          />
        </div>
        <Card5
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-paper-statements.svg"
          title="Certificate of Deposit Account Registry Service (CDARS)"
          description="Enjoy maximum FDIC coverage for all of your deposits – up to $50 million – with CDARS®."
        />
        <div className="bg-gray">
          <Card5
            url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Bar-Graph-Outline.svg"
            title="Investing & Planning"
            description="Talk with our wealth management affiliate, First Horizon Advisors, Inc., to learn more about executive compensation and wealth management programs."
          />
        </div>
      </div>
    </section>
  );
}
