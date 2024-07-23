import WealthFifthSection from "@/components/Wealth/WealthFifthSection";
import WealthFirstSection from "@/components/Wealth/WealthFirstSection";
import WealthFourthSection from "@/components/Wealth/WealthFourthSection";
import WealthHero from "@/components/Wealth/WealthHero";
import WealthSecondSection from "@/components/Wealth/WealthSecondSection";
import WealthServices from "@/components/Wealth/WealthServices";
import WealthThirdSection from "@/components/Wealth/WealthThirdSection";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wealth Management | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

export default function Wealth() {
  return (
    <MainLayout>
      <WealthHero />
      <WealthServices />
      <WealthFirstSection />
      <WealthSecondSection />
      <WealthThirdSection />
      <WealthFourthSection />
      <WealthFifthSection />
    </MainLayout>
  );
}
