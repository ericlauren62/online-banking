import AboutFifthSection from "@/components/About/AboutFifthSection";
import AboutFirstSection from "@/components/About/AboutFirstSection";
import AboutForthSection from "@/components/About/AboutForthSection";
import AboutHero from "@/components/About/AboutHero";
import AboutSecondSection from "@/components/About/AboutSecondSection";
import AboutSevenSection from "@/components/About/AboutSevenSection";
import AboutSixSection from "@/components/About/AboutSixSection";
import AboutThirdSection from "@/components/About/AboutThirdSection";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

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
