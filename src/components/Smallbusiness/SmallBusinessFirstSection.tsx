import Card2 from "../Shared/Card2";

export default function SmallBusinessFirstSection() {
  return (
    <section className="pb-10 xl:pb-20 container">
      <div className="mb-12">
        <span className="uppercase text-primary-hover text-sm block mb-2">Banking Resources</span>
        <h2 className="text-2xl xl:text-4xl mb-3">Explore our banking options</h2>
      </div>
      <div className="xl:grid xl:grid-cols-3 items-center gap-y-6">
        <Card2 title="Checkings" url="#" />
        <Card2 title="Savings and CDs" url="#" />
        <Card2 title="Digital Banking Services" url="#" />
        <Card2 title="Borrowing" url="#" />
        <Card2 title="Cash Management" url="#" />
        <Card2 title="Investing and Planning" url="#" />
      </div>
    </section>
  );
}
