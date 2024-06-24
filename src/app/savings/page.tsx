import SavingsFirstSection from "@/components/Savings/SavingsFirstSection";
import SavingsHero from "@/components/Savings/SavingsHero";
import SavingsSecondSection from "@/components/Savings/SavingsSecondSection";
import MainLayout from "@/components/layouts/MainLayout";

export default function page() {
  return (
    <MainLayout>
      <SavingsHero />
      <SavingsFirstSection />
      <SavingsSecondSection />
    </MainLayout>
  );
}
