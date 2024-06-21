import WealthFifthSection from "@/components/Wealth/WealthFifthSection";
import WealthFirstSection from "@/components/Wealth/WealthFirstSection";
import WealthFourthSection from "@/components/Wealth/WealthFourthSection";
import WealthHero from "@/components/Wealth/WealthHero";
import WealthSecondSection from "@/components/Wealth/WealthSecondSection";
import WealthServices from "@/components/Wealth/WealthServices";
import WealthThirdSection from "@/components/Wealth/WealthThirdSection";

export default function Wealth() {
  return (
    <>
      <WealthHero />
      <WealthServices />
      <WealthFirstSection />
      <WealthSecondSection />
      <WealthThirdSection />
      <WealthFourthSection />
      <WealthFifthSection />
    </>
  );
}
