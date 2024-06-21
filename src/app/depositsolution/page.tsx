import DepositFirstSection from "@/components/DepositSolution/DepositFirstSection";
import DepositSecondSection from "@/components/DepositSolution/DepositSecondSection";
import DepositSolutionHero from "@/components/DepositSolution/DepositSolutionHero";
import DepositThirdSection from "@/components/DepositSolution/DepositThirdSection";

export default function DepositSolution() {
  return (
    <>
      <DepositSolutionHero />
      <DepositFirstSection />
      <DepositSecondSection />
      <DepositThirdSection />
    </>
  );
}
