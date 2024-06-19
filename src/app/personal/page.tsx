import PersonalFeatured from "@/components/Personalpage/PersonalFeatured";
import PersonalFirstSection from "@/components/Personalpage/PersonalFirstSection";
import PersonalSecondSection from "@/components/Personalpage/PersonalSecondSection";
import Hero from "@/components/Personalpage/PersonalHero";

export default function Personal() {
  return (
    <>
      <Hero />
      <PersonalFeatured />
      <PersonalSecondSection />
      <PersonalFirstSection />
    </>
  );
}
