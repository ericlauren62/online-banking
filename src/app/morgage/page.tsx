import MorgageFeature from "@/components/Morgage/MorgageFeature";
import MorgageFirstSection from "@/components/Morgage/MorgageFirstSection";
import MorgageHero from "@/components/Morgage/MorgageHero";
import MorgageSecondSection from "@/components/Morgage/MorgageSecondSection";
import MorgageThirdSection from "@/components/Morgage/MorgageThirdSection";

export default function page() {
  return (
    <>
      <MorgageHero />
      <MorgageFeature />
      <MorgageFirstSection />
      <MorgageSecondSection />
      <MorgageThirdSection />
    </>
  );
}
