import Accordion from "@/components/Shared/Accordion";
import SmallBusinessFAQ from "@/components/Smallbusiness/SmallBusinessFAQ";
import SmallBusinessFeature from "@/components/Smallbusiness/SmallBusinessFeature";
import SmallBusinessFirstSection from "@/components/Smallbusiness/SmallBusinessFirstSection";
import SmallBusinessForthSection from "@/components/Smallbusiness/SmallBusinessForthSection";
import SmallBusinessHero from "@/components/Smallbusiness/SmallBusinessHero";
import SmallBusinessThirdSection from "@/components/Smallbusiness/SmallBusinessThirdSection";
import MainLayout from "@/components/layouts/MainLayout";

export default function SmallBusiness() {
  return (
    <MainLayout>
      <SmallBusinessHero />
      <SmallBusinessFeature />
      <SmallBusinessFirstSection />
      <SmallBusinessThirdSection />
      <SmallBusinessFAQ />
      <SmallBusinessForthSection />
    </MainLayout>
  );
}
