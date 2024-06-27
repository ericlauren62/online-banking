import PersonalFeatured from "@/components/Personalpage/PersonalFeatured";
import PersonalSecondSection from "@/components/Personalpage/PersonalSecondSection";
import Hero from "@/components/Personalpage/PersonalHero";
import PersonalThirdSection from "@/components/Personalpage/PersonalThirdSection";
import MainLayout from "@/components/layouts/MainLayout";

export default function Personal() {
  return (
    <MainLayout>
      <Hero />
      <PersonalFeatured />
      <PersonalSecondSection />
      <PersonalThirdSection />
    </MainLayout>
  );
}
