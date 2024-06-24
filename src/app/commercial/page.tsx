import CommercialFeature from "@/components/Commercial/CommercialFeature";
import CommercialForthSection from "@/components/Commercial/CommercialForthSection";
import CommercialHero from "@/components/Commercial/CommercialHero";
import CommercialSecondSection from "@/components/Commercial/CommercialSecondSection";
import MainLayout from "@/components/layouts/MainLayout";

export default function Commercial() {
  return (
    <MainLayout>
      <CommercialHero />
      <CommercialFeature />
      <CommercialSecondSection />
      <CommercialForthSection />
    </MainLayout>
  );
}
