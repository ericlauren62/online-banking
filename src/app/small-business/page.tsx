import Accordion from "@/components/Shared/Accordion";
import SmallBusinessFAQ from "@/components/Smallbusiness/SmallBusinessFAQ";
import SmallBusinessFeature from "@/components/Smallbusiness/SmallBusinessFeature";
import SmallBusinessFirstSection from "@/components/Smallbusiness/SmallBusinessFirstSection";
import SmallBusinessForthSection from "@/components/Smallbusiness/SmallBusinessForthSection";
import SmallBusinessHero from "@/components/Smallbusiness/SmallBusinessHero";
import SmallBusinessThirdSection from "@/components/Smallbusiness/SmallBusinessThirdSection";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Business | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

export default function SmallBusiness() {
  return (
    <MainLayout>
      <SmallBusinessHero />
      <SmallBusinessFeature />
      <SmallBusinessFirstSection />
      <SmallBusinessThirdSection />
      <SmallBusinessFAQ />
      <SmallBusinessForthSection />
    </MainLayout>
  );
}
