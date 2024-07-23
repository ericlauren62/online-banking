import CreditCardFirstSection from "@/components/CreditCard/CreditCardFirstSection";
import CreditCardHero from "@/components/CreditCard/CreditCardHero";
import CreditCardSecondSection from "@/components/CreditCard/CreditCardSecondSection";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credit Cards | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

export default function page() {
  return (
    <MainLayout>
      <CreditCardHero />
      <CreditCardFirstSection />
      <CreditCardSecondSection />
    </MainLayout>
  );
}
