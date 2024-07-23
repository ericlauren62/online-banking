import MorgageFeature from "@/components/Morgage/MorgageFeature";
import MorgageFirstSection from "@/components/Morgage/MorgageFirstSection";
import MorgageHero from "@/components/Morgage/MorgageHero";
import MorgageSecondSection from "@/components/Morgage/MorgageSecondSection";
import MorgageThirdSection from "@/components/Morgage/MorgageThirdSection";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Morgage | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

export default function page() {
  return (
    <MainLayout>
      <MorgageHero />
      <MorgageFeature />
      <MorgageFirstSection />
      <MorgageSecondSection />
      <MorgageThirdSection />
    </MainLayout>
  );
}
