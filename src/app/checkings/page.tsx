import CheckingsFirstSection from "@/components/Checkings/CheckingsFirstSection";
import CheckingsHero from "@/components/Checkings/CheckingsHero";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkings | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

export default function page() {
  return (
    <MainLayout>
      <CheckingsHero />
      <CheckingsFirstSection />
    </MainLayout>
  );
}
