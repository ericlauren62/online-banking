import DepositFirstSection from "@/components/DepositSolution/DepositFirstSection";
import DepositSecondSection from "@/components/DepositSolution/DepositSecondSection";
import DepositSolutionHero from "@/components/DepositSolution/DepositSolutionHero";
import DepositThirdSection from "@/components/DepositSolution/DepositThirdSection";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deposit Solution | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

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
