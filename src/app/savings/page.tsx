import SavingsFirstSection from "@/components/Savings/SavingsFirstSection";
import SavingsHero from "@/components/Savings/SavingsHero";
import SavingsSecondSection from "@/components/Savings/SavingsSecondSection";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savings | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

export default function page() {
  return (
    <MainLayout>
      <SavingsHero />
      <SavingsFirstSection />
      <SavingsSecondSection />
    </MainLayout>
  );
}
