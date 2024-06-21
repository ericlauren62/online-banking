import Accordion from "@/components/Shared/Accordion";
import SmallBusinessFAQ from "@/components/Smallbusiness/SmallBusinessFAQ";
import SmallBusinessFeature from "@/components/Smallbusiness/SmallBusinessFeature";
import SmallBusinessFirstSection from "@/components/Smallbusiness/SmallBusinessFirstSection";
import SmallBusinessForthSection from "@/components/Smallbusiness/SmallBusinessForthSection";
import SmallBusinessHero from "@/components/Smallbusiness/SmallBusinessHero";
import SmallBusinessThirdSection from "@/components/Smallbusiness/SmallBusinessThirdSection";

export default function SmallBusiness() {
  return (
    <>
      <SmallBusinessHero />
      <SmallBusinessFeature />
      <SmallBusinessFirstSection />
      <SmallBusinessThirdSection />
      <SmallBusinessFAQ />
      <SmallBusinessForthSection />
    </>
  );
}
