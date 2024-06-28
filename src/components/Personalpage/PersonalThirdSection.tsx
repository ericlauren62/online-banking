import Card2 from "../Shared/Card2";

export default function PersonalThirdSection() {
  return (
    <section className="py-20 container">
      <div className="mb-12">
        <h2 className="text-2xl xl:text-4xl mb-3">
          {"Let's"} find {"what's"} right for you
        </h2>
      </div>
      <div className="xl:grid xl:grid-cols-2 items-center xl:gap-6">
        <Card2 title="Checking Accounts" url="#" />
        <Card2 title="Savings and CDs" url="#" />
        <Card2 title="Credit Cards" url="#" />
        <Card2 title="Borrowing" url="#" />
        <Card2 title="Mortgage" url="#" />
        <Card2 title="Digital Banking Category" url="#" />
        <div className="col-span-2">
          <Card2 title="Private Client Category" url="#" />
        </div>
      </div>
    </section>
  );
}
