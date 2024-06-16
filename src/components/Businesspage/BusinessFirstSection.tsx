import BusinessPageCard from "./BusinessPageCard";

export default function BusinessFirstSection() {
  return (
    <section className="container grid grid-cols-3 py-28">
      <BusinessPageCard
        title="Deposit Services"
        description="Managing finances can be an all-consuming endeavor. Fortunately, Horizon helps keep things simple, so you can focus on your business."
        url="#"
      />
      <BusinessPageCard
        title="Lending"
        description="We’re your partner. So, whether it’s competitive rates or a unique payment schedule you’re after, we’ll structure a loan tailored to your goals."
        url="#"
      />
      <BusinessPageCard
        title="Treasury Management"
        description="Tailor your experience by mixing and matching services to help manage and move your money the way that’s best for you."
        url="#"
      />
    </section>
  );
}
