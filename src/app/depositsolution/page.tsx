import DepositFirstSection from "@/components/DepositSolution/DepositFirstSection";
import DepositSecondSection from "@/components/DepositSolution/DepositSecondSection";
import DepositSolutionHero from "@/components/DepositSolution/DepositSolutionHero";
import DepositThirdSection from "@/components/DepositSolution/DepositThirdSection";
import MainLayout from "@/components/layouts/MainLayout";

export default function DepositSolution() {
  return (
    <MainLayout>
      <DepositSolutionHero />
      <DepositFirstSection />
      <DepositSecondSection />
      <DepositThirdSection />
    </MainLayout>
  );
}
