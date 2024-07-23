import PersonalFeatured from "@/components/Personalpage/PersonalFeatured";
import PersonalSecondSection from "@/components/Personalpage/PersonalSecondSection";
import Hero from "@/components/Personalpage/PersonalHero";
import PersonalThirdSection from "@/components/Personalpage/PersonalThirdSection";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Banking | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

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
