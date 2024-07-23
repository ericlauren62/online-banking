import BusinessFirstSection from "@/components/Businesspage/BusinessFirstSection";
import Hero from "@/components/Businesspage/Hero";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

export default function Business() {
  return (
    <MainLayout>
      <Hero />
      <BusinessFirstSection />
    </MainLayout>
  );
}
