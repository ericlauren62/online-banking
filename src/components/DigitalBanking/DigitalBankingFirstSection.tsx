import Card5 from "../Shared/Card5";

export default function DigitalBankingFirstSection() {
  return (
    <section className=" bg-white py-20">
      <h2 className="text-2xl xl:text-4xl mb-10 xl:mb-16 font-medium xl:text-center text-left px-4 xl:px-0">
        Digital and Mobile Banking Services
      </h2>
      <div className="grid xl:grid-cols-3 container bg-white">
        <Card5
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Cell-phone.svg"
          title="Digital and Mobile Banking"
          description="Access your account online or on the go with tools for moving money, saving and budgeting, setting up alerts, and more."
        />
        <div className="bg-gray">
          <Card5
            url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-hand-w-dollar-sign-outline.svg"
            title="Send money with Zelle®"
            description="Send money, receive money, or split a request between friends, family or almost any person with a bank account in the U.S"
          />
        </div>
        <Card5
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Outlinepiegraph.svg"
          title="Budgeting and Planning"
          description="Our personal financial management tools make it easy to track spending, create a budget and develop a savings plan to reach your goals."
        />
        <div className="bg-gray">
          <Card5
            url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Clock-outline.svg"
            title="Alerts and Statements"
            description="Access your account online or on the go with tools for moving money, saving and budgeting, setting up alerts, and more."
          />
        </div>
        <Card5
          url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Billpay.svg"
          title="Bill Pay"
          description="Moving money to pay bills has never been easier."
        />
        <div className="bg-gray">
          <Card5
            url="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Remote-deposit-capture.svg"
            title="Mobile Deposit"
            description="No time to run to the bank? Get that check deposited now – wherever you are – with the convenience of Mobile Deposit."
          />
        </div>
      </div>
    </section>
  );
}
