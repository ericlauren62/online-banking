import Card2 from "../Shared/Card2";

export default function WealthFifthSection() {
  return (
    <section className="py-20 container">
      <div className="mb-12">
        <span className="uppercase text-primary-hover text-sm block mb-2">Additional Resources</span>
        <h2 className="text-2xl xl:text-4xl mb-3">Get More Information</h2>
      </div>
      <div className="grid xl:grid-cols-3 items-center xl:gap-6">
        <Card2 title="Regulation Best Interest Disclosures" url="#" />
        <Card2 title="Service Fee Schedule" url="#" />
        <Card2 title="Commission Schedule" url="#" />
        <Card2 title="ADV Brochures" url="#" />
        <Card2 title="Regulation NMS Rule 606 Disclosure" url="#" />
        <Card2 title="Privacy Notice" url="#" />
      </div>
    </section>
  );
}
