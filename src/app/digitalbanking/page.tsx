import DigitalBankingFirstSection from "@/components/DigitalBanking/DigitalBankingFirstSection";
import DigitalBankingHero from "@/components/DigitalBanking/DigitalBankingHero";
import DigitalBankingSecondSection from "@/components/DigitalBanking/DigitalBankingSecondSection";
import DigitalBankingThirdSection from "@/components/DigitalBanking/DigitalBankingThirdSection";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Banking | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

export default function page() {
  return (
    <MainLayout>
      <DigitalBankingHero />
      <DigitalBankingFirstSection />
      <DigitalBankingSecondSection />
      <DigitalBankingThirdSection />
    </MainLayout>
  );
}
