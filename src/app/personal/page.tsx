import PersonalFeatured from "@/components/Personalpage/PersonalFeatured";
import PersonalSecondSection from "@/components/Personalpage/PersonalSecondSection";
import Hero from "@/components/Personalpage/PersonalHero";
import PersonalThirdSection from "@/components/Personalpage/PersonalThirdSection";

export default function Personal() {
  return (
    <>
      <Hero />
      <PersonalFeatured />
      <PersonalSecondSection />
      <PersonalThirdSection />
    </>
  );
}
