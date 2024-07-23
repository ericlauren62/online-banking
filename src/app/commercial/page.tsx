import CommercialFeature from "@/components/Commercial/CommercialFeature";
import CommercialForthSection from "@/components/Commercial/CommercialForthSection";
import CommercialHero from "@/components/Commercial/CommercialHero";
import CommercialSecondSection from "@/components/Commercial/CommercialSecondSection";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

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
