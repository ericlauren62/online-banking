import SavingsFirstSection from "@/components/Savings/SavingsFirstSection";
import SavingsHero from "@/components/Savings/SavingsHero";
import SavingsSecondSection from "@/components/Savings/SavingsSecondSection";

export default function page() {
  return (
    <>
      <SavingsHero />
      <SavingsFirstSection />
      <SavingsSecondSection />
    </>
  );
}
