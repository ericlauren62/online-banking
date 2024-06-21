import Card2 from "../Shared/Card2";

export default function WealthSecondSection() {
  return (
    <section className="py-20 container">
      <div className="mb-12">
        <span className="uppercase text-primary-hover text-sm block mb-2">Additional banking solutions</span>
        <h2 className="text-4xl mb-3">Looking for something else?</h2>
        <p>Whatever your need, we have banking services available and at the ready. </p>
      </div>
      <div className="grid grid-cols-3 items-center gap-6">
        <Card2 title="Medical Banking" url="#" />
        <Card2 title="Corporate" url="#" />
        <Card2 title="Music, Sports and Entertainment" url="#" />
        <Card2 title="Fitness Finance" url="#" />
        <Card2 title="Family Office Services" url="#" />
        <Card2 title="Energy" url="#" />
      </div>
    </section>
  );
}
