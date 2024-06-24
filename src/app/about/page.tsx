import AboutFifthSection from "@/components/About/AboutFifthSection";
import AboutFirstSection from "@/components/About/AboutFirstSection";
import AboutForthSection from "@/components/About/AboutForthSection";
import AboutHero from "@/components/About/AboutHero";
import AboutSecondSection from "@/components/About/AboutSecondSection";
import AboutSevenSection from "@/components/About/AboutSevenSection";
import AboutSixSection from "@/components/About/AboutSixSection";
import AboutThirdSection from "@/components/About/AboutThirdSection";
import MainLayout from "@/components/layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <AboutHero />
      <AboutFirstSection />
      <AboutSecondSection />
      <AboutThirdSection />
      <AboutForthSection />
      <AboutFifthSection />
      <AboutSixSection />
      <AboutSevenSection />
    </MainLayout>
  );
}
