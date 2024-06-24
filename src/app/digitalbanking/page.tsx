import DigitalBankingFirstSection from "@/components/DigitalBanking/DigitalBankingFirstSection";
import DigitalBankingHero from "@/components/DigitalBanking/DigitalBankingHero";
import DigitalBankingSecondSection from "@/components/DigitalBanking/DigitalBankingSecondSection";
import DigitalBankingThirdSection from "@/components/DigitalBanking/DigitalBankingThirdSection";
import MainLayout from "@/components/layouts/MainLayout";

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
